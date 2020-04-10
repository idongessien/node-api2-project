import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPost = (props) => {

    const { id } = props.match.params;
    const [post, setPost] = useState({
        id: id,
        title: '',
        contents: '',
        created_at: '',
        updated_at: ''
    });

    useEffect(() => {
        axios
        .get(`http://localhost:4000/api/posts/${id}`)
        .then(response => {
            setPost(response.data[0]);
            // console.log(response.data)
        })
    }, [])

    const handleChanges = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const updatePost = {
            title: post.title,
            contents: post.contents
        }
        axios
        .put(`http://localhost:4000/api/posts/${id}`, updatePost)
        .then(response => {
            alert('Post Updated!');
            props.history.push(`/${id}`);
        })
    }

    return (
        <>
            {post
            ? 
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" name='title' type="text" value={post.title} onChange={handleChanges} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Text</label>
                    <div class="control">
                        <textarea class="textarea" value={post.contents} name='contents' onChange={handleChanges}></textarea>
                    </div>
                </div>
                <button>Edit Post</button>
            </form>
            : null}
        </>
    )
}

export default EditPost;