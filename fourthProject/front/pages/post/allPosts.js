import { Card, List } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import { LOAD_POSTS_REQUEST } from "../../reducers/post";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import Router from "next/dist/next-server/server/router";

const OneAllPosts = styled.div`

    .card1{
        width: 170px;
    }

    .img1{
        height: 250px;
        width: 100%;
    }

`;

const AllPosts = () => {

    const dispatch = useDispatch();
    const {me} = useSelector((state) => state.user);

    const {mainPosts, hasMorePosts, loadPostsLoading, retweetError} = useSelector((state) => state.post);

    useEffect(() => {
        if(!(me && me.id)) {
            alert("로그인 후 이용 가능합니다.");
            Router.push('/');
        }
        function onScroll(){
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if(hasMorePosts && !loadPostsLoading){
                    const lastId = mainPosts[mainPosts.length -1]?.id;
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return() => {
            window.removeEventListener('scroll', onScroll);
        };
    },[mainPosts, hasMorePosts, loadPostsLoading, me && me.id]);

    console.log("메인포스트: ", mainPosts);

            return(
                <AppLayout>
                <OneAllPosts>
                <List 
                grid={{
                    gutter: 50,
                    column: 4
                }}
                dataSource={mainPosts}
                renderItem={(items) => (
                    <List.Item>
                        <Card 
                        className="card1"
                        title={<a href={`http://fashionary.site/post/${items.id}`} >{items.lookName}</a>}
                        
                        cover={<a href={`http://fashionary.site/post/${items.id}`} ><img className="img1" alt="example" src={items?.Images[0]?.src} /></a>}
                        >
                        </Card>
                    </List.Item>
                )}
                />
                </OneAllPosts>
                </AppLayout>
            );

};

export const getServerSideProps = wrapper.getServerSideProps(async(context) => { 
    
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = ''; 
    if(context.req && cookie){ 
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });

   context.store.dispatch(END);
   await context.store.sagaTask.toPromise();
});

export default AllPosts;