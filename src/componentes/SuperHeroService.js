import React, { Component } from 'react'

 class SuperHeroService extends Component {

    static carregarSuperhero() {
        return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/107/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {                        
                  resolve(hero)
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))
        })
    }

    static carregarBlackWindow(){
        return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/107/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {
                  console.log('Herois recuperados: ' + hero.name)    
                  resolve(hero)            
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
        })
    }     
    
    static carregarIronMan(){
        return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/346/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {
                  console.log('Herois recuperados: ' + hero.name)    
                  resolve(hero)            
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
        })
      }
    
    static carregarHulk(){
        return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/332/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {
                  console.log('Herois recuperados: ' + hero.name)    
                  resolve(hero)            
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
        })
      }
    
    static carregarThor(){
        return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/659/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {
                  console.log('Herois recuperados: ' + hero.name)    
                  resolve(hero)            
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
        })
      }
    
    static carregarCapitaoAmerica(){
         return new Promise(resolve => {
            let url;
            url = 'https://www.superheroapi.com/api.php/1128459747325432/149/image';
            fetch(url)
              .then(response => response.json())
              .then(hero => {
                  console.log('Herois recuperados: ' + hero.name)    
                  resolve(hero)            
              })
              .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?" ))          
        })
      }
}

export default SuperHeroService
