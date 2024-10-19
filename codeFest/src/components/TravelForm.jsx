import React, {Component, useState} from "react";
import UserChoice from './UserChoice'

const TravelForm = () => {
    
    const [index, setIndex] = useState(-1);
    const [input, setInput] = useState([]);
// {question:'Who are you traveling with?', choices: ''},
        // {question:'Preferred Travel Destination?', choices: ''},
        // {question:'Weather Preferences for Destination?', choices: ''},
        // {question:'Any Dietary Restrictions?',choices: ''},
        // {question:'Cuisine Preferences?' ,choices: ''},
        // {question:'What is your budget?', choices: ''},
        // {question:'Preferred methods of transportation?', choices: ''},
        // {question:'Activities?', choices: ''}
    
    const formQuestions = [
        {question:'Who are you traveling with?', choices: ['Single', 'Couple', 'Group of 3+']},
        {question:'Preferred Travel Destination?', choices: ['Beach', 'Lake', 'City', 'Montain']},
        {question:'Weather Preferences for Destination?', choices: ['Warm & Breezy', 'Hot & Humid', 'Cold & Rainy', 'Snowy & Chilly']},
        {question:'Any Dietary Restrictions?',choices: ['Vegan', 'Vegetarian', 'Pescatarian', 'Halal', 'Kosher']},
        {question:'Cuisine Preferences?' ,choices: ['Italian', 'American', 'Indian', 'Korean', 'Chinese', 'Thai', 'French', 'Arab', 'Japanese', 'Spanish', 'Ethiopian']},
        {question:'What is your budget?', choices: ['$50 - $150', '$150 - $500', '$500 - $1,000', '$1000']},
        {question:'Preferred methods of transportation?', choices: ['Uber', 'Train', 'Bus', 'Self transportation', 'Bicycles', 'Walking', 'Car rental']},
        {question:'Activities?', choices: ['Outdoor Physical', 'Swimming', 'Relaxing','Cultural/historical significance sites', 'City Exploring', 'Winter sports']}
        
    ];

    const handleNext = () => {
        setIndex((prevIndex) => prevIndex + 1);
    }

    const handleChange = (e) => {
        setInput((prevChoices) => {
          const newChoices = [...prevChoices];
          newChoices[index] = e.target.value;
          return newChoices;
        });
    };
    
    return(
        <div>
            <div className="menu-display1">
            <button className="menu-button1">
                        Home
            </button>
            </div>
            <div className="menu-display2">
                    <button className="menu-button2">
                        About Us
                    </button>
            </div>
            <div className="menu-display3"> 
                    <button className="menu-button3">
                        Contact
                    </button>
            </div>
            <div className="menu-display4"> 
                    <button className="menu-button4">
                        Language 🌐
                    </button>
            </div>

            
            
            <div className="question-display">
                {index < 0 && ( // Only display message if index is -1
                    <h5>
                        Ready to start your course with our Destination Calculator? <br /> Simply click the button below to get started!
                    </h5>
                )}
                <h5>
                    {formQuestions[index]?.question}
                </h5>
                <UserChoice
                    
                    
                    handleChange={handleChange}
                    label={formQuestions[index]?.question || ''} // Handle undefined question
                    choices={formQuestions[index]?.choices || []}
                    checked={input[index]}
                
                
                >

                </UserChoice>

                <div className="buttons-container">
                    <button className="travel-buttons"onClick={handleNext} disablle={index === formQuestions.length - 1}>
                        Get started!
                    </button>
                </div>
                
            </div>
                
                

                
                

                

                
            

            
        </div>
    )
}

export default TravelForm;
