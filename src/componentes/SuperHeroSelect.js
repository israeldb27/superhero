import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import  {styles} from './layout.js';

class SuperHeroSelect extends Component {
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
                                SuperHero Selecionado
                             </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {this.props.heroifavorito.name}
                            </Typography>

                            <Typography>
                                <Grid container spacing={90} width={100}>
                                    <Grid sm={6} md={4} lg={8}>
                                        <Card className={classes.card}>
                                            <CardMedia
                                                className={classes.media}
                                                image={this.props.heroifavorito.url}
                                            />
                                        </Card>
                                    </Grid>

                                </Grid>
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    )
  }
}

export default withStyles(styles)(SuperHeroSelect);
