import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import AppLayout from "../../components/AppLayout";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import wrapper from '../../store/configureStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import Meta from "antd/lib/card/Meta";
import { Card, List } from "antd";

const OneHashtag = styled.div`

.h1{
  text-align: center;
}
.card1{
  width: 170px;
}
.img1{
  height: 250px;
  width: 100%;
}

`;

const Hashtag = () => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {tag} = router.query;
    const { mainPosts, hasMorePosts, loadHashtagPostsLoading } = useSelector((state) => state.post);
    
    useEffect(() => {
      
        const onScroll = () => {
          if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
            if (hasMorePosts && !loadHashtagPostsLoading) {
              dispatch({
                type: LOAD_HASHTAG_POSTS_REQUEST,
                lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
                data: tag,
              });
            }
          }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, [mainPosts.length, hasMorePosts, tag]);

      console.log("해시태그 메인포스트: ", mainPosts);

return(
    <AppLayout>
      <OneHashtag>
      <h1 className="h1"><FontAwesomeIcon icon={faMagnifyingGlass} /> Look with "#{tag}" </h1>
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
                        title={<a href={`http://fashionary.site/${items.id}`} >{items.lookName}</a>}
                        
                        cover={<a href={`http://fashionary.site/${items.id}`} ><img className="img1"alt="example" src={items.Images[0]?.src} /></a>}
                        >
                            <Meta description={'#' + items.Hashtags[0].name + " 가 포함된 Look"} />
                        </Card>
                    </List.Item>
                )}
          />
      </OneHashtag>
    </AppLayout>
);
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log(context);
    const cookie = context.req ? context.req.headers.cookie : '';
    console.log(context);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  });


export default Hashtag;