import React, { useState } from 'react';
import './App.css'; 

const AccordionApp = () => {
    const title = 'Accordion App';
    const hiddenTexts = [
        { label: 'Button 1', value: 'Text of Accordion 1' },
        { label: 'Button 2', value: 'Text of Accordion 2' },
        { label: 'Button 3', value: 'Text of Accordion 3' },
        { label: 'Button 4', value: 'Text of Accordion 4' }
    ];

    return (
        <div>
            <Header title={title} />
            <Accordion hiddenTexts={hiddenTexts} />
        </div>
    );
};

const Header = ({ title }) => {
    return <h1>{title}</h1>;
};

const Accordion = ({ hiddenTexts }) => {
    return (
        <div className="accordion">
            {hiddenTexts.map((hiddenText) => (
                <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
            ))}
        </div>
    );
};

const AccordionItem = ({ hiddenText }) => {
    const [visibility, setVisibility] = useState(false);

    const handleToggleVisibility = () => {
        setVisibility(!visibility);
    };

    const activeStatus = visibility ? 'active' : '';

    return (
        <div>
            <button className="accordion__button" onClick={handleToggleVisibility}>
                {hiddenText.label}
                <span className={visibility ? 'fas fa-minus' : 'fas fa-plus'}></span>
            </button>
            <p className={`accordion__content ${activeStatus}`}>{hiddenText.value}</p>
        </div>
    );
};

export default AccordionApp;
