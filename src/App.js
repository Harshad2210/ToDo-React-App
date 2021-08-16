import './App.css';
import React,{ useState, useEffect } from 'react'
import { Button, FormControl,InputLabel, Input } from '@material-ui/core';
import ToDo from './components/ToDo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos,setTodos] = useState([]);
  const [inputs,setInputs] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => (  { id:doc.id , todo: doc.data().todo }  )  )) ;
    } )
  }, []);
  

  const addToDo = (events) => {
    events.preventDefault();

    db.collection('todos').add({
      todo : inputs ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTodos([...todos,inputs]);
    setInputs('');
  }

  

  return (
    <div className="App">
      
      <h1> ToDoos 📝 </h1>

      <FormControl>
      <InputLabel> ☑️ Write a ToDo </InputLabel>
      <Input value={inputs} onChange={ e => setInputs(e.target.value)} />
      </FormControl>
     
      <Button  disabled={!inputs} type='submit' variant="contained" color="primary" onClick={addToDo} >Add ToDo</Button>

      <ul>
        { todos.map( (todo,index) => (
           <ToDo key={index} todo={todo} />
        ) ) }
      </ul>

    </div>
  );
}

export default App;
