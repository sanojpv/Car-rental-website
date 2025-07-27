import React from 'react'

const Sort = ({setSorting}) => {
    const handlesort=(e)=>{
         setSorting(e.target.value)
    }
  return (
    <div>
       <select  onChange={handlesort}>
        <option value="">Sort</option>
        <option value={'low_to_high'}>Low to high</option>
        <option value={'high_to_low'}>High to low</option>
       </select>
    </div>
  )
}

export default Sort
