const MenuItem = (props) => {
  return (
    <option value={props.title}>{props.title}</option>
    // <a className="dropdown-item" href="#">
    //   {props.title}
    // </a>
  );
};

export default MenuItem;
