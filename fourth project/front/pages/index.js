import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_CALENDAR_DATA_REQUEST } from '../reducers/user';
import Login from './login';
import Profile from './profile';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR from 'swr';
import DateCellRender from '../util/dateCellRender';
import AllPosts from './post/allPosts';

const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data);


const Home = () => {

    const dispatch = useDispatch();

    const {me} = useSelector((state) => state.user);
    const {mainPosts} = useSelector((state) => state.post);

 //  const {data, error} = useSWR(`http://localhost:3065/posts/${me.id}/allLooks`, fetcher);

    console.log("인덱스 데이터", me);
   console.log("인덱스 mainposts: ", mainPosts);

  //  console.log(":::::::me:::::" + JSON.stringify(me));
  //  console.log("post:::::" + JSON.stringify(mainPosts));

    // if(error){
    //     console.error(error);
    //     return window.alert('게시글 로딩 중 에러 발생');
    // }

return (
    <AppLayout>
        {me ? <Profile /> : <Login /> }
        {/* {mainPosts.map((post) => <AllPosts key={post.id} post={post} />)} */}
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
        // context.store.dispatch({
        //     type: LOAD_POSTS_REQUEST,
        // });
        // context.store.dispatch({
        //     type: LOAD_USER_CALENDAR_DATA_REQUEST,
        // });

        
       context.store.dispatch(END);
       await context.store.sagaTask.toPromise();
    });
    

export default Home;