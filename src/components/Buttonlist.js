import React from 'react'
import FilterButton from './FilterButton'

const Buttonlist = () => {
  return (
    <div className='flex'>
      {/**Collection of Filter Buttons */}
      <FilterButton name={"All"}/>
      <FilterButton name={"Sports"}/>
      <FilterButton name={"Fashion"}/>
      <FilterButton name={"React"}/>
      <FilterButton name={"Motivation"}/>
    </div>
  )
}

export default Buttonlist
