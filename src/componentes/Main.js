import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Button from "@material-ui/core/Button";

import  {styles} from './layout.js';
import SuperHeroSelect from './SuperHeroSelect.js';
import ListSuperHeroFavoritos from './ListSuperHeroFavoritos.js';
import SuperHeroService from './SuperHeroService.js'

class Main extends Component {

    constructor(props) {
        super(props)
      
        this.state = {       
           heroes: [],         
           listaFavoritos: [],
           heroifavorito: ''
        }
      } 
  

  componentDidMount(){

    SuperHeroService.carregarBlackWindow().then(hero => {
      let list = this.state.heroes;
      list.push(hero)
      this.setState({heroes: list})
    })

    SuperHeroService.carregarIronMan().then(hero => {
      let list = this.state.heroes;
      list.push(hero)
      this.setState({heroes: list})
    })

    SuperHeroService.carregarHulk().then(hero => {
      let list = this.state.heroes;
      list.push(hero)
      this.setState({heroes: list})
    })

    SuperHeroService.carregarThor().then(hero => {
      let list = this.state.heroes;
      list.push(hero)
      this.setState({heroes: list})
    })

    SuperHeroService.carregarCapitaoAmerica().then(hero => {
      let list = this.state.heroes;
      list.push(hero)
      this.setState({heroes: list})
    })
  }   


  selecionaSuperHero(e, hero) {
      this.setState({heroifavorito: e}) 
  }

  adicionaListaFavoritos(e){
    let list = this.state.listaFavoritos;
    list.push(this.state.heroifavorito);
    this.setState({listaFavoritos: list});
  }


  render() {

    const { classes } = this.props;
   
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={90} width={100}>
          {
            this.state.heroes.map(hero => {
              return (
                <Grid sm={6} md={4} lg={2}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={hero.url}
                      onClick={this.selecionaSuperHero.bind(this, hero)}
                    />
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>

      <br /> <br /> 

      <SuperHeroSelect heroifavorito={this.state.heroifavorito}/>       

      <Button variant="contained" color="primary" onClick={this.adicionaListaFavoritos.bind(this) }  className={classes.button}>
        Adicionar Favorito
      </Button>

      <br /> <br />

      <ListSuperHeroFavoritos listaFavoritos={this.state.listaFavoritos} />
   
    </div>
    )
  }
}


export default withStyles(styles)(Main);
