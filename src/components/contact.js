import React from 'react';
import Navbar from './navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function contact() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
        <Card sx={{ width: 745 }}>
          <CardHeader
            title="Contact us"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Phone Number: +1 123 456 7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email id: example@gmail.com
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}