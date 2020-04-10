import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostComments from './PostComments';

const SinglePost = (props) => {

    const { id } = props.match.params;
    
    const [postContents, setPostContents] = useState([]);
    const [postComments, setPostComments] = useState([]);
    const [commentAdd, setCommentAdd] = useState({
        text: ''
    })

    useEffect(() => {
        axios
        .get(`http://localhost:4000/api/posts/${id}`)
        .then(response => {
            setPostContents(response.data);
        })
    }, [])

    useEffect(() => {
        axios
        .get(`http://localhost:4000/api/posts/${id}/comments`)
        .then(response => {
            setPostComments(response.data);
        })
    }, [])

    const deletePost = e => {
        e.preventDefault();
        axios
        .delete(`http://localhost:4000/api/posts/${id}`)
        .then(response => {
            alert('Post Removed!');
            props.history.push('/');
        })
    }

    return (
        <>
        <div>
            {postContents.length > 0
            ? <div className="card">
                <header className="card-header">
                <p className="card-header-title">
                    {postContents[0].title}
                </p>
                </header>
                <div className="card-content">
                <div className="content">
                    {postContents[0].contents}
                    <br />
                    <p style={{ fontSize: '10px' }}>Created: {postContents[0].created_at}</p>
                </div>
                </div>
                <footer className="card-footer">
                <a href={`/${id}/add-comment`} className="card-footer-item">Add Comment</a>
                <a href={`/${id}/edit`} className="card-footer-item">Edit</a>
                <a href="#" onClick={deletePost} className="card-footer-item">Delete</a>
                </footer>
            </div> 
            : null}
        </div>
        
        {postComments.length > 0
        ? postComments.map(element => {
            return <PostComments key={element.id} text={element.text} created={element.created_at} />
        })  : null} </>
    )
}

export default SinglePost;