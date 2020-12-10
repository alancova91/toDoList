import { useCallback } from "react";

import Task from "../Task";

function List(props) {
  function onDelete(position) {
    props.handleDelete(position);
  }
  return (
    <ul>
      {props.tasks.map((task, key) => {
        return (
          <Task key={key} value={task} handleDelete={onDelete} position={key} />
        );
      })}
    </ul>
  );
}

export default List;
