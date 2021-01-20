import {useEffect, useState} from "react";

export const useStateByLocalStorage = (key) => {
        const [value, setValue] = useState(localStorage.getItem(key) || '');
        useEffect(() => {
            localStorage.setItem(key, value);
        }, [value, key]);

        return [value, setValue];
    }

export const getItem = (key) => localStorage.getItem(key) || 'Unknown';
