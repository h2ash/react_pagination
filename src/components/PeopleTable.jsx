import React from 'react'
import Person from './Person'

const PeopleTable = ({
  peopleWithOtherColumns
}) => (
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>sex</th>
        <th>born</th>
        <th>died</th>
      </tr>
    </thead>
    <tbody>
      {
        peopleWithOtherColumns.map(person => (
          <Person 
            person={person}
            key={person.id}
          />
        ))
      }
    </tbody>
  </table>
)
export default PeopleTable