import React from 'react';
import styled from 'styled-components';

const Main = styled.footer`
  width: 100%;
  background-color: var(--bg-elements);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Footer = () => {
  return (
    <Main>
      <p>Made by Novoseltsev Maksim</p>
      <p>2020</p>
    </Main>
  )
}

export default Footer