import React from 'react';
import { Container} from '@mui/material';
import Calculadora from './components/Calculadora.jsx'


export default function Inicio() {
  
  return <>
    <Container>
      <h1>Calculadora</h1>
      <Calculadora></Calculadora>

    </Container>
  </>
}
