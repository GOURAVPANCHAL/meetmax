import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box, Typography } from '@mui/material'

const Home = () => {
    return (
        <>

            <Box sx={{ pb: { xs: '3rem', sm: '4rem', md: '4rem' }, pt: { xs: '3rem', md: '4rem', sm: '4rem' }, backgroundColor: '#F8F8F8' }}>
                <Container>
                    <Grid className='main' container>
                        <Grid item md={1}></Grid>
                        <Grid item xs={12} md={5}>
                            <Box>
                                <img alt='home2 image' width='100%' src='home2.webp' />
                            </Box>
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant='h3' sx={{ fontSize: { xs: '28px', md: '44px', sm: '44px' }, marginTop: { xs: '2rem' } }} fontWeight='600'>Everyone on their
                                own device.
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '16px', md: '20px', sm: '20px' } }} color='#57585D' mt={3}>
                                <b>Meet Max</b> is designed to be inclusive, by being able to use your own device to help hybrid-conference teams create, collaborate and celebrate together.
                            </Typography>
                        </Grid>
                        {/* <Grid xs={6} md={1}></Grid> */}
                    </Grid>
                </Container>
            </Box>

            <Container style={{marginTop:'3rem', marginBottom:'3rem', textAlign:'center'}} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                <Box>
                    <img width='100%' alt='confrensing' src='responsive.webp' />
                </Box>
                <Box>
                    <Typography variant='h3' sx={{ fontSize: { xs: '28px', md: '44px', sm: '44px' }, marginTop: { xs: '2rem' } }} fontWeight='600'>Powerful virtual conferencing
                        platform solution
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '16px', md: '20px', sm: '20px' } }} color='#57585D' mt={3}>
                        Dedicated spaces that make it easy to come together.
                    </Typography>
                </Box>
            </Container>

        </>
    )
}

export default Home
