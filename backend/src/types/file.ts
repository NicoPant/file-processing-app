export interface FileRecord {
    id: string;
    filename: string;
    timestamp: Date;
    status: 'processing' | 'done' | 'error';
}

export const PATHS = {
    INCOMING: './incoming',
    DONE: './done',
    ERROR: './error',
    PYTHON_SCRIPT: './script.py'
};