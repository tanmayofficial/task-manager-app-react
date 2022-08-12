import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import Todo from "./Todo";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const TodoForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("10:00");
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskDescInput, setTaskDescInput] = useState("");
  // const [selectDate, SetselectDate] = useState('');
  // const [selectTime, setselectTime] = useState('');
  const [todos, setTodos] = useState([]);


  const handleNameChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskNameInput("");
    setTaskDescInput("");
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row">
          <div className="col-8">
            <h4 className="my-5">Task Creator</h4>
            <div className="text-start mx-5 p-2 px-5">
              <label htmlFor="taskName" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className="form-control"
                value={taskNameInput}
                onChange={handleNameChange}
              />
            </div>
            <div className="text-start mx-5 p-2 px-5">
              <label htmlFor="taskName" className="form-label">
                Task Description (Optional)
              </label>
              <input
                type="text"
                id="taskName"
                className="form-control"
                value={taskDescInput}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="text-start d-flex mx-5 p-2 px-5">
              <div className="w-75">
                <label htmlFor="selectDate" className="form-label">
                  Select Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  id="selectDate"
                  className="form-control"
                />
              </div>

              <div className="w-75">
                <label htmlFor="selectTime" className="form-label">
                  Select Time
                </label>
                <TimePicker
                  value={value}
                  onChange={setValue}
                  id="selectTime"
                  className="form-control"
                />
              </div>
            </div>
            <div className="my-3 mx-5 p-2 px-5 h-25"></div>
            <div className="text-end my-5 mx-5 p-2 px-5">
              <button className="btn btn-secondary">Create Task</button>
            </div>
          </div>

          <div className="col-4">
            <div className="my-5">
              <nav className="nav nav-tabs nav-justified">
                <a className="nav-link active" aria-current="page" href="#">
                  Upcoming
                </a>
                <a className="nav-link">All</a>
              </nav>

              <Todo 
              todos={todos}
              />

            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
