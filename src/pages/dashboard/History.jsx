import Banner from "../../components/Banner";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(contractaddress, name, symbol, tokensum, balance) {
    return { contractaddress, name, symbol, tokensum, balance };
}

const rows = [
    createData('0xf9AbbAd9d103522BCdC72DD38F009c6aa22F82eD', 'WHC Token', 'WHC', '50,0000', '20,000'),
    createData('0xf9AbbAd9d103522BCdC72DD38F009c6aa22F82eD', 'WHC Token', 'WHC', '50,0000', '20,000'),
    createData('0xf9AbbAd9d103522BCdC72DD38F009c6aa22F82eD', 'WHC Token', 'WHC', '50,0000', '20,000'),
    createData('0xf9AbbAd9d103522BCdC72DD38F009c6aa22F82eD', 'WHC Token', 'WHC', '50,0000', '20,000'),
    createData('0xf9AbbAd9d103522BCdC72DD38F009c6aa22F82eD', 'WHC Token', 'WHC', '50,0000', '20,000'),
];



const History = () => {



    return (
        <main className="bg-[#040927] w-[100%] h-full">
            <Banner />
            <section>
                <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Contract Address</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Symbol</TableCell>
                                    <TableCell align="right">Token Sum</TableCell>
                                    <TableCell align="right">Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.contractaddress}
                                        </TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.symbol}</TableCell>
                                        <TableCell align="right">{row.tokensum}</TableCell>
                                        <TableCell align="right">{row.balance}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>


        </main>
    );
};

export default History;
