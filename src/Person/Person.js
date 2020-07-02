import React from 'react';
 import classes from './Person.module.css';
// import styled from 'styled-components';

// const StyledDiv = styled.div`
//     box-shadow: 3px 3px;
//     border: 1px solid;
//     margin: 10%;
//     padding:30px;
//     background-color:lightpink;

//     @media (min-width: 500px) {
//                  width:450px;
//              }
// `;

const Person = (props) => {
    // const style ={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // };
    return (
        <div className={classes.Person}>

            <h1 onClick={props.deletePerson}>Hi my name is {props.name} and my age is {props.age}</h1>
            <input type="text" value={props.name} onChange={props.changeName} />

        </div>
    )
}

export default Person