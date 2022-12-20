import React from 'react'
import { useState } from 'react';

import { createContext } from "react";

export const Datacontext =createContext(null)




const Dataprovider =({children})=> {


    const [account,setAccount]=useState('')
  return (
    <div>
      <Datacontext.Provider value={{ 
        

       }}> {children}</Datacontext.Provider>
    </div>
  )
}

export default  Dataprovider;