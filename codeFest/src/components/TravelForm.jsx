import React, {Component, useState} from "react";

const TravelForm = () => {
    
    return(
        <div>
            <div className="menu-display">
            <button className="menu-button1">
                        Home
                    </button>
                    <button className="menu-button2">
                        About Us
                    </button>
                    <button className="menu-button3">
                        Contact
                    </button>
                    <button className="menu-button4">
                        Language 🌐
                    </button>
            </div>
            <div className="question-display">
                <div>
                <h5>
                    Ready to start your course with our Destination Calculator?<br></br>
                    Simply click the button below to get started!
                </h5>
                </div>
                
                <div className="buttons-container">
                    <button className="travel-buttons">
                        Get Started!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TravelForm;