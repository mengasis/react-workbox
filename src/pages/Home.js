import React, { Component } from 'react'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'
import List from '../components/List'
import Box from '../components/Box'
import Loading from '../components/Loading'

class App extends Component {
  state = { fetching: false, films: [] }

  async componentDidMount() {
    this.setState({ fetching: true })
    const { data } = await axios.get('https://swapi.co/api/films/?format=json')

    const films = data.results.map(film => ({
      id: film.episode_id,
      title: film.title,
      url: film.url,
    })) || []

    this.setState({ films, fetching: false })
  }

  render() {
    const { films, fetching } = this.state

    return (
      <Container>
        <Title>Films Star Wars</Title>
        {fetching ? (
          <Loading />
        ) : (
          <List>
            {films.map(film => (
              <Box key={film.id} {...film} />
            ))}
          </List>
        )}
      </Container>
    )
  }
}

export default App
