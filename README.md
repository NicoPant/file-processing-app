# File Processing Application

## What is this?

A full-stack application that automatically processes files using a Python script. You drop files in a folder, the system processes them, and you can see the results in a web dashboard.

## How it works

1. **Drop files** → Put files in the `backend/incoming/` folder
2. **Auto-processing** → Backend detects files and runs a Python script on them
3. **File sorting** → Successfully processed files go to `done/`, failed ones go to `error/`
4. **Dashboard** → View processing status on a web interface

## Architecture

```
Frontend (Next.js)  ←→  Backend (Node.js)  ←→  Python Script
     ↓                       ↓                      ↓
Web Dashboard          File Monitoring        File Processing
```

## Project Structure

```
file-processing-app/
├── backend/           # Node.js server that watches and processes files
│   ├── src/          # TypeScript source code
│   ├── incoming/     # Drop files here
│   ├── done/         # Successfully processed files
│   ├── error/        # Failed files
│   └── script.py     # Python processing script
└── frontend/         # Next.js web dashboard
    └── src/          # React components and pages
```

## Technology Stack

**Backend:**
- Node.js + TypeScript
- Express.js for API
- File system watching
- Python script execution

**Frontend:**
- Next.js
- Material-UI components
- Real-time file status display

## Getting Started

### Backend Setup
```bash
cd backend
make install    # Install deps and create directories
npm run dev     # Start the server
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev     # Start the dashboard
```

### Usage
1. Start both backend and frontend
2. Open http://localhost:3000 for the dashboard
3. Add files to `backend/incoming/` folder
4. Watch the processing status on the dashboard

## Key Features

### Backend
- **Auto file detection** - Monitors incoming folder in real-time
- **Python processing** - Runs custom script on each file
- **File organization** - Sorts files by processing result
- **REST API** - Provides file status data

### Frontend
- **Live dashboard** - Shows all processed files
- **Status tracking** - Processing, done, or error states
- **Refresh button** - Manual updates
- **Clean UI** - Material-UI components

## API

**GET /files** - Returns all processed files
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
- `processing` - Currently being processed
- `done` - Successfully processed
- `error` - Processing failed

## File Processing Flow

1. File added to `/incoming` folder
2. Backend detects the file
3. Python script runs on the file
4. Based on script result:
   - Success → File moved to `/done`, status = "done"
   - Failure → File moved to `/error`, status = "error"
5. Dashboard shows updated status

## Configuration

### Backend
- Server port: 8000 (in `src/index.ts`)
- Folder paths: Configured in `src/types/file.ts`
- Python script: `script.py`

### Frontend
- Dev port: 3000 (Next.js default)
- Backend API: `http://localhost:8000`
