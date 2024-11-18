import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // Replace with appropriate icon if necessary

const WorkTogether = () => {
    return (
        <Box
            sx={{
                padding:4,
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                maxWidth: '450px',
                margin: 'auto',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: '#111827',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    marginBottom: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                Let&apos;s <span role="img" aria-label="wave">👋</span> Work Together
            </Typography>
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    ':hover': {
                        backgroundColor: '#e2e8f0',
                    },
                }}
                href="#contact"
            >
                Let&apos;s Talk <span style={{ marginLeft: '8px' }}>&rarr;</span>
            </Button>
        </Box>
    );
};

export default WorkTogether;
