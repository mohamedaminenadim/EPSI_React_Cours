import React from "react";
import Form from "../components/Form";

/**
 * La classe contact étend de React.Component
 * d'où l'utilisation du render()
 */

 function ListItem(props){
    return (
    <li className={props.key}>
        {props.value}
    </li>)
}

class Contact extends React.Component {
    constructor(props){
        super(props);
        const number = [1,3,5,2,7]
        this.listItem = number.map(
            (number) => <ListItem
                key={number.toString()}
                value={number}/>
        )}

    render() {
        return (
            <div className="Contact">
                Votre message ...
                <Form/>
            </div>
        )
    }
}

export default Contact;