import "./btnNav.scss";
function BtnNavItem(props) {
  return <button className="btnNav--itemName">{props.name}</button>;
}

export default BtnNavItem;
