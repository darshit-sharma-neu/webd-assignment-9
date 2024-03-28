import React from 'react';
import Navbar from './navbar';
import { Grid, Paper, Button } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

export default function Listing() {

  const [jobs, setJobs] = React.useState([]);
  const [selectedJob, setSelectedJob] = React.useState({});

  const getJobs = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/api/v1/jobs/getAll',
      headers: {}
    };
    try {
      const response = await axios.request(config);
      setJobs(response.data);

    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = async (id) => {
    console.log(id);
    const [job] = jobs.filter(job => job._id === id);
    setSelectedJob(job);
  }

  getJobs();
  return (
    <>
      <Navbar></Navbar>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }
      }>
        <Grid container>
          <Grid item xs={4}>
            <Paper>
              <Grid item xs={4} md={12}>
                <List>
                  {
                    jobs.map((job) => {
                      return (
                        <ListItem key={job._id} onClick={() => handleClick(job._id)}>
                          <ListItemText primary={job.title} />
                        </ListItem>
                      )
                    })
                  }
                </List>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <div style={{
              padding: "20px"
            }}>
              {
                selectedJob?.title ?
                  <Paper>
                    <h1>{selectedJob.title}</h1>
                    <p>{selectedJob.updated_at}</p>
                    <p>{selectedJob.description}</p>
                    <p>{selectedJob.lastUpdated}</p>
                    <Button href={selectedJob.applyLink}>Apply</Button>
                  </Paper> :
                  <Paper>
                    <h1>Click on a job to view details</h1>
                  </Paper>
              }
            </div>
          </Grid>
        </Grid>
      </div>

    </>
  )
}
