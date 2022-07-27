import React, {useEffect, useState, useRef} from "react";
import '../ccs/App.css';

const Dropdown = ({label, options, selected, onSelectedChange}) => {
    
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const setOpenEventListener = (event) => {    
        if(ref.current.contains(event.target)){
            return;
        }
        setOpen(false);
    }

    useEffect(() => {
        document.body.addEventListener('click', setOpenEventListener, 
        {capture: true});

        return () => {
            document.body.removeEventListener('click', setOpenEventListener, {capture: true});
        };
    }, []);

    const renderedOptions = options.map(option => {
        
        if(selected === option) return null;
        
        return (
            <div 
                key={option.value} 
                className="item"
                style={{color: `${option.color? option.color: 'black'}`}}
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    })
    
    return (
        <div ref={ref} className="ui form">
            <div  className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => {
                        setOpen(!open);
                    }}
                    className={`ui selection dropdown ${open? 'visible active':''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text" style={{color: `${selected.color? selected.color: 'black'}`}}>{selected.label}</div>
                    <div className={`menu ${open? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;