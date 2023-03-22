import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <>
    <NewTitle>Welcome to My About Me...</NewTitle>
    <Name>My name is Monica & I live in the Twin Cities!</Name>
    </>
  );
}
export default Title;
const NewTitle = styled.h1`
  font-size: 50px;
  ;`

const Name = styled.h2`
  font-style: italic;
  font-size: 30px;
;`
