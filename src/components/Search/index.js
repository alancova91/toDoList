function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }

  function handleEnter(e) {
    const { keyCode } = e;
    props.handleCallbackEnter(keyCode);
  }
  return (
    <>
      <input
        className="searchBar"
        type="text"
        onChange={handleChange}
        value={props.value}
        onKeyDown={handleEnter}
      />
    </>
  );
}

export default Search;
