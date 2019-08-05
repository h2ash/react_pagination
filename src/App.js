import React from 'react';
import './App.css';
import PeopleTable from './components/PeopleTable'

/***
 * [x] - выбрать API
 * [x] - подготовить вывод всей таблицы
 *    [x] - заголовки 
 * [] - base pagination
 *  [] - сделать просто вывод 10 страниц по 3 элемента
 *    [] - компонент pagination
 *      [] - состояния
 *      [] - немного css стилей
 *  [] - привязать стили
 */

class App extends React.Component {
  state = {
    people: [],
    sumOfPeople: '',
    peopleWithOtherColumns: [],
  }

  componentDidMount = () => {
    this.loadData()
  }

  loadData = async () => {
    const responsePeople = await
      fetch('https://mate-academy.github.io/react_people-table/api/people.json');
    const people = await responsePeople.json();

    const peopleWithOtherColumns = people.map((person, index) => ({
      ...person,
      id: index + 1,
    }))

    this.setState({
      peopleWithOtherColumns: peopleWithOtherColumns,
      sumOfPeople: peopleWithOtherColumns.length,
    })
  }

  render() {
    const { 
      peopleWithOtherColumns,
      sumOfPeople,
    } = this.state;
    console.log(sumOfPeople);

    return (
      <div className="App">
        <PeopleTable 
          peopleWithOtherColumns={peopleWithOtherColumns}
        />
        {/* <Pagination /> */}
      </div>
    );
  }
}

export default App;
