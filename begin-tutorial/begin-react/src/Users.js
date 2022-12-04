import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users () {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try{
            /* 값 초기화 */
            setUsers(null);
            setError(null);
            /* 로딩이 시작됐다는 것을 의미 */
            setLoading(true);
            /* api요청 */
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
            );
            setUsers(response.data);
        } catch (e) {
            console.log(e.response.status);
            setError(e);
        }
        setLoading(false);
    };

    /* 컴포넌트가 처음 렌더링 될때 api호출 */
    useEffect(() => {
        fetchUsers();
    }, [])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!users) return null;

    return (
        <>
        <ul>
            {/* users함수에 대하여 li태그안에  user이름(이름) 형식으로 표기*/}
            {users.map(user => (
            <li key={user.id}>
                {user.username} ({user.name})
            </li>
            ))}
        </ul>
        <button onClick={fetchUsers}>다시 불러오기</button>
        </>
    );
}

export default Users;