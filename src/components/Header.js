import React from "react";
import PropTypes from "prop-types";

const Header = ({onClickAdd}) => (
    <div className="header-content">
        <div className="header-title-text">
            Mis videos favoritos
        </div>
        <input type="button" onClick={onClickAdd}
               value="Añadir Video" className="header-button-add"/>
    </div>
);

Header.protoType = {
  onClickAdd: PropTypes.func.isRequired
};

export default React.memo(Header);