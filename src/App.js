import React from 'react';
import './App.css';
import PeopleTable from './components/PeopleTable'
import Pagination from './components/Pagination'
import OutputBy from './components/OutputBy'
import WithIfno from './components/WithInfo'

class App extends React.Component {
  state = {
    people: [],
    arrOfPages: [],
    sumOfPeople: 0,
    page: 3,
    perPage: 5,
    pages: 1,
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

  onPerPageChange = (event) => {
    const {value} = event.target;

    this.setState({
      perPage: value,
    })

    this.sumOfPages();

    this.setState({
      page: 1,
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
        <OutputBy
          onPerPageChange={this.onPerPageChange}
        />
        <PeopleTable 
          people={people}
          page={page}
          perPage={perPage}
        />
        <WithIfno
          page={page}
          perPage={perPage} 
          sumOfPeople={sumOfPeople}
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
