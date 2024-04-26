import React from 'react'

const FilterButton = ({name}) => {
  return (
    <div className=''>
      <button className='bg-gray-200 rounded-lg border px-3 py-1 m-2'>{name}</button>
    </div>
  )
}

export default FilterButton
