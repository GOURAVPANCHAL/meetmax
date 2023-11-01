import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box, Typography} from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Home = () => {
    return (
        <>
        <Box  sx={{pt:{xs:'4rem', md:'5rem', sm:'3rem'}, pb:{xs:'4rem', sm:'5rem', md:'5rem'}}} backgroundColor='#1C2534'>
        <Container >
            <Grid sx={{flexDirection:{xs:'column-reverse', sm:'column-reverse', md:'inherit'}}} container className='main' color='white'>
                <Grid item md={7}>
                    <Box>
                        <Typography display='flex' alignItems='center' fontSize='16px' mt={3} color='#9F9FA2'> <HorizontalRuleIcon />ALL FEATURES</Typography>
                        <Typography sx={{fontSize:{xs:'28px', md:'44px', sm:'44px'}, marginTop:{xs:'2rem'}}} mt={3} mb={3} fontWeight='600' lineHeight='1'>Video calls loved by extraordinary teams.</Typography>
                        <Typography fontSize='18px' pb={2} color='#CFCFD1'>Making hybrid‑conference inclusive with unique audio technology.</Typography>
                    </Box>
                    <Box>
                        <Grid container >
                            <Grid item md={6}>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Intergration with google meet
                                </Typography>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Get data event analytics
                                </Typography>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Protect events with a passcode
                                </Typography>
                            </Grid>
                            <Grid sx={{display:{xs:'none'}}} item md={6}>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Messages with participation
                                </Typography>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Advanced Q&A settings
                                </Typography>
                                <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                    <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Crowdsource questions
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
                <Grid item md={5}>
                    <Box>
                        <img alt='video call' width='100%' src='/videoCall.webp' />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>


    <Box  sx={{pt:{xs:'1rem', md:'4rem', sm:'3rem'}, pb:{xs:'0rem', sm:'3rem', md:'3rem'}}} backgroundColor='#1C2534'>
                <Container>
                    <Grid container className='main' color='white'>
                        <Grid item md={6}>
                            <Box>
                                <img alt='video call' width='100%' src='/videoCall2.webp' />
                            </Box>
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item md={5}>
                            <Box>
                                <Typography display='flex' alignItems='center' fontSize='16px' mt={3} color='#9F9FA2'> <HorizontalRuleIcon />BENEFITS OF YOU</Typography>
                                <Typography sx={{fontSize:{xs:'28px', sm:'44px', md:'44px'}}} mt={3} mb={3} fontWeight='600' lineHeight='1'>Fast, reliable and secure for your conferences</Typography>
                                <Typography variant="h6" pb={2} color='#CFCFD1'>By using us, get the benefits that make it easier for you in the conference for your convenience and the participants</Typography>
                            </Box>
                            <Box>
                                <Grid container >
                                    <Grid item md={6}>
                                        <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                            <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Security & Privacy

                                        </Typography>
                                        <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                            <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Audience Q&A

                                        </Typography>
                                        <Typography display='flex' mb={3} gap={1} alignItems='center' color='#9F9FA2'>
                                            <CheckCircleOutlineOutlinedIcon style={{ color: '#ED9174' }} /> Engagement
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>

    
    )
}

export default Home
