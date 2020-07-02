import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
// import styled from 'styled-components';
import classes from './App.module.css';

// const StyledButton = styled.button`

//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "ARK", age: 23 },
      { id: 2, name: "BRK", age: 26 },
      { id: 3, name: "SRK", age: 28 }],
    showPersons: false,
    textLength: 0,
    textView: ''
  }

  render() {

    const handleDeletePerson = (index) => {
      console.log(...this.state.persons)
      const person = [...this.state.persons];
      person.splice(index, 1);
      this.setState({ persons: person })
    }

    const handleShowPersons = () => {
      const showPersonBox = this.state.showPersons
      this.setState({
        showPersons: !showPersonBox
      })
    }

    const handleChangeName = (event, personId) => {

      const personIndex = this.state.persons.findIndex(p => {
        return p.id === personId
      })

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      })
    }

    const handleTextLength = (event) => {
      this.setState({
        textView: event.target.value,
        textLength: this.state.textView.length
      })
    }

    const handleDeleteTextBox = (index) => {
      console.log(index)
      const myArray = [...this.state.textView.split('')];
      console.log(myArray)
      const newArray = myArray.splice(index, 1);
      console.log(newArray)
      console.log(myArray)

      this.setState({
        textView: myArray.join('')
      })

    }

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    let persons = null;
    let btnClass = [classes.Button];
  
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={index}
              name={person.name}
              age={person.age}
              deletePerson={() => handleDeletePerson(index)}
              changeName={(event) => handleChangeName(event, person.id)}
            />)
        })}

      </div>
      );
      // style.backgroundColor = 'red';
      // style.color = 'black';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
         btnClass.push(classes.Red);
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    // const textArray = this.state.textView.split('');
    // const charComponent = (
    //   textArray.map((text, index) => {
    //     return (<CharComponent 
    //     key={index}
    //     textView={text}
    //     onDelete={() => handleDeleteTextBox(index)}
    //     />
    //   )})
    // );
    return (

      <div className={classes.App}>
        <h1>Hi i am react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        {/* <StyledButton alt={this.state.showPersons} onClick={handleShowPersons}>
          Toggle Persons
        </StyledButton> */}
        <button className={btnClass.join(" ")} onClick={handleShowPersons}>
          Toggle Persons
        </button> 
        {persons}
        <div>
        </div>
        {/* <input type='text' value={this.state.textView} onChange={(event) => handleTextLength(event)} />
        <ValidationComponent textLength={this.state.textView.length}/> */}
        <br />
        <br />

        {/* {charComponent} */}
      </div>

    );
  }
}

export default App;
