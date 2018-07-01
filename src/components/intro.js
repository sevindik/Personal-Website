import React from 'react';
import Card from '@material-ui/core/Card'
import Menu from "../components/menu"
import withRoot from '../withRoot';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import selfie  from '../images/beautiful-selfie.jpg';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, BrowserHistory } from "react-router-dom";

const anchorIherit = {
    textDecoration: 'none',
    color: 'inherit',
};

const Intro = (props) => (
  <Card>
    <CardContent>
    <CardMedia
      image="/images/beautiful-selfie.jpg"
      title="Ibrahim"
    />
      <Typography gutterBottom variant="headline" component="h2">
        That's me on the left
      </Typography>
      <Typography component="p">
        Welcome to my site! Click the menu on the left to read more about me (or don't, no one's forcing you).
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" >
        <a style={anchorIherit} href="https://www.linkedin.com/in/ibsev/">
          Visit my LinkedIn Profile
        </a>
      </Button>      
      <Button size="small" color="primary" component={Link} to="/resume" >
        View my resume!
      </Button>
      
      <img src={selfie}/>
    </CardActions>
  </Card>
);

export default Intro;
