import React, {useState} from 'react';
import dayjs from "dayjs";
import axiosApi from "../../AxiosApi";

const PostsAdd = ({history}) => {
    const [text, setText] = useState('');

    const data = dayjs(new Date()).format('DD.MM.YYYY HH:mm:ss');

    const onSubmitHandle = async e => {
        e.preventDefault()
        console.log('отправили');

        try {
            await axiosApi.post('/posts.json', {
                data,
                text
            })
        } finally {
            history.replace('/');
        }
    };

    return (
        <form onSubmit={(e)=>onSubmitHandle(e)}>
            <fieldset>
                <legend>введите сообщение</legend>
                <p>
                    <textarea
                        rows="10"
                        cols="120"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    >

                    </textarea>
                </p>
                <button type="submit">Добавить</button>
            </fieldset>

        </form>
    );
};

export default PostsAdd;
