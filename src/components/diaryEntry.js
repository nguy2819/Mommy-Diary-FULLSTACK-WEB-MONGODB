import React from 'react';

export default function({ id, title, week, content, deleteAction, updateAction }){
    return(
        <div className="card">
            <h1 className="header">{title}</h1>
            <p>{week} Weeks</p>
            <p>{content}</p>
            <span>
                <button className="header" onClick={e => deleteAction(e, id)}>Delete</button>
                <button className="header" onClick={e => updateAction(e, id)}>Edit</button>
            </span>
        </div>
    )
}
