import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <>
    <NewTitle>Monica's FSD Project</NewTitle>
    <h2>This is my project demo</h2>
    </>
  );
}
export default Title;
const NewTitle = styled.h1`
  background-color: #e6e049;
  text-decoration: underline;
  font-style: italic;
  font-size: 60px;
;`