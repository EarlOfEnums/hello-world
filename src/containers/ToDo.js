import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import Paper from "../components/common/Paper";
import Button from "@material-ui/core/Button";

const ToDo = () => {
  const [toDo, setToDo] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then(res => res.json())
      .then(toDo => setToDo(toDo))
      .catch(error => console.error(error.message));
  }, []);
  return (
    <Paper>
      <p>{toDo.id}</p>
      <p>{toDo.title}</p>
      <p></p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
        // onClick={() => history.push("/")}
      >
        back to list
      </Button>
    </Paper>
  );
};

export default ToDo;
