import React, {Component} from 'react';
import ServicesOfSW from "../Services/Services";

class Hero extends Component {
    services = new ServicesOfSW();
    state = {hero:''}
    async componentDidMount() {
        const {id} = this.props;
        const hero = await this.services.getHeroById(id)
        this.setState({hero})
    }
    render() {
        const {hero} = this.state
        return (
            <div>
                <h3>Name: {hero.name}</h3>
                <h3>Height: {hero.height}</h3>
                <h3>Mass: {hero.mass}</h3>
                <h3>Eye color: {hero.eye_color}</h3>
                <h3></h3>
            </div>
        );
    }
}

export default Hero;