import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import List from "../components/List";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(toDos => setToDos(toDos))
      .catch(error => console.error(error.message));
  }, []);

  const handleClick = id => {
    history.push(`/todo/${id}`);
  };
  return <List toDos={toDos} onClick={handleClick} />;
};

export default ToDoList;
