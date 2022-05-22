import "./Feed.css";
import { Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import InputOptions from "./InputOptions";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from "./Post";
const Feed = () =>{
    return(
        <div className="feed__container">
            <div className="send__container">
                <div className="post">
                    <Avatar className="post__avatar" src='https://g7y6h3a7.rocketcdn.me/wp-content/uploads/2020/03/dummy-image-square.jpg'/>
                    <form className="post__container">
                        <input type="text" name="post" id="post" placeholder="Ask your network for advice" />
                        <button id="send" type="submit">send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Feed;