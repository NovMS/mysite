import React from "react";
import Layout from '../components/layout';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Content = styled.div`
  width: 100%;
  text-align: center;
`;

const Pre = styled(Link)`
  font-size:  1.5rem;
  text-decoration: underline;
`;

const NotFoundPage = () => {
  return (
    <Layout page='main'>
      <Content>
        <h2>Oops!<br/>Page not found</h2>
        <Pre to='/'>Go home</Pre>
      </Content>
    </Layout>
  )
}

export default NotFoundPage
