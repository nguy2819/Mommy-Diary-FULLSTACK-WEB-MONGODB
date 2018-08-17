import React from 'react';

export default function({ id, title, week, content, deleteAction, updateAction }){
    return(
        <div>
            <h4>{title}</h4>
            <p>{week} Weeks</p>
            <p>{content}</p>
            <button onClick={e => deleteAction(e, id)}>Delete</button>
            <button onClick={e => updateAction(e, id)}>Edit</button>
        </div>
    )
}
