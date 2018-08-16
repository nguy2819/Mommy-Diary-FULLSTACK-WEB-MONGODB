import React from 'react';

export default function({ title, week, diary }){
    return(
        <div>
            <h4>{title}</h4>
            <p>{week} Weeks</p>
            <p>{diary}</p>
        </div>
    )
}
