import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({stars, reviews }) => {

  const tempStars = Array.from({length: 5}, (_, index)=>{
    const number = index + 0.5
    return (
    <span key={index}>
      {
        stars >= (index + 1)
          ? <BsStarFill /> 
          : (stars >= number 
            ? <BsStarHalf /> 
            : <BsStar />
          )
      }
    </span>
    )
  })

  return <Wrapper>
    <div className="stars">{tempStars}</div>
    <p className='reviews'>({reviews} customer reviews)</p>
  </Wrapper>
}

// const Stars = ({reviews, stars}) => {

//   return <Wrapper>
//     <div className="stars">
//       {/* star */}
//       <span>
//         {
//           stars >= 1 
//             ? <BsStarFill /> 
//             : (stars >= 0.5 
//               ? <BsStarHalf /> 
//               : <BsStar />
//             )
//         }
//       </span>
//       {/* end of star */}
//       {/* star */}
//       <span>
//         {
//           stars >= 2 
//             ? <BsStarFill /> 
//             : (stars >= 1.5 
//               ? <BsStarHalf /> 
//               : <BsStar />
//             )
//         }
//       </span>
//       {/* end of star */}
//       {/* star */}
//       <span>
//         {
//           stars >= 3 
//             ? <BsStarFill /> 
//             : (stars >= 2.5 
//               ? <BsStarHalf /> 
//               : <BsStar />
//             )
//         }
//       </span>
//       {/* end of star */}
//       {/* star */}
//       <span>
//         {
//           stars >= 4 
//             ? <BsStarFill /> 
//             : (stars >= 3.5 
//               ? <BsStarHalf /> 
//               : <BsStar />
//             )
//         }
//       </span>
//       {/* end of star */}
//       {/* star */}
//       <span>
//         {
//           stars === 5 
//             ? <BsStarFill /> 
//             : (stars >= 4.5 
//               ? <BsStarHalf /> 
//               : <BsStar />
//             )
//         }
//       </span>
//       {/* end of star */}
//     </div>
//     <p className='reviews'>({reviews} customer reviews)</p>
//   </Wrapper>
// }

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
