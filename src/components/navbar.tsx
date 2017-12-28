import * as React from 'react';

export class NavBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <nav className="navbar navbar-expand-lg bg-light">
               <ul className="navbar-nav">
                  <li>
                      <a className="navbar-brand" href="#">Home</a>
                  </li>
                  <li>
                      <a className="nav-link" href="#">About</a>
                  </li>
                  <li>
                      <a className="nav-link" href="#">Projects</a>
                  </li>
                  <li>
                      <a className="nav-link" href="#">Blog</a>
                  </li>
                  <li>
                      <a className="nav-link" href="#">Contact</a>
                  </li>
               </ul> 
        </nav>;
    }
}

