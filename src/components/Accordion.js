import React, {useState} from "react";

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onClickFunction = (index) => {
        setActiveIndex(index);
    };

    
    const renderItems = items.map((item, index) => {
        
        const active = index === activeIndex? 'active': '';

        return (
            <React.Fragment key={index}>
                <div   
                    className={`title ${active}`} 
                    onClick={() => onClickFunction(index) } 
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderItems}
        </div>
    ); 
};

export default Accordion;