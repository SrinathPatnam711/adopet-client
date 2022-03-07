import styled from "styled-components";

export const ClinicHeading = styled.h1`
    text-align: center;
    padding: 2rem;
    font-size: 3rem;        
`

export const EachClinic = styled.div`   
    text-align: center;
    border-radius: 30px;
    border: 3px solid white;
    /* background-color: lightcyan; */
    width: 19%;
    margin: auto;
    font-size: 2rem;
    padding: 5x;    
`

export const Searchbox = styled.input.attrs({type: 'text'})`
  width: 100px;
  margin: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;  
  padding: 5px;
  transition: width 0.4s ease-in-out;
  &:focus {
      width: 200px;        
    }
`;

export const Filter = styled.div`
    color: black;
    text-align: center;
    margin: auto;    
    width: 100%;
    padding: 10px;   
    font-size : 15;
`;