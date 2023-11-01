'use client'
import { Box, Container, Grid, Typography, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import DateRangeIcon from '@mui/icons-material/DateRange';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
const metting = () => {
  const [cards, setCards] = useState([]);
  const [cardCount, setCardCount] = useState(1);
  const [number, setNumber] = useState(0)

  const createMetting = () => {
    const newCard = {
      title: 'Front-End Metting',
      content: 'This is a new card.',
      Date: '18 Aug 2022',
      Time: '5:00 PM',
      Email: 'www.meetmax.com',
      copy: <ContentCopyIcon />,
      share: <ShareIcon />,
      dateIcon: <DateRangeIcon />,
      timeIcon: <QueryBuilderIcon />,
      color: 'red'
    };
    setCards([...cards, newCard]);
    setCardCount(cardCount + 1);
    setNumber(number + 1)
  };
  return (
    <>
      <Container item sx={{ width: { lg: '81%', sm: '100%', xs: '100%', md: '100%' }, marginLeft: { md: '29%', sm: '0%', xs: '0%', lg: '19%' }, marginTop: { xs: '5rem', md: '7rem', lg: '5rem' } }}>
        <Grid container marginBottom='2rem'>
          <Grid item xs={12} sm={6} md={6}>
            <Box mb={5} display='flex' justifyContent='space-between' >
              <Typography variant="h4">Metting</Typography>
               <Typography variant="h4">{number}</Typography>
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', md: 'block', sm: 'block' }, justifyContent: 'end', display: 'flex' }} xs={12} sm={6} md={6}>
            <Button onClick={createMetting} variant="contained" style={{ backgroundColor: '#E14817', padding: '10px', borderRadius: '8px', height: '60%' }}>
              <AddIcon />Generate Metting
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          {cards.map((item) =>
            <Grid style={{ background: '#EAEBF0', padding: '15px', borderRadius: '5px', marginBottom: '1rem' }} item sm={12} md={12} display='flex' alignItems='center'>

              <Grid container>
                <Grid item sm={12} xs={12} md={4}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Box color='#7E7E7E' display='flex' justifyContent='space-between' maxWidth='70%'>
                    {item.dateIcon} {item.Date} {item.timeIcon} {item.Time}
                  </Box>
                </Grid>
                <Grid item md={4}>

                </Grid>
                <Grid item sm={12} xs={12} md={4}>
                  <Box display='flex' justifyContent='space-around' alignItems='center'>
                    <Link href='#' style={{ textDecoration: 'none', color: '#7E7E7E' }}>{item.Email}</Link>
                    <IconButton style={{border:'1px solid #DAE0E6', borderRadius:'5px', color:'#272D37', padding:'10px', background:'white'}}>
                      {item.copy}
                    </IconButton>
                    <IconButton style={{border:'1px solid #DAE0E6', borderRadius:'5px', color:'white', padding:'10px', background:'#E14817'}}>
                      {item.share}
                    </IconButton>
                   </Box>

                </Grid>
              </Grid>

            </Grid>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default metting