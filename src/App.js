import React from 'react';
import './App.css';
import PeopleTable from './components/PeopleTable'
import Pagination from './components/Pagination'

/***
 * [x] - выбрать API
 * [x] - подготовить вывод всей таблицы
 *    [x] - заголовки 
 * [] - base pagination
 *  [] - сделать просто вывод 10 страниц по 3 элемента
 *    [] - компонент pagination
 *      [x] - disabled добавить для кнопок
 *      [x] - css active
 *      [x] - active page func
 *      [-] - может вынести arrOfPages вообще в pagination?
 *      [x] - передать pages, отобразить через map
 *      [x] - состояния
 *      [x] - реализовать отображение по страницам по 5 для начала статику
 *         [x] кол-во страниц: (кол-во эл / кол-во отображ).выделить_целое_к-потолку
 *         [x] диапозон элементов
 *         [x] передавать будем в отрисовку только подходящий промежуток
 *  [x] - немного css стилей
 *  [x] - bootstrap пагинации
 */

class App extends React.Component {
  state = {
    people: [],
    arrOfPages: [],
    sumOfPeople: 0,
    page: 3,
    perPage: 5,
    pages: 0,
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
    }));
    this.createArrForPages();
  }

  createArrForPages = () => {
    this.setState(prevState => {
      const arr = [];

      for (let i = 1; i <= prevState.pages; i++) {
        arr.push(i);
      };
  
      return {
        arrOfPages: arr,
      }
    })
  } 

  choosePage = (value) => {
    this.setState({
      page: value,
    })
  }

  render() {
    const { 
      people,
      sumOfPeople,
      page,
      perPage,
      arrOfPages,
    } = this.state;

    return (
      <div className="App">
        <PeopleTable 
          people={people}
          page={page}
          perPage={perPage}
        />
        <Pagination
          page={page}
          arrOfPages={arrOfPages}
          choosePage={this.choosePage}
        />
      </div>
    );
  }
}

export default App;
