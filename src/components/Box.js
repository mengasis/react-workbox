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

const Box = ({ id, title }) => (
  <Container>
    <StyleLink to={`/Film/${id}?format=json`}>{title}</StyleLink>
  </Container>
)

Box.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Box
