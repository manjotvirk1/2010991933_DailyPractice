import React from "react";
import './style.css'

export default function Main(){
    return(
        <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                <li>Lorem Ipsum has been the industry's standard dummy text ever </li>
                <li>when an unknown printer took a galley of type</li>
                <li>the 1960s with the release of Letraset</li>
            </ul>
        </main>
    )
}