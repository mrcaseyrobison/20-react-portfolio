import React from 'react';
import { Grid } from '@mui/material';
import {GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

export default function Footer() {
    return (
        <Grid container spacing={2} justifyContent="center" className="footer">
            <Grid item>
                <a href="mailto:mrcaseyrobison@gmail.com">
                    <h3><GrMail /></h3>
                </a>
            </Grid>
            <Grid item>
                <a href="https://github.com/mrcaseyrobison/" target="blank">
                    <h3><GrGithub /></h3>
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.linkedin.com/in/casey-robison-4664b642/" target="blank">
                    <h3><GrLinkedin /></h3>
                </a>
            </Grid>
        </Grid>
    );
}

