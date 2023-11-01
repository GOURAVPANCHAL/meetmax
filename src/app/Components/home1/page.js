'use client'
import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box, Typography, Button, CardActions, ButtonGroup } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './page.css'
import Link from 'next/link'
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Hoogaaa</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Meet Max: Your Go-To Platform for Effortless Company Meetings. Join, collaborate, and succeed in meetings like never before with Meet Max – the ultimate solution for seamless company-wide meeting participation and productivity" />
        <meta name="keywords" content="Meet, metting, meetings, online meeting, Webinar Hosting, Remote Meeting Platforms, hoogaaa, HOOGAAA, kanpur, hungama" />
        <meta name="author" content="Gourav Panchal, Hoogaaa, Satyam Sonkar" />
      </Helmet>
      <Box style={{ backgroundColor: '#1C2534' }}>
        <Container id="Home" >
          <Grid id="home_Section" sx={{ flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'inherit' } }} container>
            <Grid id="homeContent" item xs={12} md={6}>
              <Box sx={{ marginTop: { xs: '1rem', sm: '3rem', md: '5rem' } }}>
                <Typography sx={{ fontSize: { xs: '36px', md: '3rem', sm: '3rem' } }} mb={3} style={{ fontWeight: '700', color: 'white' }}>
                  Reliable, secure conference to get the best events
                </Typography>
                <Typography mb={3} sx={{ fontSize: { xs: '16px', sm: '20px', md: '20px' } }} style={{ color: '#CFCFD1' }}>
                  Hold incredible events, share knowledge, build and grow your product , create opportunity
                </Typography>
                <Box sx={{ display: { xs: 'grid', sm: 'grid', md: 'flex' } }}>
                  <Button sx={{ mb: { xs: '1rem', sm: '1rem' }, width: { xs: '100%', md: '37%', sm: '100%' }, fontSize:{xs:'14px', sm:'14px', md:'16px'} }} variant="contained" style={{ backgroundColor: '#E14817', borderRadius: '8px', marginRight: '1rem', padding: '16px 24px', textTransform: 'capitalize' }}>
                    <Link style={{ textDecoration: 'none', color: 'white', borderRadius: '8px' }} href='/Mettings/metting'>
                      Create Conference
                    </Link>
                  </Button>
                  <Button sx={{ mb: { xs: '1rem', sm: '1rem' }, width: { xs: '100%', md: '37%', sm: '100%' }, fontSize:{xs:'14px', sm:'14px', md:'16px'} }} style={{ color: 'white', padding: '16px 24px', border: '1px solid white', borderRadius: '8px', textTransform: 'capitalize' }}>
                    Watch Story <ArrowForwardIcon  style={{marginLeft:'7px'}}  />
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid id="homeImage" item xs={12} md={5}>
              <Box mt={5}>
                <img alt='home image' width='100%' height='100%' src='Image.webp' />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Grid sx={{ padding: { xs: '20px 10px 20px 10px', md: '20px' }, marginTop: { xs: '3rem', sm: '3rem', md: '5rem' } }} style={{ backgroundColor: '#222D40' }}>
          <Grid item xs={10} md={12}>
            <Container style={{ width: '100%' }}>
              <Grid item style={{ textAlign: 'center', justifyContent: 'space-between', width: '100%' }} sx={{ display: { md: 'flex' } }} container>
                <Grid item xs={6} md={1}>
                  <Typography >
                    <img alt='slack image'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='slack.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1}>
                  <Typography >
                    <img alt='netflix'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='netflix.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1} >
                  <Typography >
                    <img alt='google'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='google.webp' /></Typography>
                </Grid>
                <Grid item xs={6} md={1} >
                  <Typography >
                    <img alt='airbnb'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='airbnb.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1} >
                  <Typography >
                    <img alt='unicef'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='unicef.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1} >
                  <Typography >
                    <img alt='adobe'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='adobe.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1}>
                  <Typography >
                    <img alt='microsoft'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='microsoft.webp' />
                  </Typography>
                </Grid>
                <Grid item xs={6} md={1}>
                  <Typography >
                    <img alt='ship'
                      sx={{ width: { xs: '146px', md: '100%', sm: '100%' }, height: { xs: '94px' } }} src='ship.webp' />
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
