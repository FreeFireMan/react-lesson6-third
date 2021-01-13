import React, {Component} from 'react';
import ServicesOfSW from "../Services/Services";
import Hero from "../Hero/Hero";

class Input extends Component {
    state = {value: null}

    render() {
        const {value} = this.state;
        return (
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={({target: {value}}) =>
                    { this.setState({value})}}
                />
                {
                    value && <Hero id={value} key={value}/>
                }
            </div>
        );
    }
}

export default Input;
