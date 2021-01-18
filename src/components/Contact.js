import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

export default class Contact extends Component {
  render() {
            
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
               Feel free to contact me for any work or suggestions below
              </p>
              <br />
               <h2>
                    Sai Sumanth Puligilla
               </h2>
                 <h1>
               <br />
                    justsumanth@gmail.com
                  &nbsp;
                    +91 8897982764          
                  </h1>
            </div>
            <ScrollUpButton /> 
          </div>
        </section>
        );
  }
}