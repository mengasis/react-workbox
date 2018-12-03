import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.li``

const StyleLink = styled(Link)`
  color: yellow;
  text-decoration: none;

  :hover {
    color: white;
  }
`

const Box = ({ id, url, title }) => (
  <Container>
    <StyleLink to={{ pathname: `/Film/${id}`, search: '?format=json', state: { url } }}>
      {title}
    </StyleLink>
  </Container>
)

Box.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Box
