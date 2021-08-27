import React, {useState} from 'react';
import dayjs from "dayjs";
import axiosApi from "../../AxiosApi";

const PostsAdd = ({history}) => {
    const [newPost, setNewPost] = useState('');

    const data = dayjs(new Date()).format('DD.MM.YYYY HH:mm:ss');

    const onSubmitHandle = async e => {
        e.preventDefault()
        console.log('отправили');
        console.log(newPost);
        try {
            await axiosApi.post('/posts.json', {
                data,
                title:newPost.title,
                text:newPost.text,
            })
        } finally {
            history.replace('/');
        }
    };

    return (
        <form onSubmit={(e)=>onSubmitHandle(e)}>
            <fieldset>
                <legend>введите сообщение</legend>
                <p><input type="text" value={newPost.title} onChange={e => setNewPost( {...newPost, title: e.target.value})}/></p>
                <p>
                    <textarea
                        rows="10"
                        cols="120"
                        value={newPost.text}
                        onChange={e => setNewPost({...newPost, text: e.target.value})}
                    >

                    </textarea>
                </p>
                <button type="submit">Добавить</button>
            </fieldset>

        </form>
    );
};

export default PostsAdd;
