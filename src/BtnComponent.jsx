import React from 'react'

const BtnComponent = ({filterfun,subcata}) => {
  return (
    <>
      <div className='btnsDiv'>
      {
       subcata.map((cata,index)=>{
        return<button key={index} onClick={()=>filterfun(cata)} >{cata}</button> 
       })
      }  
      </div>
    </>
  )
}

export default BtnComponent;
