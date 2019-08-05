import React from 'react'
import Person from './Person'

const PeopleTable = ({
  people,
  sumOfPeople,
  page,
  perPage,
  pages,
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
        people.map(person => (
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