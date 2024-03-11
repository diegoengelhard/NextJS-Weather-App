import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white flex items-center justify-center'>
      <FadeLoader color="#f1ffb8" />
    </div>
  )
}

export default Spinner