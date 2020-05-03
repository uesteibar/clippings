import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled(Link)`
  color: #efefef;
  transition: background 0.5s ease;
  text-decoration: none;
  font-size: 24px;
  background: rgba(239, 239, 239, 0.05);
  border: 1px solid rgba(239, 239, 239, 0.5);
  border-radius: 5px;
  padding: 8px;

  &:hover {
    background: rgba(239, 239, 239, 0.2);
    transition: background 0.5s ease;
  }
`


