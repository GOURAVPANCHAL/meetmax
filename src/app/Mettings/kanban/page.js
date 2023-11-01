'use client'
import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from '../Kanban/datasource.json';
import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import "/node_modules/@syncfusion/ej2-base/styles/material.css";
import '/node_modules/@syncfusion/ej2-buttons/styles/material.css';
import "/node_modules/@syncfusion/ej2-layouts/styles/material.css";
import '/node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '/node_modules/@syncfusion/ej2-inputs/styles/material.css';
import "/node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "/node_modules/@syncfusion/ej2-popups/styles/material.css";
import "/node_modules/@syncfusion/ej2-react-kanban/styles/material.css";
import { Helmet } from 'react-helmet';
function App() {
    let data = extend([], kanbanData, null, true);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kanban - Hoogaaa</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Meet Max: Your Go-To Platform for Effortless Company Meetings. Join, collaborate, and succeed in meetings like never before with Meet Max – the ultimate solution for seamless company-wide meeting participation and productivity" />
                <meta name="keywords" content="Meet, metting, meetings, online meeting, Webinar Hosting, Remote Meeting Platforms, hoogaaa, HOOGAAA, kanpur, hungama" />
                <meta name="author" content="Gourav Panchal, Hoogaaa, Satyam Sonkar" />
            </Helmet>
            <Container item sx={{ width: { lg: '81%', sm: '100%', xs: '100%', md: '100%' }, marginLeft: { md: '29%', sm: '0%', xs: '0%', lg: '19%' }, marginTop: { xs: '5rem', md: '7rem', lg: '5rem' } }}>
                <Box mb={5} display='flex' >
                    <Typography marginLeft='1rem' variant="h4">Kanban</Typography>
                </Box>
                <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee" }}>
                    <ColumnsDirective>
                        <ColumnDirective headerText="To Do" keyField="Open" />
                        <ColumnDirective headerText="In Progress" keyField="InProgress" />
                        {/* <ColumnDirective headerText="Testing" keyField="Testing" /> */}
                        <ColumnDirective headerText="Done" keyField="Close" />
                    </ColumnsDirective>
                </KanbanComponent>
            </Container>
        </>
    );
}
export default App