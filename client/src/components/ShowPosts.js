import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

const ShowPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/api/posts')
        .then(response => {
            setPosts(response.data);
        })
    }, [])

    return (
        <section className='posts-container'>
            <div className='container'>
                {posts.map(element => {
                    return <Posts id={element.id} key={element.id} title={element.title} contents={element.contents} />
                })}
            </div>
        </section>
    )
}

export default ShowPosts;