import React from "react";
import { useParams } from "react-router-dom";

/**
 * Fonction constante
 * @returns div contenant nos références
 */
const Reference = () => {
    const { id } = useParams();
    return(
        <div className="Reference">
            Nos références : {id}
        </div>
    );
}

export default Reference;