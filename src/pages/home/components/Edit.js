import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submitDataStatus }) => {
  const [todo, setTodo] = useState("");
  function todoChange(e) {
    setTodo(e.target.value);
  }
  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }
  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }
  //Todo
  console.log(todo, date, time);

  function addItem() {
    submitDataStatus.current = true;
    add(function (prevData) {
      return [{ id: v4(), todo, date, time }, ...prevData];
    });
  }

  return (
    <div className="countainer-edit">
      <h1>ToDo List</h1>
      <label htmlFor="memo">待辦事項:</label>
      <input
        type="text"
        name="memo"
        id="memo"
        value={todo}
        onChange={todoChange}
      />
      <label htmlFor="date">日期:</label>
      <input
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={dateChange}
      />
      <label htmlFor="time">時間:</label>
      <input
        type="time"
        name="time"
        id="time"
        value={time}
        onChange={timeChange}
      />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
