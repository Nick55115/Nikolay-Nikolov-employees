import { DataGrid } from '@material-ui/data-grid'

const columns = [
    {field: 'firstEmployee', headerName: 'Employee ID #1', width: 300},
    {field: 'secondEmployee', headerName: 'Employee ID #2', width: 300},
    {field: 'projectId', headerName: ' Project ID', width: 300},
    {field: 'days', headerName: 'Days worked', width: 300}
]

function DataTable(props) {
    const { employees } = props;

    return (
        <div style={{height: 700, width: '100%'}}>
            <DataGrid 
                rows={employees}
                columns={columns}
                pageSize={10}
            />
        </div>
    )
}

DataTable.defaultProps = {
    employees: []
}

export default DataTable;