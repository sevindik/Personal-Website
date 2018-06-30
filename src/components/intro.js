import React from 'react';
import Card from '@material-ui/core/Card'
import Menu from "../components/menu"
import withRoot from '../withRoot';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Intro = () => (
  <Card>
    <CardMedia
      image="../../images/beautiful-selfie.jpg"
      title="Ibrahim"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        That's me on the left
      </Typography>
      <Typography component="p">
        Welcome to my site! Click the menu on the left to read more about me (or don't, no one's forcing you).
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions> */}
</Card>
);

 export default Intro;
