import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
    { title: 'UI UX Design', icon: '🖌️' },
    { title: 'Mobile App', icon: '📱' },
    { title: 'UI UX Design', icon: '🖌️' },
    { title: 'Mobile App', icon: '📱' },
];

const Service = () => {
    return (
        <Box sx={{ padding:4 }}>


            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 2,
                }}
            >
                <Typography variant="h5" component="div" fontWeight="bold">
                    Services I Offered
                </Typography>
                <Button aria-label="See all services" endIcon={<ArrowForwardIcon />}>
                    See All Services
                </Button>
            </Box>


            <Grid container spacing={2}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                                '&:hover': { boxShadow: '0px 6px 12px rgba(0,0,0,0.2)' },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h3" sx={{ marginBottom: 1 }}>
                                    {service.icon}
                                </Typography>
                                <Typography variant="h6">{service.title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Service;
