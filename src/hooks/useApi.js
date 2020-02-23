import React, {useState, useEffect} from 'react';
import Api from '../services/Api';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const get = async (path, parameters) => {
        try {
            const response = await Api.get(path, {
                params: {
                    ...parameters
                }
                }
            );
            setResults(response.data);
        } catch (e) {
            setError(e);
        }
    };
    return [get, results, error];
};
