import React from "react";
import styled from "styled-components";

const ListItem = ({ userId, id, title, completed, onClick }) => {
  return <Card onClick={() => onClick(id)}>{title}</Card>;
};

export default ListItem;

const Card = styled.div`
  padding: 1em;
  margin: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${p => p.theme.paper};
  display: grid;
  border-radius: 5px;
  &:hover {
    background: white;
    color: #303552;
  }
`;
