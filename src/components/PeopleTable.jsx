import React from 'react'
import Person from './Person'

class PeopleTable extends React.Component {

  render() {
    const {
      people,
      perPage,
      page,
    } = this.props;

    const startPageItem = page === 1 ? 1 : ((page - 1) * perPage) + 1;
    const endPageItem = (perPage * page);

    console.log(startPageItem);

    return (
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
            people
            .filter(person => 
              person.id >= startPageItem && person.id <= endPageItem)
            .map(person => (
              <Person 
                person={person}
                key={person.id}
              />
            ))
          }
        </tbody>
      </table>
    )
  }
}


export default PeopleTable