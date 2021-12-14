import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from '././components/Avatar';
import Message from './components/Message';
import NameWithHandle from './components/NameWithHandle';
import Time from './components/Time';

// create a component for the tweet 
function Tweet() {
return (
<div className="tweet">
    <Avatar />
    <div className="content">
        <NameWithHandle /><Time />
        <Message />
        <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton />
            <MoreOptionsButton />
           
        </div>    
    </div> 
</div>
);
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
    );
    const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
    );
    const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
    );
    const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
    );
// render tweet component to the dom
ReactDOM.render(<Tweet />,
document.querySelector('#root'));



