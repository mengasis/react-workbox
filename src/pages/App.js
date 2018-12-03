import React, { Component } from 'react'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'
import List from '../components/List'
import Box from '../components/Box'

class App extends Component {
  state = { films: [] }

  async componentDidMount() {
    const { data } = await axios.get('https://swapi.co/api/films/?format=json')
    const films = data.results.map(film => ({ id: film.episode_id, title: film.title })) || []

    this.setState({ films })
  }

  render() {
    const { films } = this.state

    return (
      <Container>
        <Title>Films Star Wars</Title>
        <List>
          {films.map(film => (
            <Box key={film.id} {...film} />
          ))}
        </List>
      </Container>
    )
  }
}

export default App
