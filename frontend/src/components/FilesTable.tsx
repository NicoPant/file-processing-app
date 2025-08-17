'use client';

import React, { useEffect, useState } from 'react';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { fetchFiles, FileData } from '@/services/api';

export default function FilesTable () {
    const [ files, setFiles ] = useState<FileData[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);
    
    const loadFiles = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchFiles();
            setFiles(data);
        } catch {
            setError('Failed to fetch files. Please check if the backend is running.');
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        loadFiles();
    }, []);
    
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" p={ 4 }>
                <CircularProgress />
            </Box>
        );
    }
    
    if (error) {
        return (
            <Alert severity="error" sx={ { m: 2 } }>
                { error }
            </Alert>
        );
    }
    
    return (
        <Box>
            <TableContainer component={ Paper } sx={ { mt: 4 } }>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Filename</TableCell>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { files.map((file, index) => (
                            <TableRow key={ index }>
                                <TableCell>{ file.filename }</TableCell>
                                <TableCell>{ file.timestamp }</TableCell>
                                <TableCell>{ file.status }</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="flex-end" sx={ { mt: 2 } }>
                <Button
                    variant="contained"
                    onClick={ loadFiles }
                    disabled={ loading }
                >
                    Refresh
                </Button>
            </Box>
        </Box>
    );
}