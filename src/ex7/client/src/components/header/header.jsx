import React from "react";
import {MenuButton,
  Menu,
  MenuTitle,
  MenuItem} from "monday-ui-react-core";
import PropTypes from "prop-types";
import "./header.css";

const Header = ({filterStatus, listTodo, showAllList}) => {

  const showDone = async (done) => {
    filterStatus(done)
  };

  const showButton = () => {
    if (listTodo.length > 0){
      return (
      <div className="header">
        <MenuButton text="⬅️Filter🧹">
          <Menu id="menu">
          <MenuTitle
            caption="filter"
            captionPosition="top"
          />
          <MenuItem
            icon={function noRefCheck(){}}
            iconType="SVG"
            onClick={()=> showDone(true)}
            title="Show todo done"
          />
          <MenuItem
            icon={function noRefCheck(){}}
            iconType="SVG"
            onClick={()=>showDone(false)}
            title="Show todo not done"
          />
          <MenuItem
            icon={function noRefCheck(){}}
            iconType="SVG"
            onClick={showAllList}
            title="show all"
          />
        </Menu>
        </MenuButton>
      </div >
      )
    } else return null;
  };

  return(
    <div className="header">
        <h3>Todo list</h3>
        {showButton()}
    </div>
  );
};

Header.propTypes = {
  listTodo:PropTypes.array,
  showAllList:PropTypes.func,
  filterStatus:PropTypes.func,
};

export default Header;
