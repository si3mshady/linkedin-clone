import React, {useState} from 'react'
import {Avatar} from '@material-ui/core'
import '../css/Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';


export default function Post({name, user, description, timestamp, message, photoURL}) {
   

    return (
        <div className="post">
            <div className="post__header">
                    <Avatar src={user.userImage}/>
                    <div className="post__info">
                        <h2>{name}</h2>
                        
                        <p>{description}</p>
            </div>
            </div>
           

            <div className="post__body">
               {message}
            </div>


            <div className="post__buttons">
               

                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
                <InputOption Icon={CommentIcon} title="Comment" />
                <InputOption Icon={ShareIcon} title="Share" />
                <InputOption Icon={SendIcon} title="Send" />

              
              

            </div>
            
        </div>
    )
} 
