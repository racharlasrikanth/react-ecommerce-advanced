import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return <Wrapper className='section'>
    <div className='section-center'>
      <div className='loading'></div>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  background: var(--clr-grey-10);
  display:grid;
  place-items:center;
  .loading{
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`
export default Loading
