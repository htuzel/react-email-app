import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/me')
        .then(res => dispatch({ type: FETCH_USER, payload: res}));
    }
};