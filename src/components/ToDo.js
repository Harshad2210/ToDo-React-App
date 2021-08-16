import {
    Button,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./ToDo.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ToDo(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const updateToDo = () =>{
    db.collection('todos').doc(props.todo.id).set({
        todo : inputs 
    },{merge:true})  
    setOpen(false);
  }

  return (
    <>
      <Modal open={open} onClose={handleClose} className ="modal"  >
        <div className={classes.paper}>
          <h1> Type your text here </h1>
          <div>
          <Input placeholder={props.todo.todo} value={inputs} onChange={ e => setInputs(e.target.value)} />
          </div>
           { /*  <input placeholder={props.todo.todo} value={inputs} 
           onChange= { event => setInputs( event.target.value ) } /> */ }
           <h4>  </h4>
        <Button variant="contained" onClick={updateToDo}>Update</Button>
        </div>
        
      </Modal>
      <List className="list-todo">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Deadline" />
          <Button  variant="contained" color="secondary" onClick= { e => setOpen(true) } >Edit </Button>
          <DeleteForeverIcon
            onClick={(ev) => db.collection("todos").doc(props.todo.id).delete()}
          />
        </ListItem>
      </List>
      <hr />
    </>
  );
}

export default ToDo;
