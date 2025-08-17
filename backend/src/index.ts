import express from 'express';
import { FileRecord } from './types/file';
import { watchIncomingFolder } from './utils/fileWatcher';

const PORT = 8000;
const fileRecords = new Map<string, FileRecord>();
const app = express();

app.use(express.json());

app.get('/files', (req, res) => {
    const files = Array.from(fileRecords.values()).map(record => ( {
        filename: record.filename,
        timestamp: record.timestamp,
        status: record.status
    } ));
    res.json(files);
});

watchIncomingFolder(fileRecords);

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
    console.log('Watching ./incoming folder for new files...');
}); 