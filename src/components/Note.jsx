import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    
    function handleClick() {
        props.onDelete(props.id)
    }


    // class attributes should go into the html element (not <Note />)
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
              <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;

