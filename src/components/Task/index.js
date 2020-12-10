function Task(props) {
  function handleClick() {
    const { handleDelete, position } = props;
    handleDelete(position);
  }
  return (
    <li>
      {props.value} - {props.position}
      <button onClick={handleClick}>X</button>
    </li>
  );
}

export default Task;
