import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import Container from '../components/Container'
import Opening from '../components/Opening'

class Film extends Component {
  state = { title: '', description: '' }

  async componentDidMount() {
    const { location } = this.props
    const { data } = await axios.get(`${location.state.url}?format=json`)

    this.setState({ title: data.title, description: data.opening_crawl })
  }

  render() {
    const { title, description } = this.state

    return (
      <Container>
        <Opening title={title} description={description} />
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
