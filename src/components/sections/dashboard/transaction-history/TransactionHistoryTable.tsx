import { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DataGrid, GridColDef, useGridApiRef, GridApi } from '@mui/x-data-grid';
import DataGridFooter from 'components/common/DataGridFooter';
import { rows } from 'data/transactionHistory';
import { Typography } from '@mui/material';

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: 'Transaction Id',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 160,
    renderHeader: () => (
      <Typography variant='body2' fontWeight={600} ml={1}>Transaction Id</Typography>
    ),
    renderCell: (params) => (
      <Stack ml={1} height={1} direction="column" alignSelf="center" justifyContent="center">
        <Typography variant='body2' fontWeight={500}>{params.value}</Typography>
      </Stack>
    ),
  },
  {
    field: 'category',
    headerName: 'Category',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 140,
  },
  {
    field: 'date',
    headerName: 'Date',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 160,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 120,
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    editable: false,
    align: 'left',
    flex: 2,
    minWidth: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    editable: false,
    flex: 1,
    minWidth: 140,
    renderCell: (params) => {
      const color =
        params.value === 'in progress'
          ? 'primary'
          : params.value === 'completed'
            ? 'success'
            : params.value === 'pending'
              ? 'warning'
              : 'info';
      return (
        <Stack direction="column" alignItems="center" justifyContent="center" height={1}>
          <Chip label={params.value} size="small" color={color} />
        </Stack>
      );
    },
  },
  {
    field: 'balance',
    headerName: 'Balance',
    headerAlign: 'right',
    align: 'right',
    editable: false,
    flex: 1,
    minWidth: 100,
  },
];

interface TaskOverviewTableProps {
  searchText: string;
}

const TransactionHistoryTable = ({ searchText }: TaskOverviewTableProps) => {
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    apiRef.current.setQuickFilterValues(searchText.split(/\b\W+\b/).filter((word) => word !== ''));
  }, [searchText]);

  return (
    <DataGrid
      apiRef={apiRef}
      density="standard"
      columns={columns}
      rows={rows}
      rowHeight={52}
      disableColumnResize
      disableColumnMenu
      disableColumnSelector
      disableRowSelectionOnClick
      initialState={{
        pagination: { paginationModel: { pageSize: 4 } },
      }}
      autosizeOptions={{
        includeOutliers: true,
        includeHeaders: false,
        outliersFactor: 1,
        expand: true,
      }}
      slots={{
        pagination: DataGridFooter,
      }}
      checkboxSelection
      pageSizeOptions={[5]}
    />
  );
};

export default TransactionHistoryTable;