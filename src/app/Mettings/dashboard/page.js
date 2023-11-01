"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'
import { Button, CardActions, Fab, IconButton, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { SearchOutlined } from '@mui/icons-material';
import Metting from '../metting/page';
const Side = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <Drawer item sx={{ display: { sm: 'none', md: 'block', xs: 'none' } }} variant='permanent' display='flex'>
                <Box style={{ width: '257px', backgroundColor: '#1C2534', height: '100%' }}>
                    <Grid container>
                        <Grid width='100%' textAlign='center'>
                            <Typography sx={{
                                display: { xs: 'block', sm: 'block', md: 'block' }, padding: { xs: '20px', sm: '20px', md: '20px' }, fontWeight: 700,
                                textDecoration: 'none',
                                textAlign: 'start'
                            }}fontSize='24px'>
                                   <Link style={{textDecoration:'none', color:'#E14817'}} href='/'>
                                    Meet<span style={{ color: 'white' }}> Max</span>
                                    </Link> 
                            </Typography>
                            <Box>
                                <Typography>
                                    <Link href='metting'>
                                        <Button style={{ width: '100%', paddingTop: '1rem', paddingBottom: '1rem', backgroundColor: 'transparent', borderRadius: '0px', justifyContent: 'start' }} variant="contained">
                                            <EventAvailableIcon style={{ marginRight: '1rem' }} /> Metting
                                        </Button>
                                       {props.number}
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href='calendar'>
                                        <Button style={{ width: '100%', paddingTop: '1rem', paddingBottom: '1rem', backgroundColor: 'transparent', borderRadius: '0px', justifyContent: 'start' }} variant="contained">
                                            <DateRangeIcon style={{ marginRight: '1rem' }} /> Calender
                                        </Button>
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link href='kanban'>
                                        <Button style={{ width: '100%', paddingTop: '1rem', paddingBottom: '1rem', backgroundColor: 'transparent', borderRadius: '0px', justifyContent: 'start' }} variant="contained">
                                            <TextSnippetIcon style={{ marginRight: '1rem' }} /> Kanban
                                        </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box style={{ backgroundColor: '#2E3646', padding: '10px', margin: '1rem', borderRadius: '1rem', marginTop: '15rem' }}>
                                <Fab style={{ border: '2px solid #fff', borderStyle: 'dashed', background: 'transparent', color: 'white', marginBottom: '1rem' }} aria-label="add">
                                    <AddIcon />
                                </Fab>
                                <Typography fontSize='14px' color='white'>Add New Metting</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Drawer>
            <AppBar width='100%' sx={{ paddingLeft: { xs: '16px', md: '0px', sm: '0px' }, paddingRight: { xs: '3px', md: '0px', sm: '0px' } }} style={{ background: '#fff', boxShadow: 'none' }} >
                <Box sx={{ padding: { xs: '0px', md: '0rem 22px 0rem 17rem', sm: '0px' }, borderBottom: '1px solid lightgray' }}>
                    <Toolbar disableGutters>
                        <Grid container>
                            <Grid item md={8}></Grid>
                            <Grid item display='flex' justifyContent='end' gap={2} md={4} alignItems='center'>
                                <Typography>
                                <IconButton style={{ border: '1px solid #DAE0E6', width: '100%', borderRadius: '5px' }}>
                                    <SearchOutlined />
                                </IconButton>
                                </Typography>
                                <Typography>
                                <IconButton style={{ border: '1px solid #DAE0E6', width: '100%', borderRadius: '5px' }}>
                                    <NotificationsActiveIcon />
                                </IconButton>
                                </Typography>
                                <CardActions>
                                    <Typography>
                                        <img alt='masking man' src="/Avatar.png" />
                                    </Typography>
                                    <Box marginLeft='1rem'>
                                        <Typography fontSize='14px' fontWeight='500' color='#272D37'>Cristopher Calzoni</Typography>
                                        <Typography fontSize='14px' fontWeight='400' color='#5F6D7E'>Manager</Typography>
                                    </Box>
                                </CardActions>
                            </Grid>
                        </Grid>
                        <Typography item sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: { xs: 'end', sm: 'start' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color='black'><MenuIcon />
                            </IconButton>
                            <Menu item
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                            </Menu>
                        </Typography>
                    </Toolbar>
                </Box>
            </AppBar>
        </>
    );
}

export default Side