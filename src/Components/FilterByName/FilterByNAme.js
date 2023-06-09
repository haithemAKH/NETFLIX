import React from 'react'
import { Form } from 'react-bootstrap'
// fonction pour filtrer les movies par nom
const FilterByNAme = ({inputSearch,setInputSearch}) => {
  return (
    <div>
        <Form.Control
        type='text' placeholder='Enter movie title'
        className='filter-name'
        style={{width:'850px'}}
        onChange={(e)=>setInputSearch(e.target.value) }
        value={inputSearch}
        />
    </div>
  )
}

export default FilterByNAme