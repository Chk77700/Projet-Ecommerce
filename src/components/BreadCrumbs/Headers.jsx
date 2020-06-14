import React, { Component } from "react";
import  AppBreadcrumbs  from "./BreadCrumbs";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render(){
        return (
            <div className="header-container">
                <AppBreadcrumbs />      
            </div>
        )
    }
}

