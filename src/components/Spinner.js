import React from 'react'
import Loading from "./Loading.gif"

const Spinner=()=> {
    return (
      <div className='text-center'>
          <img className="my-4"  src={Loading}  alt="Pic"  style={{height:'50px',width:'50px'}}/>
      </div>
    
    )
}

export default Spinner;