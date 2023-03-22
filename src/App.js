import React from 'react';
import Title from './components/Title';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import Body from './components/Body';
import styled from 'styled-components';

function App() {
  return (
    <ReactDiv>
      <Title />
      <Body />
      <Input />
      <SubmitButton />
    </ReactDiv>
  );
}

export default App;

const ReactDiv = styled.div`
;`
