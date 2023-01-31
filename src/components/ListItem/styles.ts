import styled from "styled-components";

type ContainerProps = {
  done: boolean;

}
export const Container = styled.div(( {done}: ContainerProps) => (
`
  display: flex; /* item ao lado do outro*/
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  input {
    width: 25px;  /* largura*/
    height: 25px; /* altura */
    margin-right: 5px /* empurrar o texto para o lado */
  }
  label {
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'}; // risco na palavra
  }
`
))