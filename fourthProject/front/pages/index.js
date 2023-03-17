import React from 'react';
import {  useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import Login from './login';
import Profile from './profile';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

const Home = () => {

    const {me} = useSelector((state) => state.user);

return (
    <AppLayout>
        {me ? <Profile /> : <Login /> }
    </AppLayout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(async(context) => { 
    
        const cookie = context.req ? context.req.headers.cookie : '';
        axios.defaults.headers.Cookie = ''; 
        if(context.req && cookie){ 
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch({
            type: LOAD_MY_INFO_REQUEST
        });
       context.store.dispatch(END);
       await context.store.sagaTask.toPromise();
    });
    

export default Home;