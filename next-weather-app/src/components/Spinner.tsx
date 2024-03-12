import React from 'react';
import { FadeLoader } from 'react-spinners';
import { Subtitle, Text } from "@tremor/react";

const Spinner = () => {
  return (
    <div className='flex flex-col fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white items-center justify-center'>
      <FadeLoader color="#f1ffb8" />
      <Subtitle className="text-xl text-center">
        Loading City Weather Information
      </Subtitle>
    </div>
  )
}

export default Spinner