'use client'
import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import '../../../../node_modules/@syncfusion/ej2-base/styles/material.css'
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import { Box, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
function App() {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
    },
  ];
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Calendar - Hoogaaa</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Meet Max: Your Go-To Platform for Effortless Company Meetings. Join, collaborate, and succeed in meetings like never before with Meet Max – the ultimate solution for seamless company-wide meeting participation and productivity" />
        <meta name="keywords" content="Meet, metting, meetings, online meeting, Webinar Hosting, Remote Meeting Platforms, hoogaaa, HOOGAAA, kanpur, hungama" />
        <meta name="author" content="Gourav Panchal, Hoogaaa, Satyam Sonkar" />
      </Helmet>
    <Container item sx={{ width: { lg: '80%', sm: '100%', xs: '100%', md: '100%' }, marginLeft: { md: '29%', sm: '0%', xs: '0%', lg: '20%' }, marginTop: { xs: '5rem', md: '7rem', lg: '5rem' } }}>
      <Box display='flex'>
        <Typography mb={5} variant="h4">Calendar</Typography>
      </Box>
      <ScheduleComponent
        selectedDate={new Date(2023, 1, 15)}
        eventSettings={{
          dataSource: data,
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </Container>
    </>
  );
}
export default App;