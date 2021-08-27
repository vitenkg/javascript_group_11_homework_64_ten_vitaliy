import React, {useEffect, useState} from 'react';
import PostsAdd from "../PostsAdd/PostsAdd";
import {useHistory} from "react-router-dom";
import axiosApi from "../../AxiosApi";
import './Posts.css';


const Posts = () => {
    let history = useHistory();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/posts.json');
            const responseArray = [];

            Object.keys(response.data).forEach(id => {

                responseArray.push({
                    id,
                    data: response.data[id].data,
                    title: response.data[id].title,
                    text: response.data[id].text
                })
            })
            setPosts(responseArray);
        }

        fetchData().catch(console.error);
    }, []);

    const onClickHandler = (id) => {
        history.replace('/posts/' + id);
    }

    return posts && (
        <>
            {posts.map(post => (
                    <div
                        key={post.id}
                        id={post.id}
                        className="Post"

                    >
                        <p className="Time">Created on: {post.data}</p>
                        <p>{post.title}</p>
                        <button
                            type="button"
                            className="Btn"
                            onClick={() => onClickHandler(post.id)}
                        >
                            Read More >>
                        </button>
                    </div>
                )
            )
            }
            {PostsAdd}
        </>
    );
};

export default Posts;