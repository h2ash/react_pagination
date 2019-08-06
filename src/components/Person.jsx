import React from 'react'

const Person = ({ person, key }) => {


  return (
    <tr key={key}>
      <th className='table__th-person-id' scope='row'>{person.id}</th>
      <td className='table__td-person-name'>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
    </tr>
  )
}

export default Person