import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'

class Film extends Component {
  state = { title: '' }

  static async getDerivedStateFromProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const { data } = await axios.get(
        `https://swapi.co/api/films/${nextProps.match.params.id}?format=json`,
      )

      return { title: data.title }
    }
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

Film.propTypes = { title: PropTypes.string }

export default Film
