import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  color: black;
  
`;

const H1 = styled.h1`
  font-family: 'Charcoal', sans-serif;
  margin-bottom: 1em;
  
`;


export const Heading = () => {

  return (
    <Header>
      <H1>Yellow Class React Assignment</H1>
       <h2>Photo feed in masonry format</h2>
      {/* <form>
        <Input type="text" placeholder="Search photos" />
        <Button>Search</Button>
      </form> */}
    </Header>
  )
}
