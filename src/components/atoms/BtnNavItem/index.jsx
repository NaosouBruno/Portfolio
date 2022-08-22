import "./btnNav.scss";
function BtnNavItem(props) {
  return (
    <button className="btnNav--itemName">
      <a href={`#${props.link}`} className="btnNav--itemLink">
        {props.name}
      </a>
    </button>
  );
}

export default BtnNavItem;
