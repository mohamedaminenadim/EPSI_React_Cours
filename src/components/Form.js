import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="Form">
                <label>Texte</label>
                <input type="text" defaultvalue="" name="lastname" />
                <input type="submit" value="Envoyer" />
            </form>
        );
    }

}

export default Form;