# File Processing Backend

A Node.js/TypeScript application that watches for files in an incoming directory, processes them with a Python script,
and moves them based on processing results.

## Features

- **File Watching**: Monitors `/incoming` folder for new files using native `fs.watch`
- **Python Script Execution**: Runs a custom Python script on each file
- **File Management**: Moves files to `/done` or `/error` based on script success
- **REST API**: Provides endpoint to view file processing status
- **UUID Tracking**: Each file gets a unique identifier for tracking

## Project Structure

```
src/
├── types/
│   └── file.ts          # FileRecord interface and PATHS constants
├── utils/
│   ├── fileWatcher.ts   # File system watching logic
│   └── fileProcessor.ts # File processing, Python execution, file moving
└── index.ts             # Main server and API endpoint
```

## API Endpoints

### GET /files

Returns all processed files with their status.

**Response:**

```json
[
  {
    "filename": "example.txt",
    "timestamp": "2025-08-17T10:30:00.000Z",
    "status": "done"
  }
]
```

**Status values:**

- `processing`: File is currently being processed
- `done`: Python script executed successfully (exit code 0)
- `error`: Python script failed or encountered an error

## Directory Structure

- `/incoming`: Place files here for processing
- `/done`: Successfully processed files are moved here
- `/error`: Failed files are moved here

## Setup

1. Install dependencies and create directories:

```bash
make install
```

Or manually:
```bash
npm install
mkdir -p incoming done error
```

2. Build and run:

```bash
npm run dev
```

## Configuration

### Paths

All paths are configured in `src/types/file.ts`:

```typescript
export const PATHS = {
    INCOMING: './incoming',
    DONE: './done',
    ERROR: './error',
    PYTHON_SCRIPT: './script.py'
};
```

### Server Port

Default port is 8000, configured in `src/index.ts`:

```typescript
const PORT = 8000;
```

## How It Works

1. **File Detection**: `fs.watch` monitors the `/incoming` directory for new files
2. **Processing**: When a file is detected, it's assigned a UUID and status is set to 'processing'
3. **Python Execution**: The configured Python script runs with the file path as an argument
4. **Result Handling**: Based on the script's exit code:
    - Exit code 0: File moved to `/done`, status set to 'done'
    - Non-zero exit code: File moved to `/error`, status set to 'error'
5. **API Access**: File status can be queried via the REST API

## Dependencies

- **express**: Web server framework
- **uuid**: Unique identifier generation
- **@types/node**: TypeScript definitions for Node.js
- **@types/express**: TypeScript definitions for Express
- **@types/uuid**: TypeScript definitions for UUID

## Development

The application uses TypeScript and includes:

- Type definitions for all data structures
- Modular architecture with separate utilities
- Native Node.js APIs (no external file watching libraries)
- Error handling for file operations and process execution