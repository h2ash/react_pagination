import React from 'react'

const Person = ({person, key}) => {


  return (
    <tr key={key}>
      <td>{person.id}</td>
      <td>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
    </tr>
  )
}

export default Person