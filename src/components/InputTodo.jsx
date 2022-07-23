import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff!",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  const { todoText, onChange, onClickAdd, disabled } = props;
  return (
    <div style={style} className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      ></input>
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
