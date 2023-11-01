'use client'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box, Typography, CardActions, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import '../home4/page.css'

const Home = () => {
    return (
        <>

            <Box sx={{ pt: { xs: '1rem', sm: '4rem', md: '4rem' }, pb: { xs: '3rem', sm: '4rem', md: '5rem' } }} backgroundColor='white'>
                <Container>
                    <Grid container>
                        <Grid item md={1}></Grid>
                        <Grid item md={5}>
                            <CardActions>
                                <Typography>
                                    <img alt='masking man' src="/MaskingMan.webp" />
                                </Typography>
                                <Box marginLeft='1rem'>
                                    <Typography fontSize='24px' fontWeight='600' color='#292D32'>Sunaryo Situmorang</Typography>
                                    <Typography fontSize='16px' fontWeight='400' color='#57585D'>Founder & CEO EventUp</Typography>
                                </Box>
                            </CardActions>
                        </Grid>
                        <Grid item md={5}>
                            <Typography className='before' sx={{ fontSize: { xs: '32px', md: '44px', sm: '40px' } }} fontWeight='600' lineHeight='55.44px' color='#0F1017'>
                                <Typography  component='span' style={{ color: '#E14817', fontSize: 'inherit' }}>"</Typography>
                                Our goal is to build software that enables users who need it to launch their products in this pandemic and all-digital time
                                <Typography component='span' style={{ color: '#E14817', fontSize: 'inherit' }}>"</Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container className='mettingSection' sx={{ pt: { xs: '2rem', md: '0', sm: '0' }, pb: { xs: '2rem', md: '0', sm: '0' } }}>
                <Grid  container spacing={2} sx={{ padding: { md: '4rem 0rem 4rem 4rem', xs: '20px', sm: '4rem 0rem 4rem 4rem' } }} className='main'>
                    <Grid item md={6}>
                        <Box>
                            <Typography sx={{ fontSize: { xs: '28px', md: '42px', sm: '44px' }, lineHeight: { xs: '36.4px', sm: '55.44px', md: '55.44px' }, maxWidth: { xs: '80%' } }} fontWeight='600' color="white">
                                Ready to setup your next conference?
                            </Typography>
                            <Typography sx={{ mt: { xs: '2rem', sm: '1rem', md: '1rem' }, mb: { xs: '2rem' } }}variant="h6" color='#CFCFD1'>Build opportunities for future opportunities for products, startups.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: { sm: 'grid', md: 'flex' }, justifyContent: { md: 'center', sm: 'center', xs: 'center' } }}>
                            <Button variant="contained" sx={{ mb: { xs: '1rem', sm: '1rem' }, width: { xs: '100%', md: '38%', sm: '100%' } }} style={{ backgroundColor: '#E14817', marginRight: '1rem', padding: '16px 24px', textTransform: 'capitalize', borderRadius:'8px' }}>
                                Create Conference
                            </Button>
                            <Button sx={{ mb: { xs: '1rem', sm: '1rem' }, width: { xs: '100%', md: '38%', sm: '100%' } }} variant="outlined" style={{ color: 'white', padding: '16px 24px', border: '1px solid white', borderRadius: '8px', textTransform: 'capitalize' }}>
                                Watch Story  <ArrowForwardIcon style={{ marginLeft: '7px' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home



