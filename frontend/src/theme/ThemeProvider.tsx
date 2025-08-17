'use client';

import React from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import theme from './theme';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider ({ children }: ThemeProviderProps) {
    return (
        <div>
            <MuiThemeProvider theme={ theme }>
                <CssBaseline />
                { children }
            </MuiThemeProvider>
        </div>
    );
}