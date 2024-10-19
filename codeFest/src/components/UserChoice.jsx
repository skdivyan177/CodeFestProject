import React, {Component, useEffect, useState} from "react";

const UserChoice = ({handleChange, label, choices, checked}) => {

    return (

        <div className="radio-buttoms">
            {choices &&
                choices.map((choice) => (
                    <li key={choice} type='none' className="input-buttons">

                        <input
                        id = {choice}
                        value = {choice}
                        name = {label}
                        type = "radio"
                        onChange={handleChange}
                        checked = {checked ==choice}
                        
                        ></input>

                        {choice}

                    </li>
                ))

            }

        </div>
    )
}

export default UserChoice;