import { promises as fs } from 'fs';
import { spawn } from 'child_process';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { FileRecord, PATHS } from '../types/file';

export async function processFile (filename: string, fileRecords: Map<string, FileRecord>) {
    const id = uuidv4();
    const record: FileRecord = {
        id,
        filename,
        timestamp: new Date(),
        status: 'processing'
    };
    
    fileRecords.set(filename, record);
    console.log(`Processing file: ${ filename }`);
    
    try {
        const success = await runPythonScript(filename);
        if (success) {
            await moveFile(filename, PATHS.DONE);
            record.status = 'done';
        } else {
            await moveFile(filename, PATHS.ERROR);
            record.status = 'error';
        }
    } catch(error) {
        console.error(`Error processing file ${ filename }:`, error);
        await moveFile(filename, PATHS.ERROR);
        record.status = 'error';
    }
}

export async function runPythonScript (filename: string): Promise<boolean> {
    return new Promise((resolve) => {
        const filePath = path.join(PATHS.INCOMING, filename);
        
        const pythonProcess = spawn('python3', [ PATHS.PYTHON_SCRIPT, filePath ]);
        
        pythonProcess.on('close', (code) => {
            resolve(code === 0);
        });
        
        pythonProcess.on('error', (error) => {
            console.error('Python script error:', error);
            resolve(false);
        });
    });
}

export async function moveFile (filename: string, destinationDir: string): Promise<void> {
    const sourcePath = path.join(PATHS.INCOMING, filename);
    const destPath = path.join(destinationDir, filename);
    
    try {
        await fs.rename(sourcePath, destPath);
        console.log(`Moved ${ filename } to ${ destinationDir }`);
    } catch(error) {
        console.error(`Error moving file ${ filename }:`, error);
        throw error;
    }
}