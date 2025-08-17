export interface FileData {
    filename: string;
    timestamp: string;
    status: string;
}

export const fetchFiles = async (): Promise<FileData[]> => {
    try {
        const response = await fetch('http://localhost:8000/files');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${ response.status }`);
        }
        return await response.json();
    } catch(error) {
        throw error;
    }
};