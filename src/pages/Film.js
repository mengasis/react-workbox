import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'

class Film extends Component {
  state = { title: '' }

  async componentDidMount() {
    const { location } = this.props
    const { data } = await axios.get(`${location.state.url}?format=json`)

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
  location: PropTypes.shape({
    state: PropTypes.shape({ url: PropTypes.string.isRequired }),
  }).isRequired,
}

export default Film
