import React from 'react'

const OutputBy = ({onPerPageChange}) => (
  <div className="form-group">
    <label htmlFor='selectItemsPerPage'>
      Choose item per page: </label>
      <select 
        className="form-control"
        onChange={onPerPageChange}
        id='selectItemsPerPage'
        >
        <option value='3'>3</option>
        <option selected value='5'>5</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
      </select>
  </div>
)

export default OutputBy