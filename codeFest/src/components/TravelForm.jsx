import React, {Component, useState} from "react";
import UserChoice from './UserChoice';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Language from './Language';
import Destination from './Destination';

const TravelForm = () => {
    
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState([]);
    const [userTravelers, setUserTravelers] = useState('');
    const [userRoom, setUserRoom] = useState('');
    const [userDestination, setUserDestination] = useState('');
    const [userWeather, setUserWeather] = useState('');
    const [userDietary, setUserDietary] = useState([]);
    const [userCuisine, setUserCuisine] = useState([]);
    const [userBudget, setUserBudget] = useState('');
    const [userTransport, setUserTransport] = useState([]);
    const [userActivity, setUserActivity] = useState([]);
    
    

    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showDestination, setShowDestination] = useState(false);
// {question:'Who are you traveling with?', choices: ''},
        // {question:'Weather Preferences for Destination?', choices: ''}, 
        // {question: 'Do you prefer a connecting room?', choices: ['Yes', 'No']}
        // {question:'Preferred Travel Destination?', choices: ''},
        // {question:'Any Dietary Restrictions?',choices: ''},
        // {question:'Cuisine Preferences?' ,choices: ''},
        // {question:'What is your budget?', choices: ''},
        // {question:'Preferred methods of transportation?', choices: ''},
        // {question:'Activities?', choices: ''}
    
    const formQuestions = [
        {question:'Who are you traveling with?', choices: ['Single', 'Couple', 'Group of 3+']},
        {question: 'Do you prefer a connecting room?', choices: ['Yes', 'No']},
        {question:'Weather Preferences for Destination?', choices: ['Warm & Breezy', 'Hot & Humid', 'Cold & Rainy', 'Snowy & Chilly']},
        {question:'Preferred Travel Destination?', choices: ['Beach', 'Lake', 'City', 'Mountain']},
        {question:'Any Dietary Restrictions?',choices: ['None', 'Vegan', 'Vegetarian', 'Pescatarian', 'Halal', 'Kosher']},
        {question:'Cuisine Preferences?' ,choices: ['Italian', 'American', 'Indian', 'Korean', 'Chinese', 'Japanese', 'Thai', 'French', 'Arab', 'Spanish', 'Ethiopian']},
        {question:'What is your budget?', choices: ['$50 - $150', '$150 - $500', '$500 - $1,000', '$1000']},
        {question:'Preferred methods of transportation?', choices: ['Uber', 'Train', 'Bus', 'Self transportation', 'Bicycles', 'Walking', 'Car rental']},
        {question:'Activities?', choices: ['Outdoor & Physical', 'Swimming', 'Relaxing','Cultural/historical significance sites', 'City Exploring', 'Winter sports']}

    ];

    const handleNext = () => {
        setIndex((prevIndex) => prevIndex + 1);
        // const userInput = [
        //     {
                
        //     }

        // ];

        setInput(prevState => [...prevState, {
            travelers: userTravelers,
            room: userRoom,
            destination: userDestination,
            weather: userWeather,
            dietary: userDietary,
            cuisine: userCuisine,
            budget: userBudget,
            transport: userTransport,
            activity: userActivity
        }]);

        console.log(index);
        
    }

    const handleChange = (e) => {
        const selectedValue = e.target.value;

  // Update the state based on the current question index
        switch (index) {
            case 0:
            setUserTravelers(selectedValue);
            break;
            case 1:
                setUserRoom(selectedValue);
                break;
            case 2:
            setUserWeather(selectedValue);
            break;
            case 3:
            setUserDestination(selectedValue);
            break;
            case 4:
            setUserDietary(selectedValue); // Assuming single selection for dietary restrictions
            break;
            case 5:
            setUserCuisine(selectedValue); // Assuming multiple selections for cuisine are allowed
            break;
            case 6:
            setUserBudget(selectedValue);
            break;
            case 7:
            setUserTransport(selectedValue); // Assuming multiple selections for transport are allowed
            break;
            case 8:
            setUserActivity(selectedValue); // Assuming multiple selections for activities are allowed
            break;
            
            default:
            break;
        }
        // setInput((prevChoices) => {
        //   const newChoices = [...prevChoices];
        //   newChoices[index] = e.target.value;
        //   return newChoices;
        // });
        console.log(input[index]);
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

    const handleDestination = () => {
        setShowLanguage(false);
        setShowAboutUs(false);
        setShowContact(false);
        setShowDestination(true);
    }

    const handleBack = () => {
        setIndex((prevIndex) => prevIndex - 1)
        console.log(index);
    }
    return(
        <div>
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
                
                <h5>
                    {formQuestions[index]?.question}
                </h5>


                <UserChoice

                    handleChange={handleChange}
                    label={formQuestions[index]?.question || ''} // Handle undefined question
                    choices={formQuestions[index]?.choices || []}
                    checked={
                        index === 0 ? userTravelers:
                        index === 1 ? userRoom:
                        index === 2 ? userWeather:
                        index === 3 ? userDestination:
                        index === 4 ? userDietary:
                        index === 5 ? userCuisine:
                        index === 6 ? userBudget:
                        index === 7 ? userTransport:
                        index === 8 ? userActivity:
                        ''

                    }
                
                
                >

                </UserChoice>

                {/* <div className="user-input">
                    {input[index]?.choices && `Your Selection: ${input[index].choices}`}
                </div> */}

                <div className="buttons-container">

                {index === formQuestions.length && (
                        <Destination></Destination>
                    )

                }

                    {index > 0 && ( // Only display message if index is -1
                        <button className="travel-buttons" onClick={handleBack}>
                            Back
                        </button>
                    )}

                    {index < formQuestions.length &&
                        <button className="travel-buttons2" onClick={handleNext}>
                        Next
                        </button>
                    }
                    
                </div>

                    
                    
                
                
            </div>
                
                

                
                

                

                
            

            
        </div>
    );
}

export default TravelForm;
