import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import List from './components/List'
import Box from './components/Box'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Title = styled.span`
  color: #03a9f4;
  font-size: 45px;
  font-weight: 100;
`

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
