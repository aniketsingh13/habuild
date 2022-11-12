import React from "react";
import Header from "../../Component/Header/Header";
import "./Todo.css";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
let nextId = 1;

const Todo = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  function addData() {
    setData([...data, { id: nextId++, input: input }]);
    setInput("");
  }

  function deleteTodo(ID){
     setData(data.filter(item => item.id !== ID))
  }

  return (
    <div>
      <Header />
      <div className="Todo_center">
        <img
          src={
            "https://res.cloudinary.com/aniket-singh/image/upload/v1668256729/Images/to-do-7214069__340_gi4fyc.webp"
          }
          alt={"todo image"}
          width={160}
          height={160}
        />
        <div className="todo_body">
          <input
            type="text"
            className="todo_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="todo_button" onClick={addData}>
            <AiOutlinePlus className="todo_addIcon" />
          </span>
        </div>
        <div>
          {data.map((item) => (
            <div className="todo_data" key={item.id}>
              <span className="todo_inputs">{item.input}</span>
              <span className="todo_editDelete">
                <span className="todo_delete" onClick={() => deleteTodo(item.id)}>
                  <AiOutlineDelete />
                </span>
                <span>
                  <FaEdit />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
