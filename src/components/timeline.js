import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 60px 0;
`;

const Title = styled.h2`
  font-weight: bold;
  position: relative;
  margin: 5px 0;
`;

const Year = styled.p`
  font-size: 1.5rem;
  writing-mode: vertical-rl;
  font-weight: bold;
  position: relative;
  left: 0.2rem;
  margin: 4px 0;
`;

const ItemLeft = styled.p`
  width: 50%;
  margin-right: 50%;
  text-align: right;
  border-right: 6px solid var(--elements);
  padding: 10px;
  position: relative;
  left: 3px;
  font-size: 1.1rem;
`;

const ItemRight = styled.p`
  width: 50%;
  margin-left: 50%;
  text-align: left;
  border-left: 6px solid var(--elements);
  padding: 10px;
  position: relative;
  right: 3px;
  font-size: 1.1rem;
`;

const Timeline = () => {
  return (
    <Main>
      <Title>Timeline</Title>
      <ItemRight>Promoted to a Head of Big Data Visualization</ItemRight>
      <ItemLeft>Graduated university</ItemLeft>
      <Year>2020</Year>
      <ItemRight>Hired as Frontent developer by Consultant Plus</ItemRight>
      <ItemLeft>Practiced React, NodeJs</ItemLeft>
      <Year>2019</Year>
      <ItemRight>Worked as a Frontend teacher for children</ItemRight>
      <Year>2018</Year>
      <ItemLeft>Practiced JS, HTML, CSS</ItemLeft>
      <Year>2017</Year>
      <ItemRight>Began to be interested in Frontend</ItemRight>
      <ItemLeft>Went to the Peoples' Friendship University of Russia</ItemLeft>
      <Year>2016</Year>
    </Main>
  )
}

export default Timeline