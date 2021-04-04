import React from 'react'
import '../css/Header.css'


import HeaderOption from './HeaderOption'



import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function Header() {
    return (
        <div  className="header">              
               <div className="header__left">
               {/* image  */}
               <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png"></img>


               {/* searchbar  */}
               <div className="header__search">
                   {/* search icon */}
                   <SearchIcon />
                   <input placeholder="Search" type="text"/>
               </div>
                 </div>

               <div className="header__right"> 
                    {/* home icon */}
                    <HeaderOption Icon={HomeIcon} title={"home"} />
                    
                  
                    {/* my network  */}
                    <HeaderOption Icon={GroupIcon} title={"network"} />
                    {/* jobs  */}
                    <HeaderOption Icon={WorkIcon} title={"jobs"}  />

                    {/* messaging  */}
                    <HeaderOption Icon={TextsmsRoundedIcon} title={"messaging"}  />
                    {/* notification  */}
                    <HeaderOption Icon={NotificationsActiveIcon} title={"notification"} />
                    {/* avatar  */}
                    <HeaderOption title={"me"} avatar="https://cdn.dribbble.com/users/894888/screenshots/3958647/image.png?compress=1&resize=800x600" />
                    {/* work */}
                    
               
                </div>
        </div>
    )
}


export default Header
