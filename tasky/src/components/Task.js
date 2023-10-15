import React from 'react';

const Task = (props) => {

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p className='emphasis'>Due: {props.deadline}</p>
            <p>{props.children}</p>
            {/* <button onClick={props.markDone}>Done</button> */}
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
}


export default Task;