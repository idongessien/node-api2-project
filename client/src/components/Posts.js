import React from 'react';

const Posts = (props) => {

    return (
        <a href={`/${props.id}`}>
            <section className="hero is-light is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 style={{ fontSize: '18px' }} className="title">
                        {props.title}
                        </h1>
                        <h2 style={{ fontSize: '16px' }} className="subtitle">
                        {props.contents}
                        </h2>
                    </div>
                </div>
            </section>
        </a>
    )
}

export default Posts;