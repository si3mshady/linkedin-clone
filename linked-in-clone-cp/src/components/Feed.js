import React from 'react'
import '../css/Feed.css'
import InputOption from '../components/InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
export default function Feed() {
    return (
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed__input" >
                        <CreateIcon />
                        <form>
                            <input type="text"/>
                            <button type="submit">SEND</button>


                        </form>
                </div>
                <div className="feed__inputOptions">
               
               <InputOption Icon={ImageIcon} color={"#70B5f9"} title="Photo" />
   
               <InputOption Icon={SubscriptionsIcon} color={"#E7A33E"} title="Video" />

               <InputOption Icon={EventNoteIcon} color={"gray"} title="Event" />

               <InputOption Icon={CalendarViewDayIcon} color={"#7FC15E"} title="Write Article" />
                
                
               </div>
            </div>
           
        </div>
    )
}
