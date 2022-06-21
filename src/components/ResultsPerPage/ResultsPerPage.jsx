import React, { useState,useEffect } from "react"



const ResultsPerPage = props => {

   const [results_per_page_options,setResultsPerPageOptions] = useState([])

   useEffect(() => {
      setResultsPerPageOptions([10,20,50,100])  // todo : retrieve from config settings
   },[])

   let count = 0

   return (
      <select className="ui dropdown" style={{marginInline:".5rem"}} onChange={props.onChangeNumberResults}>
         <option value="">number of cards per page</option>
         {results_per_page_options.map((value) => (
            <option key={count++} value={value}>{value}</option>
         ))}
      </select>
   )
}

export default ResultsPerPage