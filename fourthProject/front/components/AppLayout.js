import React, { useCallback, useState } from "react";
import {Input, Menu, Row, Col, Button, Tooltip, AutoComplete, Descriptions} from 'antd';
import Link from 'next/link';
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import { SEARCH_KEYWORD_REQUEST } from "../reducers/post";
import { Footer } from "antd/lib/layout/layout";


const AppLayout = ({children}) => {

    const dispatch = useDispatch();

    const {me, logOutLoading} = useSelector((state) => state.user);

    const {keywords} = useSelector((state) => state.post);

    const resultWords = keywords?.map(items => ({value: items.name}));

    const [searchInput, setSearchInput] = useState('');

    console.log(resultWords);

    const onChangeSearchInput = useCallback((e) => {
        const value = e.target.value;
        setSearchInput(value);
        dispatch({
            type: SEARCH_KEYWORD_REQUEST,
            data: value
        });
    }, [dispatch]);

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`);
      }, [searchInput]);

    const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
    Router.replace(`/`);
    }, []);

    const handleSelect = (value) => {
        setSearchInput(value);
      };

    return(
        <div >
               <Menu id="menu1" mode='horizontal'>    
               
                <Menu.Item >
                <Link prefetch={false} href="/"><h1 className="item1" >FASHIONARY</h1></Link>
                </Menu.Item>
                <Menu.Item>
                <Link prefetch={false} href="/profile"><h3 className="item1" >My Profile</h3></Link>
                </Menu.Item >
                <Menu.Item>
                <Link prefetch={false} href="/post/allPosts"><h3 className="item1" >All Looks</h3></Link>
                </Menu.Item> 
                <Menu.Item className="item2">
                    <Tooltip title='찾고 싶은 브랜드를 검색해보세요.'>
                        <AutoComplete 
                            dropdownMatchSelectWidth={200}
                            options={resultWords}
                            id='layout'
                            onSelect={handleSelect}
                        >
                            <Input.Search 
                            id='layout'
                            className="search1"
                            value={searchInput}
                            onChange={onChangeSearchInput}
                            onSearch={onSearch}
                            />
                        </AutoComplete>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item>
                <h4 className="item1">{ me ? "현재 로그인 계정: " + me.nickname : null}</h4>
                </Menu.Item>
                { me 
                ? 
                <Menu.Item>
                    <Button className="button1" onClick={onLogOut} loading={logOutLoading} >로그아웃</Button>
                </Menu.Item>
                :
                null
            
                }
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                </Col>
                <Col xs={24} md={12}>{children}</Col>
            </Row>
            <Footer
            className="footer"
            >
                <Descriptions title="Info">
                    <Descriptions.Item label="개발자">곽다은</Descriptions.Item>
                    <Descriptions.Item label="연락처">010 - 3384 - 2874</Descriptions.Item>
                    <Descriptions.Item label="Git-Hub"><a target='_blank' href="https://github.com/Gwak-daeun/fashionary.git">Source code</a></Descriptions.Item>
                    <Descriptions.Item label="이력서"><a target='_blank' href="https://knowing-yogurt-cd2.notion.site/3dbeb300ba74486689474100d5c98971">개발자의 Notion</a></Descriptions.Item>
                </Descriptions>
            </Footer>
        </div>
    );

};

export default AppLayout;