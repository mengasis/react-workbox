import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'

class Film extends Component {
  state = { title: '' }

  async componentDidMount() {
    const { data } = await axios.get(
      `https://swapi.co/api/films/${this.props.match.params.id}?format=json`,
    )

    this.setState({ title: data.title })
  }

  render() {
    const { title } = this.state

    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    )
  }
}

Film.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number.isRequired }) }),
  }).isRequired,
}

export default Film
