import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const color = "#1b1b1b"

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  position: relative;
  background: ${color};
  color: #efefef;
  height: 72px;
`

const NavLink = styled(Link)`
  color: #efefef;
  font-weight: bold;
  text-decoration: none;
`;

const Navigation = () => (
  <Background>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/random">See a random note</NavLink>
  </Background>
)

export default Navigation
