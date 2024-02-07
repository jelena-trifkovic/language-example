import React, {useContext} from 'react';
import {FormControl, InputLabel, MenuItem, Select,} from '@mui/material';
import {LanguageContext} from "./LanguageProvider";

const LanguageSelection: React.FC = () => {
    const { locale, setLocale } = useContext(LanguageContext);

    const handleLanguageChange = (event: any) => {
        const language = event.target.value as any;
        setLocale(language);
    };

    return (
        <FormControl>
            <InputLabel id="language-select-label">Select Language</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select"
                value={locale}
                label="Select Language"
                onChange={handleLanguageChange}
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                {/* Add more languages as needed */}
            </Select>
        </FormControl>
    );
};

export default LanguageSelection;
