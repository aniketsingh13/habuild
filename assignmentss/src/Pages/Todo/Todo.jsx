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
  const [isedit, setIsEdit] = useState(false);
  const [newid, setNewid] = useState(null);

  function addData() {
    if (!input) {
      alert("please fill input field");
    } else if (input && isedit) {
      setData(
        data.map((item) => {
          if (item.id === newid) {
            return { ...item, input: input };
          }
          return item;
        })
      );
      setInput("");
      setIsEdit(false);
      setNewid(null);
    } else {
      setData([...data, { id: nextId++, input: input }]);
      setInput("");
    }
  }

  function deleteTodo(ID) {
    setData(data.filter((item) => item.id !== ID));
  }

  function editTodo(ID) {
    let newInput = data.find((item) => item.id === ID);
    setIsEdit(true);
    setInput(newInput.input);
    setNewid(ID);
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
            placeholder="✍️ Add item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="todo_button" onClick={addData}>
            {isedit ? (
              <FaEdit className="todo_addIcon" />
            ) : (
              <AiOutlinePlus className="todo_addIcon" />
            )}
          </span>
        </div>
        <div>
          {data.map((item) => (
            <div className="todo_data" key={item.id}>
              <span className="todo_inputs">{item.input}</span>
              <span className="todo_editDelete">
                <span
                  className="todo_delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  <AiOutlineDelete />
                </span>
                <span className="todo_edit" onClick={() => editTodo(item.id)}>
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
