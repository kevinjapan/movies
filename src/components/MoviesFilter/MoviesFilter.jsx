import React from "react"


const MoviesFilter = props => {

  const change_order_by = evt => {
      const order_by = evt.target.value
      if(typeof order_by !== 'string') return
      props.onOrderAndFilter(evt.target.value)
  }

  let count = 0

   return (
      <select className="ui dropdown" style={{marginInline:".5rem"}}  onChange={change_order_by}>
         <option value="">Sort by..</option>
         {props.filters.map((filter) => (
            <option key={count++} value={filter.key}>{filter.value}</option>
         ))}
      </select>
   )
}

export default MoviesFilter