function Button(props) {
  function handleClick(e) {
    const { value } = e.target;
    props.onClick(
      value
    ); /*sirve para mandar cual es el valor del input, en este caso no porque solo queres saber que clickeraon el boton y ya*/
  }

  return (
    <>
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}

export default Button;
