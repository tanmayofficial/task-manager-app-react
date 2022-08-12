import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'
import './Todo.css';


function Todo() {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');

    return (
        <form>
            <div className='container text-center'>
                <div className="row">
                    <div className="col-8">
                        <h4 className='my-5'>Task Creator</h4>
                        <div className="text-start mx-5 p-2 px-5">
                            <label for="taskName" className="form-label">Task Name</label>
                            <input type="text" id='taskName' className='form-control' />
                        </div>
                        <div className="text-start mx-5 p-2 px-5">
                            <label for="taskName" className="form-label">Task Description (Optional)</label>
                            <input type="text" id='taskName' className='form-control' />
                        </div>
                        <div className="text-start d-flex mx-5 p-2 px-5">
                            <div className='w-75'>
                                <label for="selectDate" className="form-label">Select Date</label>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="selectDate" className="form-control" />
                            </div>

                            <div className='w-75'>
                                <label for="selectTime" className="form-label">Select Time</label>
                                <TimePicker value={value} onChange={onChange} id='selectTime' className="form-control" />
                            </div>

                        </div>
                        <div className="my-3 mx-5 p-2 px-5 h-25">
                        </div>
                        <div className="text-end my-5 mx-5 p-2 px-5">
                            <button className='btn btn-secondary'>Create Task</button>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="my-5">
                            <nav className="nav nav-tabs nav-justified">
                                <a className="nav-link active" aria-current="page" href="#">Upcoming</a>
                                <a className="nav-link disabled">All</a>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Todo;