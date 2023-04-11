import React, {useState, useEffect, ReactElement} from "react";
import classes from './BasicInput.module.css';


export type Input = {
    id: string;
    className?: string;
    type: string;
    step?: string;
    min?: number;
    max?: number;
    defaultValue?: string | number;
    value: string | number | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface BasicInputProps {
    input: Input,
    label: string
};

const BasicInput = ({ input, label }: BasicInputProps): ReactElement => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <br/>
            <input {...input} />
        </div>
    )
};

export default BasicInput;