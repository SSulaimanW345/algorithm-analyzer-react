import { useState } from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";
const Menu = (props) => {
  const [algotype, setalgotype] = useState(props.items[0]);
  const onChangehandler = (event) => {
    setalgotype(event.target.value);
    console.log(event.target.value);
    props.onSelecthandler(event.target.value);
  };
  return (
    <li className="nav-item dropdown">
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={onChangehandler}
        value={algotype}
      >
        {props.items.map((e) => (
          <MenuItem title={e.title} />
        ))}
      </select>
    </li>
  );
};

export default Menu;
