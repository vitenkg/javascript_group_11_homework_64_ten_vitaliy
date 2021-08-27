import React from 'react';

const Post = props => {
    console.log(props.data);
    return (
            <div
                className="PostShow"
            >
                <p>Created on: {props.data}</p>
                <p>{props.text}</p>
                <button type="button">Ok</button>
            </div>
    );
};

export default Post;