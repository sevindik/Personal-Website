import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import About from "../pages/about";
import Index from "../pages/index";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home'
import { BrowserRouter as Router, Route, Link, BrowserHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Routes from '../routes/routes'



const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class Menu extends React.Component {
  state = {
    open: false,
    title: "Ibrahim Sevindik Home Page"
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  setTitle = (newTitle) => () => {
    this.setState({
      title: newTitle
    });
  }
  
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const sideList = (
      <div className={this.props.classes.list}>
          <List>
            <ListItem button component={Link} to="/" onClick={this.setTitle("Ibrahim Sevindik Home Page")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>         
            <ListItem button component={Link} to="/about" onClick={this.setTitle("About Me")}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="About Me" />
            </ListItem>
          </List>
      </div>
    );

    return (
      <Toolbar>
          <IconButton 
            className={this.props.classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={this.toggleDrawer('left', true)} 
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
          <Typography variant="title" color="inherit" className={this.props.classes.flex}>
            {this.state.title}
          </Typography>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(Menu);
