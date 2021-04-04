import React, {useState, useEffect} from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import InputOption from '../components/InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import axios from 'axios'

// docker run -p 27017:27017 -v /Users/ellarnol/linkedInDB:/data/db  mongo:latest


export default function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState([])
    const [newData, setNewData] = useState(false)

    useEffect(() => {
        const url = "http://localhost:9000/v1/linkedIn/posts"
        axios.get(url).then(data => {console.log(data); setPosts(data.data)})
    }, [newData] )


    const sendPost = (e) => {
        e.preventDefault();
        const url = "http://localhost:9000/v1/linkedIn/addPost"
        const data = {
            message: input,
            description: "this is test data",
            name: 'si3mshady',
            photoUrl: ''

        }
        axios.post(url,data).then(data => console.log(data))
        setNewData(!newData)
    }

   const handleChange = (e) => {
       e.preventDefault()
       setInput(e.target.value)
   }

    return (
        <div className="feed">
          <div className="feed__inputContainer">
            <div className="feed__input" >
                        <CreateIcon />
                        <form>
                            <input onChange={handleChange} value={input} type="text"/>
                            <button 
                            onClick={sendPost}
                            type="submit">SEND</button>


                        </form>
                </div>
                <div className="feed__inputOptions">
               
               <InputOption Icon={ImageIcon} color={"#70B5f9"} title="Photo" />
   
               <InputOption Icon={SubscriptionsIcon} color={"#E7A33E"} title="Video" />

               <InputOption Icon={EventNoteIcon} color={"gray"} title="Event" />

               <InputOption Icon={CalendarViewDayIcon} color={"#7FC15E"} title="Write Article" />
                
                
               </div>
            </div>
           
            {posts.map((post) => 
             <Post 
                name={post.name}
                description={post.description}
                message={post.message} 
                />)}
                
{/* 
         {posts.map((post) => 
             <Post 
                name="Elliott Arnold"
                description="This is a test"
                message="Wow this worked - messages go here!" />)}                    */}
          
        </div>
    )
}

