import React, { Component } from 'react';
export default class Home extends Component {
    state = {
        results: [],
        next: "",
        previous: "",
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    results: data.results,
                    next: data.next,
                    previous: data.previous
                });
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {
        console.log(this.state.previous);
                console.log(this.state.next);
                console.log(this.state.results);

        let resultsList = this.state.results.map((pokemon) => {
            return ( <li><a href={"details/"+pokemon.name}>{pokemon.name}</a></li> )
        });

        return (
            <div>
                <ul className="pokéList">
                    {resultsList}
                </ul>
            </div>
        );
    }
}