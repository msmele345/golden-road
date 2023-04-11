import React, { ReactElement } from "react";


interface AddButtonProps {
    text: string;
    type: "button" | "submit" | "reset" | undefined
    cssClasses?: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

const AddButton = ({text, cssClasses, type, isDisabled}: AddButtonProps): ReactElement => {
    return (
      <button 
        type={type} 
        disabled={isDisabled} 
        className={`${cssClasses ? cssClasses: ''}`}>
          {text}
      </button>
    )
};

export default AddButton;