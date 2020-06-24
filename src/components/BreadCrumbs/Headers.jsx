import React, { Component } from "react";
import  AppBreadcrumbs  from "./BreadCrumbs";

import "./style.css";

export default class Header extends Component {
    render(){
        return (
            <div className="header navbar bread-background">
                <div className="header-container">
                    <AppBreadcrumbs />
                </div>
            </div>
        )
    }
}