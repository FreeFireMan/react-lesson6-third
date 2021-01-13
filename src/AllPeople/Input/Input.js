import React, {Component} from 'react';
import ServicesOfSW from "../Services/Services";
import Hero from "../Hero/Hero";

class Input extends Component {

    state = {id: null}


    onMySubmit = (ev) => {
        ev.preventDefault()
        let id = ev.target.children[0].value
        this.setState({id})
    }
    render() {
        const {id} = this.state;
        console.log(id)
        return (
            <div>
                <form action="" onSubmit={this.onMySubmit}>
                    <input type="number"/>
                    <button>SUBMIT</button>
                </form>
                {
                    id && <Hero id={id} key = {id}/>
                }
            </div>
        );
    }
}

export default Input;