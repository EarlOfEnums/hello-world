import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

const List = ({ toDos, onClick }) => {
  return (
    <Layout>
      {toDos.map(toDo => (
        <ListItem key={toDo.id} onClick={onClick} {...toDo} />
      ))}
    </Layout>
  );
};

export default List;

const Layout = styled.div`
  display: grid;
`;
