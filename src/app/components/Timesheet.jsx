import React, { useState } from 'react';
import axios from 'axios';
import { authHeader, userId } from '../Services/authHeader';
import * as validate from '../Services/validationService';
import MaterialTable from 'material-table';

const url = process.env.NODE_ENV == 'production' ? '' : "http://localhost:7777/timesheet";

export const Timesheet = () => {
    let defaultState = {
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

    const handleInputChange = (e) => {
        let prevState = state;
        const { name, value } = e.target;
        state = { ...state, [name]: value };
        if (prevState.year !== state.year || prevState.week !== state.week) {
            if (state.saved == true) {
                update();
            }
            else {
                if (confirm('Do you want to save changes?')) {
                    save(prevState);
                }
                else {
                    update();
                }
            }
        }
        else {
            setState(state);
        }
    }

    const saveRequest = () => {
        save(state);
    }

    const update = async () => {
        let response = await axios({
            method: 'get',
            url: url + '/find',
            headers: authHeader(),
            params: {
                year: state.year,
                week: state.week,
                userId: userId()
            }
        });
        response.data.columns = defaultState.columns;
        response.data.saved = true;
        response.data.numberOfRows = response.data.data.length;
        setState(response.data);
    }

    const save = async (currentState) => {
        let timesheet = currentState;
        delete timesheet.columns;
        try {
            let response = await axios({
                method: 'post',
                url: url + '/save',
                headers: authHeader(),
                data: timesheet
            });
            response.data.columns = defaultState.columns;
            response.data.saved = true;
            setState(response.data);
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
        <div class='card p-4 m-4'>
            <form>
                <input type="text" placeholder="Year" name="year" onChange={handleInputChange} value={state.year} />
                <input type="text" placeholder="Week Number" name="week" onChange={handleInputChange} value={state.week} />
                <input type="text" placeholder="Status" name="status" onChange={handleInputChange} />
            </form>
            <div>
                <div>
                    <br />
                    <input type="submit" value="Save Timesheet" onClick={saveRequest} class='btn btn-primary mt-2' /><br />
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