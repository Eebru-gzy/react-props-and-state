import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
/*
class App extends Component {
    render() {

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Eebru',
                job: 'actor',
            },
            {
                name: 'Dee',
                job: 'Dev',
            },
            {
                name: 'Stutern',
                job: 'Tutor',
            },
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            
        ]
        return (
            <div className='container'>
                <Table charaters = { characters }/>
            </div>
        )
    }
}
*/

class App extends Component {

    state = {
        characters: [],
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }


    handleSubmit = character => { 
        this.setState({
            characters: [...this.state.characters, character]
        })

    }

    render() {
        const { characters } = this.state

        return (
            <div className= 'container'>
                <Table characterData = {characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}




export default App