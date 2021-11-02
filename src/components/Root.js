import React from "react";
//react-router-dom Realiza la gestion de las rutas
//BrowserRouter Realiza la gestion del historico de las rutas
import {BrowserRouter, Route} from "react-router-dom";
import List from './List';
import Detail from './Detail';

const Root = () => (

    <BrowserRouter>
        <div>
            <Route exact path="/" component={List}/>
            <Route exact path="/:id" component={Detail}/>
        </div>
    </BrowserRouter>

);

export default Root;