import React, { Component } from "react";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';
import {BrowserRouter as Router} from 'react-router-dom';

// *****
// ***** Fichier pour le BreadCrumbs
// *****

const routesList = {
   '/': 'Home',
   '/devis': 'Devis',
   '/boutique': 'Boutique',
   '/producttest': 'producttest',
}

export default class AppBreadcrumbs extends Component {
   render() {
     return (
       <Router>
          <Breadcrumbs mappedRoutes={routesList}

           WrapperComponent={(props) => <ol className="breadcrumb">{props.children}</ol>}
           ActiveLinkComponent={(props) => <li className="breadcrumb-item active" >{props.children}</li>}
           LinkComponent={(props) => <li className="breadcrumb-item">{props.children}</li>} 
           
          />
      </Router>
    );
  }
}