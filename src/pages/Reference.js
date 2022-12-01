import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DEFAULT_MATCH = [
    {
        id: 1,
        name: "France - Japon",
        score: "1 - 1"
    },
    {
        id: 2,
        name: "Tunisie - France",
        score: "2 - 1"
    },
    {
        id: 3,
        name: "France - Qatar",
        score: "0 - 3"
    }
]

/**
 * Fonction constante
 * @returns div contenant nos références
 */
const Reference = () => {
    //hook 
    const [score, setScore] = useState(0);

    const [info, setInfo] = useState(DEFAULT_MATCH);

    const newScore = () => {
        // console.log("Render", score);
        setScore((curr) => curr + 1)
        //setScore(score+1) équivalent à la méthode en dessus
    }



    const { id } = useParams();
    return (
        <div className="Reference">
            Nos références : {id}
            <br />
            {score}
            <br />
            <button onClick={newScore}></button>
        </div>
    );
}

export default Reference;