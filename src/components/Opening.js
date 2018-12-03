import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Content = styled.div`
  animation: scroll 250s linear 0s;
  position: absolute;
  top: 100%;
`

const Animation = styled.div`
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  transform: perspective(300px) rotateX(25deg);
  transform-origin: 50% 100%;
  text-align: justify;
  position: absolute;
  margin-left: -9em;
  font-weight: bold;
  overflow: hidden;
  font-size: 350%;
  height: 50em;
  width: 18em;
  bottom: 0;
  left: 50%;

  :after {
    position: absolute;
    content: ' ';
    bottom: 60%;
    left: 0;
    right: 0;
    top: 0;
  }

  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -170%;
    }
  }
`
const Text = styled.p`
  color: #ffff82;
  text-align: center;
  font-size: 50px;
`

const Opening = ({ episode, title, description }) => (
  <Animation>
    <Content>
      <Text>{`Episode ${episode}`}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Content>
  </Animation>
)

Opening.propTypes = {
  episode: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

Opening.defaultProps = { episode: '', title: '', description: '' }

export default Opening
