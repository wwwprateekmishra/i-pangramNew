import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStore from './../../hooks/useStore';
import Button from '@mui/material/Button';
import { Navigate ,Link} from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Tables() {
    const [tableData, setTableData] = React.useState([])
    const {findData} = useStore();
    React.useEffect(async ()=>{
        let data = await findData();
        setTableData(data)
        console.log(data);
    },[tableData])
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Problem</TableCell>
            <TableCell align="right">Diagnosed</TableCell>
            <TableCell align="right">Physical</TableCell>
            <TableCell align="right">Mental</TableCell>
            <TableCell align="right">How Experience</TableCell>
            <TableCell align="right">ZeroToTenScale</TableCell>
            <TableCell align="right">Other Info</TableCell>
            <TableCell align="right">Not Relvent</TableCell>
            <TableCell align="right">When Lying Down</TableCell>
            <TableCell align="right">When Sitting</TableCell>
            <TableCell align="right">Under Standing</TableCell>
            <TableCell align="right">InWalking</TableCell>
            <TableCell align="right">Other</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.problem}
              </TableCell>
              <TableCell align="right">{row.diagnosed}</TableCell>
              <TableCell align="right">{row.physical}</TableCell>
              <TableCell align="right">{row.mental}</TableCell>
              <TableCell align="right">{row.howExperience}</TableCell>
              <TableCell align="right">{row.zeroToTenScale}</TableCell>
              <TableCell align="right">{row.otherInfo}</TableCell>
              <TableCell align="right">{row.notRelvent}</TableCell>
              <TableCell align="right">{row.whenLyingDown}</TableCell>
              <TableCell align="right">{row.whenSitting}</TableCell>
              <TableCell align="right">{row.underStanding}</TableCell>
              <TableCell align="right">{row.inWalking}</TableCell>
              <TableCell align="right">{row.Other}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to='/'> <Button >Back</Button></Link>
    </>
  );
}
