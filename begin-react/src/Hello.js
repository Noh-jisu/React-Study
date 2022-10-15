import React from 'react';

// props 대신 {color, name} 사용가능
function Hello({color, name, isSpecial} ) {
    return (
        <div style={{
            // props.color 대신 color사용가능
            color
        }}>
            {/*{isSpecial ? <b>*</b> : null}*/}
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}
// props를 설정하지 않았을때 기본값 설정방법
Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;