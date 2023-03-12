import {useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { NEWLOOK_KEYWORD_REQUEST } from '../reducers/post';



export default (initialValue = null) => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        const worth = e.target.value;
        setValue(worth);
        dispatch({
            type: NEWLOOK_KEYWORD_REQUEST,
            data: worth
        });
    }, [dispatch]);

    return [value, handler, setValue];
};