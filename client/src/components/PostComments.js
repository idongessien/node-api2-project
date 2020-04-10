import React from 'react';

const PostComments = (props) => {

    return (
        <div className='box'>
            <p>{props.text}</p>
            <p style={{ fontSize: '12px' }}>Created: {props.created}</p>
        </div>
    )
}

export default PostComments;