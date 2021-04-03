import React from 'react'
import '../css/Sidebar.css'
import {Avatar} from '@material-ui/core'

export default function Sidebar() {
    return (
        <div className="sidebar">
                       <div className="sidebar__top" >

                           <img src="https://cff2.earth.com/uploads/2017/11/08174338/How-ice-forms-inside-of-clouds-768x512.jpg"></img>
                           <Avatar 
                            className="sidebar__avatar"
                                src="https://cdn.dribbble.com/users/894888/screenshots/3958647/image.png?compress=1&resize=800x600" />
                                <h2>Elliott Arnold</h2>
                                <h2>si3mshady@gmail.com</h2>
                            </div>

                       <div className="sidebar__stats">
                           <div className="sidebar__stat">
                            <p>Who viewed you profile</p>
                            <p className="sidebar__statNumber">8,888</p>
                               
                           </div>

                           <div className="sidebar__stat">
                           <p>Views of your post</p>
                           <p className="sidebar__statNumber">888</p>
                                
                               
                           </div>
                       </div>

                       <div className="sidebar__bottom">

                       <p>Recent</p>
                        </div>
        </div>
    )
}
