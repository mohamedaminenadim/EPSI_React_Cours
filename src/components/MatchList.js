import React from "react";
import '../style.css/MatchList.css';

function MatchList(props) {
    return (
        <div className="itemMatch">

            <p>{props.name}</p>
            <i>{props.content}</i>

        </div>
    );
}

export default MatchList;