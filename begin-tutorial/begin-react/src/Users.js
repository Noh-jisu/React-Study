import React, {useState} from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers() {
    const response = axios.get('https://jsonplaceholder.typicode.com/users/');
    return (await response).data;
}

function Users () {
    const [state, refetch] = useAsync(getUsers, [], true);
    const {loading, data: users, error} = state;
    const [userId, setUserId] = useState(null);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return <button onClick={refetch}>불러오기</button>;

    return (
        <>
        <ul>
            {/* users함수에 대하여 li태그안에  user이름(이름) 형식으로 표기*/}
            {users.map(user => (
            <li key={user.id} onClick={() => setUserId(user.id)}>
                {user.username} ({user.name})
            </li>
            ))}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
        <hr />
        {userId && <User id={userId} />}
        </>
    );
}

export default Users;