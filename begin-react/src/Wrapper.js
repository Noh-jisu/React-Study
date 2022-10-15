import React from 'react';

// children사용 시 App.js에서 <Wrapper></Wrapper>사이에 있는 값 가져올 수 있음.
function Wrapper( {children} ) {
    const style = {
        border : "2px solid black",
        padding : 16
    };

    return <div style={style}>{children}</div>
}

export default Wrapper;