import React, { Component } from 'react';


export default class Footer extends Component {
    render(){
         let resumeData = this.props.resumeData;
         return(
             <footer>
                 <div className="row">
                     <div className="twelve columns">
                          &copy; Copyright 2020 Sai Sumanth Puligilla
                            <ul className ="social-links">
                              {
                                 resumeData.socialLinks && resumeData.socialLinks.map ((item) => {
                                     return(
                                         <li>
                                             <a href = {item.url}>
                                               <i className ={item.className} />
                                             </a>
                                         </li>
                                     )
                                 })
                              }
                            </ul>
                     </div>    
                 </div>
            
             </footer>
         );
    }

}