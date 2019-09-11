import React, {Component} from 'react';
import './Pokecard.css';

//const POKE_API = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render(){
        const idFix = (id) => {
            if(id <= 9){
                id = `00${id}`;
            }else if(id <= 99){
                id = `0${id}`;
            }else{
                id = id;
            }
            return id;
        }
        const imgSrc = `${POKE_API}${idFix(this.props.id)}.png`;
        return(
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={imgSrc} />
                <div>{this.props.type}</div>
                <div>{this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;