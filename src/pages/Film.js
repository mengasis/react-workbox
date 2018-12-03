import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import episodeFormat from '../utils/episodeFormat'

import Container from '../components/Container'
import Opening from '../components/Opening'

class Film extends Component {
  state = { title: '', description: '' }

  async componentDidMount() {
    const { location } = this.props
    const { data = { title: '', opening_crawl: '', episode_id: '' } } = await axios.get(
      `${location.state.url}?format=json`,
    )

    this.setState({
      title: data.title.toUpperCase(),
      description: data.opening_crawl,
      episode: episodeFormat(data.episode_id),
    })
  }

  render() {
    const { title, description, episode } = this.state

    return (
      <Container>
        <Opening episode={episode} title={title} description={description} />
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
