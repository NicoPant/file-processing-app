import fs from 'fs';
import { FileRecord, PATHS } from '../types/file';
import { processFile } from './fileProcessor';

export function watchIncomingFolder (fileRecords: Map<string, FileRecord>) {
    fs.watch(PATHS.INCOMING, (eventType, filename) => {
        if (eventType === 'rename' && filename && !fileRecords.has(filename)) {
            processFile(filename, fileRecords);
        }
    });
}