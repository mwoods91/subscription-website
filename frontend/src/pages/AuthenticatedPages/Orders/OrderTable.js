import React, { useMemo } from 'react';

// material-ui
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Chip, Button } from '@mui/material';

//project import

import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import MainCard from '../../../components/MainCard';

const headers = [
  {
    Header: 'Item',
    accessor: 'item',
    width: 'auto'
  },
  {
    Header: 'Order Date',
    accessor: 'orderdate',
    width: 'auto'
  },
  {
    Header: 'Status',
    accessor: 'orderstatus',
    width: 'auto',

    // eslint-disable-next-line
    Cell: ({ value }) => {
      switch (value) {
        case 2:
          return <Chip color="success" label="Shipped" size="small" variant="light" />;
        case 1:
          return <Chip color="warning" label="Processing" size="small" variant="light" />;
        case 0:
        default:
          return <Chip color="warning" label="info" size="small" variant="light" />;
      }
    }
  }
];
const data = [
  {
    id: 1,
    item: 'ID Card',
    orderdate: '01/02/2023',
    orderstatus: 2
  },
  {
    id: 1,
    item: 'Wristband',
    orderdate: '18/02/2023',
    orderstatus: 1
  }
];

const OrderTable = () => {
  const columns = useMemo(() => headers, []);

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <MainCard sx={{ mt: 2 }} title="My Orders" secondary={<Button variant="outlined">Place new request</Button>}>
      <TableContainer>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps({ style: { minWidth: column.minWidth, width: column.width } })}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow sx={{ fontSize: '1rem' }} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
                  })}
                </TableRow>
              );
            })}
            {/* <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={7}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default OrderTable;
