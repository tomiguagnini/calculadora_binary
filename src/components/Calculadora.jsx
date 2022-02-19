import React, { useState } from 'react';
import {
    Button, FormControl, InputLabel, MenuItem,
    Select, Table, TableBody, TableCell, TableContainer, TableRow, TextField
} from '@mui/material'
import { control } from '../functions/binTo';

export default function Calculadora() {
    const [binary, setBinary] = useState('');
    const [notation, setNotation] = useState('integer');
    const [result, setresult] = useState('');
    const handleChangeTextField = (e) => {
        setBinary(e.target.value)
    }
    const handleChangeSelect = e => {
        setNotation(e.target.value)

    }
    const handleChangeButton = () => {
        setresult(control(binary, notation))
    }
    return (
        <>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField autoComplete="off" sx={{ m: 2, }} type="number" id="standard-basic" value={binary} label="Binario" variant="outlined" onChange={handleChangeTextField} />
                                <FormControl sx={{ m: 2, minWidth: 80 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">System</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={notation}
                                        onChange={handleChangeSelect}
                                        autoWidth
                                        label="System"
                                    >

                                        <MenuItem value='integer'>Entero</MenuItem>
                                        <MenuItem value='float'>Fraccionario</MenuItem>
                                        <MenuItem value='ca1'>Ca1</MenuItem>
                                        <MenuItem value='ca2'>Ca2</MenuItem>
                                        <MenuItem value='ex2'>Exceso A2</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant='contained' sx={{ m: 3 }} onClick={handleChangeButton}>Calcular</Button>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <h3>Resultado: {result} </h3>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}


