import React, {
    Component
} from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        const imgSrc = `${POKE_API}${this.props.id}.png`;
        return ( <
            div className = 'Pokecard' >
            <
            h1 > {
                this.props.name
            } < /h1> <
            img src = {
                imgSrc
            }
            /> <
            div > {
                this.props.type
            } < /div> <
            div > {
                this.props.exp
            } < /div> <
            /div>
        );
    }
}

export default Pokecard;