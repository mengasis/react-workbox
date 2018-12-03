import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.li``

const Link = styled.a`
  color: yellow;
  text-decoration: none;

  :hover {
    color: white;
  }
`

const Box = ({ id, title }) => (
  <Container>
    <Link href={`https://swapi.co/api/films/${id}/?format=json`}>{title}</Link>
  </Container>
)

Box.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Box
