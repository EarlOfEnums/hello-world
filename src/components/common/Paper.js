import styled from "styled-components";

const Paper = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${p => p.theme.paper};
  display: grid;
  grid-gap: 1em;
  border-radius: 20px;
  grid-template-columns: 20px 1fr;
  width: fit-content;
  padding: 1em;
  margin: auto;
`;

export default Paper;
