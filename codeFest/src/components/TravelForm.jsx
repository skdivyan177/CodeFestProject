import React, {Component, useState} from "react";
import UserChoice from './UserChoice';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Language from './Language';

const TravelForm = () => {
    
    const [index, setIndex] = useState(-1);
    const [input, setInput] = useState([]);
    const [show, setShow] = useState(false);

    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
// {question:'Who are you traveling with?', choices: ''},
        // {question:'Weather Preferences for Destination?', choices: ''}, 
        // {question:'Preferred Travel Destination?', choices: ''},
        // {question:'Any Dietary Restrictions?',choices: ''},
        // {question:'Cuisine Preferences?' ,choices: ''},
        // {question:'What is your budget?', choices: ''},
        // {question:'Preferred methods of transportation?', choices: ''},
        // {question:'Activities?', choices: ''}
    
    const formQuestions = [
        {question:'Who are you traveling with?', choices: ['Single', 'Couple', 'Group of 3+']},
        {question:'Weather Preferences for Destination?', choices: ['Warm & Breezy', 'Hot & Humid', 'Cold & Rainy', 'Snowy & Chilly']},
        {question:'Preferred Travel Destination?', choices: ['Beach', 'Lake', 'City', 'Mountain']},
        {question:'Any Dietary Restrictions?',choices: ['Vegan', 'Vegetarian', 'Pescatarian', 'Halal', 'Kosher']},
        {question:'Cuisine Preferences?' ,choices: ['Italian', 'American', 'Indian', 'Korean', 'Chinese', 'Japanese', 'Thai', 'French', 'Arab', 'Spanish', 'Ethiopian']},
        {question:'What is your budget?', choices: ['$50 - $150', '$150 - $500', '$500 - $1,000', '$1000']},
        {question:'Preferred methods of transportation?', choices: ['Uber', 'Train', 'Bus', 'Self transportation', 'Bicycles', 'Walking', 'Car rental']},
        {question:'Activities?', choices: ['Outdoor & Physical', 'Swimming', 'Relaxing','Cultural/historical significance sites', 'City Exploring', 'Winter sports']}
        
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
    
    const handleAboutUs = () => {
        setShowAboutUs(true);
        setShowContact(false); 
        setShowLanguage(false);
    }
    const handleContact = () => {
        setShowContact(true);
        setShowAboutUs(false); 
        setShowLanguage(false);
    }
    const handleLanguage = () => {
        setShowLanguage(true);
        setShowAboutUs(false);
        setShowContact(false);
    }
    const handleBack = () => {
        setIndex((prevIndex) => prevIndex - 1)
    }
    return(
        <div>
            <div className="menu-display1">
            <button className="menu-button1">
                        Home
            </button>
            </div>
            <div className="menu-display2">
                    <button className="menu-button2" onClick={handleAboutUs}>
                        About Us
                    </button>
                    {showAboutUs && <AboutUs></AboutUs>}
            </div>
            <div className="menu-display3"> 
                    <button className="menu-button3" onClick={handleContact}>
                        Contact
                    </button>
                    {showContact && <Contact></Contact>}
            </div>
            <div className="menu-display4"> 
                    <button className="menu-button4" onClick={handleLanguage}>
                        Language 🌐
                    </button>
                    {showLanguage && <Language></Language>}
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

                {/* <div className="user-input">
                    {input[index]?.choices && `Your Selection: ${input[index].choices}`}
                </div> */}

                <div className="buttons-container">
    

                    <button className="travel-buttons" onClick={handleBack}>
                        Back
                    </button>
                    <button className="travel-buttons2" onClick={handleNext}>
                        Next
                    </button>
                </div>

                
                
            </div>
                
                

                
                

                

                
            

            
        </div>
    );
}

export default TravelForm;
