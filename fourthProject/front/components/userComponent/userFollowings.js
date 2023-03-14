import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Card, Empty, List, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { backUrl } from '../../config/config';

const OneUserFollowing = styled.div`
  .icons{
    font-size:15px;
  }
  .card1{
    width: 360px;
    margin-left: 30px;
     height: 215px;
  }
  .img1{
    width: 100%;
  }
  .card2{
    width: 110px;
  }
  .a1{
    margin-left: 30px;
  }
`;

const UserFollowings = () => {

  const {userInfo} = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfFollowing = () => {

    if(userInfo.Followings[0] !== undefined){
      return <li><FontAwesomeIcon icon={faSquare} className="icons" /> {userInfo.Followings[0].nickname}</li>;
    }
    if(userInfo.Followings[1] !== undefined){
      return <li><FontAwesomeIcon icon={faSquare} className="icons" />{userInfo.Followings[1].nickname}</li>;
    }
    if(userInfo.Followings[2] !== undefined){
      return <li><FontAwesomeIcon icon={faSquare} className="icons" />{userInfo.Followings[2].nickname}</li>;
    }
    else{
      return  <div>
                <Empty 
                description={
                  <span>
                    아직 팔로잉이 없어요.
                  </span>
                } 
                />
              </div>;
    }

};

const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;

    return(
        <div className="site-card-border-less-wrapper">
          <OneUserFollowing>
        <Card
          title="Followings"
          className='card1'
          extra={<a onClick={referModal}>More</a>}
        >
          <IfFollowing />

    </Card>
    <Modal title={userInfo.nickname + " 의 팔로잉 목록"} footer={null} onCancel={handleCancel} open={isModalOpen}>
          
            <List
               grid={{
                gutter: 50,
                column: 3
            }}
              dataSource={userInfo.Followings}
              renderItem={(items) => (
                <List.Item>
                  <OneUserFollowing>
                    <a href={`http://localhost:3000/user/${items.id}`} >
                    <Avatar size={100} src={items.Image.src === originalImage ? originalImage : `${backUrl}/${items.Image.src}`} />
                  </a>
                  <a className='a1' href={`http://localhost:3000/user/${items.id}`} >{items.nickname}</a>
                  </OneUserFollowing>
                </List.Item>
            )}
            >
                
            </List>

        </Modal>
        </OneUserFollowing>
      </div>
    );

};

export default UserFollowings;