import React from 'react';
import Navigation from './Navigation';
import { Grid } from '@mui/material';

const styles = {
    header: {
        overflow: 'auto',
        paddingTop: 25,
        paddingBottom: 25,
        borderBottom: "1px solid #007b6d"
    },
    title: {
        marginTop: 0,
        marginBottom: 0
    }
};

export default function Header({ handlePageChange }) {
    return (
        <Grid container spacing={2} style={styles.header}>
            <Grid item xs={12} md={3}>
                <h1 style={styles.title}>Casey Robison</h1>
            </Grid>
            <Grid item xs={12} md={6}>
                <Navigation handlePageChange={handlePageChange} />
            </Grid>
        </Grid>
    );
}
