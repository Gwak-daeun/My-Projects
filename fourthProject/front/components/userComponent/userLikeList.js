import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Card, Empty, List, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const OneUserLikeList = styled.div`
  .icons{
    font-size:15px;
  }
  .card1{
    width: 250px; 
    height: 240px;
    margin-top: 40px;
    margin-left: 18px;
  }
  .img1{
    width: 100%;
  }
`;

const UserLikeList = () => {

  const {userInfo} = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("인용리스트", userInfo);

  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfLike = () => {

      if(userInfo.Liked[0] !== undefined){
        return <li><FontAwesomeIcon icon={faHeart} className='icons' /> {userInfo.Liked[0].lookName}</li>;
      }
      if(userInfo.Liked[1] !== undefined){
        return <li><FontAwesomeIcon icon={faHeart} className='icons' />{userInfo.Liked[1].lookName}</li>;
      }
      if(userInfo.Liked[2] !== undefined){
        return <li><FontAwesomeIcon icon={faHeart} className='icons' />{userInfo.Liked[2].lookName}</li>;
      }
      else{
        return  <div>
                  <Empty
                  description={
                    <span>
                      좋아요를 한 Look이 없어요.
                    </span>
                  } 
                  />
                </div>;
      }
  
  };


    return(
        <div className="site-card-border-less-wrapper">
          <OneUserLikeList>
            <Card
              title="I like this!"
              className='card1'
              extra={<a onClick={referModal}>More</a>}
            >
              <IfLike />
            </Card>
            <Modal title={userInfo.nickname + " 의 좋아요 목록"} footer={null} onCancel={handleCancel} open={isModalOpen}>
            <List
               grid={{
                gutter: 50,
                column: 3
            }}
              dataSource={userInfo.Liked}
              renderItem={(item) => (
                <List.Item>
                    <Card 
                    title={<a href={`http://fashionary.site/post/${item.id}`} >{item.lookName}</a>}
                    cover={<a href={`http://fashionary.site/post/${item.id}`} ><OneUserLikeList><img className='img1' alt="example" src={item.Images[0].src} /></OneUserLikeList></a>}
                    className='card2'
                    >
                    </Card>
                </List.Item>
            )}
            >
                
            </List>

            </Modal>
        </OneUserLikeList>
      </div>
    );

};

export default UserLikeList;