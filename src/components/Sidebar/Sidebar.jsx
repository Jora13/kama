import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
   return (
      <>
         <div className="sidebar">
            <ul className="sidebar_nav">
               <li>
                  <NavLink to="/profile">Profile</NavLink>
               </li>
               <li>
                  <NavLink to="/dialogs">Dialogs</NavLink>
               </li>
            </ul>
            <div className="sidebar_settings">
               {/* <a href="">s</a> */}
            </div>

         </div>
      </>
   );
}

export default Sidebar;