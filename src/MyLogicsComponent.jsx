import React, { useState } from 'react'
import BtnComponent from './BtnComponent';
import Data from './Data';
import MenuComponent from './MenuComponent';
import TitalComponent from './TitalComponent';

const allcatagory=[...new Set(Data.map((mycata)=>{return mycata.catagary})),"All"]

const Menu = () => {
  const[data,setdata]=useState(Data)
  const[subcata,setsubcata]=useState(allcatagory);



  const filterfun=(cata)=>{
    if(cata==="All")
    {
      setdata(Data);
      return;
    }
    const catagarys=Data.filter((marafilter)=>marafilter.catagary===cata);
    setdata(catagarys);
  }

  return (
    

    <div className='logic'>
     
       <TitalComponent/>
      <BtnComponent filterfun={filterfun} subcata={subcata}/>
      <hr/>
      <MenuComponent data={data}/>
  
    </div>
  )
}

export default Menu;
