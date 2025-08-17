import FilesTable from '../components/FilesTable';
import { Box, Typography } from "@mui/material";

export default function Home () {
    return (
        <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 8 } }>
            <Typography variant={ "h3" }>File Processing Dashboard</Typography>
            <FilesTable />
        </Box>
    );
}
