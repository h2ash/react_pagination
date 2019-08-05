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
 *      [x] - состояния
 *      [x] - реализовать отображение по страницам по 5 для начала статику
 *         [x] кол-во страниц: (кол-во эл / кол-во отображ).выделить_целое_к-потолку
 *         [x] диапозон элементов
 *         [x] передавать будем в отрисовку только подходящий промежуток
 *  [x] - немного css стилей
 *  [] - привязать стили к пагинации
 */

class App extends React.Component {
  state = {
    people: [],
    sumOfPeople: 0,
    page: 1,
    perPage: 5,
    pages: '',
  }

  componentDidMount = () => {
    this.loadData();
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
      people: peopleWithOtherColumns,
      sumOfPeople: peopleWithOtherColumns.length,
    })

    this.sumOfPages();
  }

  sumOfPages = () => {
    this.setState(prevState => ({
      pages: Math.ceil(prevState.sumOfPeople / prevState.perPage),
    }))
  }

  render() {
    const { 
      people,
      sumOfPeople,
      page,
      perPage,
      pages,
    } = this.state;

    return (
      <div className="App">
        <PeopleTable 
          people={people}
          perPage={perPage}
          page={page}
          perPage={perPage}
        />
        {/* <Pagination /> */}
      </div>
    );
  }
}

export default App;
