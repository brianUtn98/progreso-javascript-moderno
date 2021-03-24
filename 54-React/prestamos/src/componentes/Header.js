import React, { Fragment } from "react";

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <h1 className="titulo">{ `${titulo}` }</h1>
        </Fragment>
     );
}

export default Header;