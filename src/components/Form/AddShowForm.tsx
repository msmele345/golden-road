import React, {useState, useEffect, ReactElement, FormEvent, useReducer} from "react";
import classes from './AddShowForm.module.css';
import BasicInput from "./BasicInput";
import Card from '../UI/Card';
import AddButton from "./AddButton";


type FormCurrentValue = {
    value: string | number | undefined,
    isValid: boolean
}


type FormState = {
    [key: string]: FormCurrentValue
}

const defaultFormState: FormState = {
    bandName: {
        value: '',
        isValid: true
    },
    tourName: {
        value: '',
        isValid: true
    },
    venueName: {
        value: '',
        isValid: true
    },
    location: {
        value: '',
        isValid: true
    },
    concertDate: {
        value: '',
        isValid: true
    }
}

const formReducer = (state: FormState, action: FormAction) => {
    const {type, payload} = action;

    switch(type) {
        case FormActionKind.SET_VALUE:
            const fieldName = state[action.payload.field]
            return {
                ...state,
                fieldName: { value: payload.value, isValid: payload.isValid}
            };
            default:
                return state;
    }
}

enum FormActionKind {
    SET_VALUE = 'SET_VALUE',
    SET_VALIDITY = 'SET_VALIDITY'
}


interface FormAction {
    type: FormActionKind,
    payload: FormFieldPayload
}

interface FormFieldPayload {
    field: string,
    value: string,
    isValid: boolean
}


const AddShowForm = (): ReactElement => {

    // const [formState, dispatch] = useReducer(formReducer, defaultFormState);

    const [bandName, setBandName] = useState('');
    const [location, setLocation] = useState('');
    const [tourName, setTourName] = useState('');
    const [venueName, setVenueName] = useState('');
    const [concertDate, setConcertDate] = useState('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(bandName)
        console.log(concertDate)
        console.log(location)
        console.log(tourName)
        console.log(venueName)

        setBandName('');
        setConcertDate('');
        setTourName('');
        setVenueName('');
        setLocation('')
    };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        
        if(event.target.id === 'band-name-id') {
            console.log(event.target.value)
            setBandName(event.target.value);
        };
        if(event.target.id === 'location-id') {
            setLocation(event.target.value);
        };
        if(event.target.id === 'tour-name-id') {
            setTourName(event.target.value);
        };
        if(event.target.id === 'venue-name-id') {
            setVenueName(event.target.value);
        };
        if(event.target.id === 'date-id') {
            setConcertDate(event.target.value);
        };

        //call handler from props here
    };

    return (
        <div>
            <Card>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <BasicInput
                        input={{id: 'band-name-id',type: 'text',value: bandName, onChange: handleChange}}
                        label='Band Name'
                    />          
                    <BasicInput
                        input={{id: 'location-id',type: 'text', value: location, onChange: handleChange}}
                        label='City'
                    />          
                    <BasicInput
                        input={{id: 'tour-name-id',type: 'text',value: tourName, onChange: handleChange}}
                        label='Tour'
                    />
                    <BasicInput
                        input={{id: 'venue-name-id',type: 'text',value: venueName, onChange: handleChange}}
                        label='Venue'
                    />
                    <BasicInput
                        input={{id: 'date-id',type: 'text',value: concertDate, onChange: handleChange}}
                        label='Date'
                    />
                 <AddButton type="submit" text="Add Show" isDisabled={false}/>
                </form>
            </Card>
        </div>
    )
};

export default AddShowForm;

//button