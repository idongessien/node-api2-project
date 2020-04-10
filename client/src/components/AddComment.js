import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddComment = (props) => {

    const { id } = props.match.params;
    const [comment, setComment] = useState({
        text: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(`http://localhost:4000/api/posts/${id}/comments`, comment)
        .then(response => {
            alert('Added Comment!');
            props.history.push(`/${id}`);
        })
    }

    const handleChanges = e => {
        setComment({
            text: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="field">
                <label class="label">Comment</label>
                <div class="control">
                    <textarea class="textarea" onChange={handleChanges} value={comment.text} placeholder="Comment Text"></textarea>
                </div>
            </div>
            <button type='submit'>Add Comment</button>
        </form>
    )
}

export default AddComment;