import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FaMoon, FaSun } from 'react-icons/fa';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';
import { MdMail } from "react-icons/md";


const Main = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--bg-header);
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  width: 900px;
  @media (max-width: 900px) {
    width: 96%;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Items = styled.div`
  display: flex;
`;

const Item = styled.a`
  font-size: 1.5rem;
  margin-right: 15px;
  padding: 0.5rem;
  border-radius: 0.2rem;
  transition: background-color 250ms;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: var(--bg-elements);
    transition: background-color 150ms;
  }
  :last-child {
    margin-right: 0;
  }
`;

const DarkMode = styled.div`
  width: 40px;
  height: 40px;
  background-color: #EDF2F7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
`;

const MoonIcon = styled(FaMoon)`
  font-size: 1rem;
`;

const Menu = () => {
  return (
    <Main>
      <Content>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <DarkMode mode={theme} onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
            {
              theme === 'dark' ? <FaSun /> : <MoonIcon />
            }
            </DarkMode>
          )}
        </ThemeToggler>
        <Items>
          <Item href='https://teleg.run/novms' target="_blank"><FaTelegramPlane/></Item>
          <Item href="mailto:no.ms@ya.ru" target="_blank"><MdMail/></Item>
          <Item href='https://github.com/NovMS' target="_blank"><FaGithub/></Item>
        </Items>
      </Content>
    </Main>
  )
}

export default Menu