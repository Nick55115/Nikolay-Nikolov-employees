import { useState } from 'react'
import '../style.css'
import { commonProjectsOfThePair } from '../utils/commonProjectsOfThePair';
import DataTable from './Table';

function CsvReader() {
    const [csvFile, setCsvFile] = useState();
    const [employees, setEmployess] = useState([]);

    //reading the file from the system and then converting the data into array of employees
    const processCsv = (data, breaker = ', ') => {
        const headers = data.slice(0, data.indexOf('\n')).split(breaker);
        const rows = data.slice(data.indexOf('\n') + 1).split('\n');
        const everyEmployee = rows.map(row => {
            const values = row.split(breaker);
            const individualEmployee = headers.reduce((employee, header, index) => {
                employee[header] = values[index];

                return employee;
            }, {})

            return individualEmployee;
        })
        const projects = commonProjectsOfThePair(everyEmployee)
        setEmployess(projects);
    }

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            processCsv(text)
        }

        reader.readAsText(file)
    }

    return (
        <div className='table'>
            {
                employees.length ?
                    <DataTable employees={employees} /> :
                     <div className='input'>
                        <input
                            type='file'
                            accept='.csv'
                            id='csvFile'
                            onChange={
                                (e) => {
                                    setCsvFile(e.target.files[0])
                                }
                            }
                        >
                        </input>
                        <button className="button" onClick={(e) => {
                            e.preventDefault()
                            if (csvFile) {
                                submit()
                            }
                        }}>Submit</button>
                    </div>
            }
        </div>
    )
}

export default CsvReader;