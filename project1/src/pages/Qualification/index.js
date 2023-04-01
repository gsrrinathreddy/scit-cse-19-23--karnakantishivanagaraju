import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree chaitanya institute of technological sciences" src="https://img.collegedekhocdn.com/media/img/institute/logo/1434463349.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                6.8 CGPA
              </Typography>
              {" — B.Tech Computer science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SR Junior college" src="https://play-lh.googleusercontent.com/HwI81f5ncP-1-KqVhSsO7DoEDzZQRWpGk_BKt1Ql0eN_a9X2Xhr85nXwWdmkUfrn3zs=w240-h480-rw" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri gayatri junior college"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                81.6% percentage
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="vivekananda residential school" src="https://scontent.fhyd15-1.fna.fbcdn.net/v/t39.30808-6/305199209_459797562831312_1321849182918911819_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=e5UM_j4smH8AX9aaEqK&_nc_ht=scontent.fhyd15-1.fna&oh=00_AfA7YD-jBOeK7w0GahvipVf8v_-gbuZgvuUnvmaEqEp64A&oe=642AFE11s" />
        </ListItemAvatar>
        <ListItemText
          primary="vivekananda residential school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.2 CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}