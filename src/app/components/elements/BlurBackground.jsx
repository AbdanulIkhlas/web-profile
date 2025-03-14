import React from 'react'
const BlurBackground = ( { children } ) => {
  return (
    <div className={`w-full h-[54px] md:h-[149px] backdrop-filter backdrop-blur-[10px] bg-black/70`} >
      { children }
    </div>
  )
}

export default BlurBackground