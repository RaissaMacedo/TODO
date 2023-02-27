import styled from 'styled-components'
/*  container geral do site.*/
export const Container = styled.div` /*  div que pega todo o site.*/
  background-color: #17181F;
  color: #797A81;
  min-height: 100vh /*altura minima de todo container */
`;
export const Area = styled.div`
  margin: auto; /*  meio da tela*/
  max-width: 980px;   /*  largura maxima*/
  padding: 10px       /* quando tiver no mobile no ficar encostado nas laterais do celular */
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #FFF;
  text-align: center;
  border-bottom: 1px solid #444; /* borda na parte de baixo */
  padding-bottom: 20px; /* descolar texto dessa bordinha */
`;