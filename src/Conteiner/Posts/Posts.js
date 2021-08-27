import React, {useEffect, useState} from 'react';
import './Posts.css';
import Post from "../../Components/Post/Post";
import PostsAdd from "../PostsAdd/PostsAdd";
import axiosApi from "../../AxiosApi";

const Posts = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get('/posts.json');
            const responseArray = [];

            Object.keys(response.data).forEach(id => {

                responseArray.push({
                    id,
                    data: response.data[id].data,
                    text: response.data[id].text
                })
            })
            setPosts(responseArray);
        }

        fetchData().catch(console.error);
    }, [])

    return posts && (
        <div>
            {posts.map(post => {

                return (
                    <div
                        key={post.id}
                        className="Post"
                    >
                        <p>Created on: {post.data}</p>
                        <p>{post.text}</p>
                        <button
                            type="button"
                            className="Btn"
                            onClick={() => Post(post)}
                        >
                            Read More >>
                        </button>
                    </div>
                )
            })
            }
            {PostsAdd}
        </div>
    );
};

export default Posts;