import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { FaRegSmileWink } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';
import { IoIosTrendingUp } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import Timeline from '../components/timeline';

const Content = styled.div`
  width: 900px;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 96%;
  }
`;

const List = styled.ul`
  margin-left: 30px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background-color: var(--bg-elements);
`;


const Main = () => {
  const profSkills = ['HTML', 'CSS', 'JS', 'React', 'NodeJS', 'Postgresql', 'Docker', 'Git', 'CI/CD', 'UI/UX', 'Jenkins', 'Jira'];
  const mySkills = ['GatsbyJS', 'GraphQL', 'React native', 'Sport ', 'Cats '];
  return(
    <Layout page='main'>
      <Content>
        <h2>Hey, I’m Maksim Novoseltsev</h2>
        <p>I’m a <strong>full stack developer</strong>. I work at a computer reference legal system Consultant Plus as a Head of Big Data Visualization. You’ve found my personal page. Everything you want to know about me and more is here <FaRegSmileWink /></p>
        <h2>Work experience <IoIosTrendingUp /></h2>
        <p><strong>Consultant Plus</strong><br />2 years<br />Full stack developer, Head of Big Data Visualization</p>
        <hr />
        <p><strong>Duties:</strong></p>
        <List>
          <li>Management of two developers</li>
          <li>Development of analytical sites on React + NodeJs + Postgresql</li>
          <li>Code review</li>
          <li>CI/CD</li>
          <li>Design</li>
        </List>
        <p><strong>Achievements:</strong></p>
        <List>
          <li>More than 10 analytical sites have been written</li>
          <li>Configured CI/CD in gitlab</li>
          <li>Designed the architecture of tables in postgresql for all analytical sites</li>
          <li>Supported analytical websites used by over 100 people</li>
          <li>Implemented my architecture React + NodeJS</li>
          <li>Worked with Big Data</li>
          <li>Configured Jenkins</li>
        </List>
        <h2>Professional skills</h2>
        <Skills>
        {
          profSkills.map((skill, i) => (<Skill key={i}>{skill}</Skill>))
        }
        </Skills>
        <h2>Personal skills</h2>
        <Skills>
        {
          mySkills.map((skill, i) => (<Skill key={i}>{skill}{skill === 'Sport ' ? <CgGym /> : skill === 'Cats ' ? <FaCat/> : null}</Skill>))
        }
        </Skills>
        <Timeline/>
      </Content>
    </Layout>
  )
}

export default Main;