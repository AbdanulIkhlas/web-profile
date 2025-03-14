import React from 'react'

const StatsDetail = ( {statsNumber, statsDescription} ) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
        <p className="text-white text-sm md:text-4xl">
            {statsNumber}
        </p>
        <p className="text-[#9C9C9C] text-[10px] md:text-lg">
            {statsDescription}
        </p>
    </div>
  )
}

export default StatsDetail