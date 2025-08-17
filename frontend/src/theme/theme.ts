import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2563eb', // Blue-600
            light: '#3b82f6', // Blue-500
            dark: '#1d4ed8', // Blue-700
        },
        secondary: {
            main: '#64748b', // Slate-500
            light: '#94a3b8', // Slate-400
            dark: '#475569', // Slate-600
        },
        background: {
            default: '#f8fafc', // Slate-50
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a', // Slate-900
            secondary: '#475569', // Slate-600
        },
        divider: '#e2e8f0', // Slate-200
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3,
            letterSpacing: '-0.025em',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.02em',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
            letterSpacing: '0.01em',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                    border: '1px solid #e2e8f0',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-head': {
                        backgroundColor: '#f1f5f9', // Slate-100
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: '#334155', // Slate-700
                        borderBottom: '2px solid #e2e8f0',
                    },
                    '& .MuiTableCell-body': {
                        fontSize: '0.875rem',
                        padding: '12px 16px',
                        borderBottom: '1px solid #f1f5f9',
                    },
                    '& .MuiTableRow-root:hover': {
                        backgroundColor: '#f8fafc', // Slate-50
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 500,
                    borderRadius: '6px',
                    padding: '8px 16px',
                },
                contained: {
                    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    '&:hover': {
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    border: '1px solid',
                },
                colorError: {
                    backgroundColor: '#fef2f2', // Red-50
                    borderColor: '#fecaca', // Red-200
                    color: '#991b1b', // Red-800
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: '#2563eb', // Blue-600
                },
            },
        },
    },
});

export default theme;