import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <>
    <ReactDiv1>
    <p>I am a Full Stack Development student at Hack The Gap. This week we are learning how to use React.
      This program has been really challenging. I had no previous experience with coding or tech! I have learned so much
      over the past few months. It is amazing to look back on the progress I have made.</p>
    </ReactDiv1>

<ReactDiv2>
    <p>I am currently working as a Billing Associate at a local non-profit, but I am hoping to make a career change very soon.
        I don't have a "dream job" at the moment but my end goal is to have a job that pays well & has a positive impact on my local community.
        I would love to use my new FSD skills to uplift marganized communities.</p> 
</ReactDiv2>

<ReactDiv3>
    <p>In my free time I like to...
    <ul>
      <li>Listen to music and podcasts</li>
      <li>Take walks to explore & appreciate my neighborhood</li>
      <li>Volunteer at the local children's hospital</li>
    </ul>
    </p>
</ReactDiv3>
</>
  );
}

export default Body;

const ReactDiv1 = styled.div`
  background-color: #ffd6eb;
  padding: 10px;
  margin: 25px;
;`

const ReactDiv2 = styled.div`
  background-color: #ffa6d2;
  padding: 10px;
  margin: 25px;
;`

const ReactDiv3 = styled.div`
  background-color: #ff45a2;
  padding: 10px;
  margin: 25px;
;`


