import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import "./Post.css";
import InputOptions from './InputOptions';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='posts__container'>
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h4>Test Dummy</h4>
                <p>Description</p>
            </div>
        </div>
        <div className="post__body">
            <p>Message goes here</p>
        </div>
        <div className="post__buttons">
            <InputOptions Icon={ThumbUpOffAltIcon} title="Like"/>
            <InputOptions Icon={CommentIcon} title="Comment"/>
            <InputOptions Icon={ShareIcon} title="Share"/>
            <InputOptions Icon={SendIcon} title="Send"/>
        </div>
    </div>
  )
}

export default Post