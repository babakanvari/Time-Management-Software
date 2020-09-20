import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { authHeader, userId } from '../Services/authHeader';
import * as validate from '../Services/validationService';
import MaterialTable from 'material-table';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777";

export const Timesheet = () => {

    let defaultState = {
        year: new Date().getFullYear(),
        week: 1,
        weekEnd: new Date(),
        saved: true,
        numberOfRows: 5,
        userId: userId(),
        columns: [
            { title: 'Date', field: 'date' },
            { title: 'Project Number', field: 'projectNumber' },
            { title: 'Activity', field: 'activity' },
            { title: 'Category', field: 'category' },
            { title: 'Transaction Text', field: 'transactionText' },
            { title: 'Hour', field: 'hour' },
        ],
        data: [],
        projects: {}
    };

    let [state, setState] = useState(defaultState);

    const handleDateChange = (date) => {
        state = { ...state, weekEnd: date };
        updateTable();
    }

    const updateTable = async () => {
        let response = await axios({
            method: 'get',
            url: url + '/timesheet/find',
            headers: authHeader(),
            params: {
                weekEnd: state.weekEnd,
                userId: userId()
            }
        });
        response = response.data;
        state = {
            ...state,
            saved: true,
            data: response.data,
            numberOfRows: response.data.length,
            projects: response.projects
        };
        setState(state);
    }

    const saveTable = async () => {
        let timesheet = {
            userId: state.userId,
            weekEnd: state.weekEnd,
            data: state.data
        }
        try {
            let response = await axios({
                method: 'post',
                url: url + '/timesheet/save',
                headers: authHeader(),
                data: timesheet
            });
        }
        catch (err) {
            alert(err.message);
        }
    }

    let addRow = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                validate.project(newData.projectNumber, state.projects)
                    .then((projectId) => (newData.projectId = projectId))
                    .catch((err) => { alert(err) })
                    .finally(() => {
                        state.saved = false;
                        setState((state) => {
                            const data = [...state.data];
                            data.push(newData);
                            return { ...state, data };
                        });
                        console.log(state);
                    })
            }, 600);
        })

    let updateRow = (newData, oldData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                validate.project(newData.projectNumber, state.projects)
                    .then((projectId) => (newData.projectId = projectId))
                    .catch((err) => {
                        newData._id = '';
                        alert(err);
                    })
                    .finally(() => {
                        if (oldData) {
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data[data.indexOf(oldData)] = newData;
                                return { ...prevState, data };
                            });
                        }
                    })
            }, 600);
        })

    let deleteRow = (oldData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                state.saved = false;
                setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                });
            }, 600);
        })
    return (
        <div className='card p-4 m-4'>
            <DatePicker selected={state.weekEnd} onChange={handleDateChange} /><br /><br /><br />
            <div>
                <div>
                    <br />
                    <input type="submit" value="Save Timesheet" onClick={saveTable} className='btn btn-primary mt-2' /><br />
                </div>
                <MaterialTable
                    options={{
                        pageSize: state.numberOfRows,
                        pageSizeOptions: [5, 10, 15, 20, 30],
                    }}
                    title="Timesheet"
                    columns={state.columns}
                    data={state.data}
                    editable={{
                        onRowAdd: addRow,
                        onRowUpdate: updateRow,
                        onRowDelete: deleteRow,
                    }}
                />
            </div>
        </div>
    );
}