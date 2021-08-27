import React, {useEffect, useState} from 'react';
import axiosApi from "../../AxiosApi";

const Post = ({match}) => {
        console.log(match.params.id);
        const [post, setPost] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                const response = await axiosApi.get('/posts/' + match.params.id + '.json');
                setPost({title: response.data.title, text: response.data.text, data: response.data.data});
            }

            fetchData().catch(console.error);
        }, [match.params.id]);

        const onSubmitHandle = e => {
            e.preventDefault();

        }


        return post && (
            <form onSubmit={e => onSubmitHandle(e)}>
                <fieldset>
                    <legend>введите сообщение</legend>
                    <p><input
                        type="text"
                        value={post.title}
                        onChange={e => setPost({...post, title: e.target.value})}/></p>
                    <p>
                    <textarea
                        rows="10"
                        cols="120"
                        value={post.text}
                        onChange={e => setPost({...post, text: e.target.value})}
                    >

                    </textarea>
                    </p>
                    <button type="submit">Изменить</button>
                </fieldset>
            </form>

        );
    }
;

export default Post;