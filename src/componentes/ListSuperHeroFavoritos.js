import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import  {styles} from './layout.js';

class ListSuperHeroFavoritos extends Component {
  render() {

    const { classes } = this.props;
    return (
        <main>  
            <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography
                                component="h1"
                                variant="h3"
                                color="inherit"
                                gutterBottom
                            >
                                Listando de Favoritos
                             </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                <List className={classes.root}>
                                    {
                                        this.props.listaFavoritos.map(favorito => {
                                            return (
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar alt="Remy Sharp" src={favorito.url} />
                                                    </ListItemAvatar>
                                                    <br />    <br />
                                                    <Typography variant="h5" color="inherit" paragraph>
                                                        {favorito.name}
                                                    </Typography>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    )
  }
}

export default withStyles(styles)(ListSuperHeroFavoritos);
