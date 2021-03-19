import React from 'react';
import './title.less';

const Title=(props)=>{
    const {text, level}=props;
    return(
        <div className={level+' title'}>
            {text}
        </div>
    )
}

export default Title;