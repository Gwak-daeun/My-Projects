import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Avatar, Card, Empty, List, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Li = styled.li`
  .fIcon{
    font-size: 15px;
  }
`;

const OneUserFollower = styled.div`
  .card1{
    width: 360px;
    height: 215px;
  }
  .card2{
    width: 110px;
  }
  .img1{
    width: 100%;
  }
  .a1{
    margin-left: 30px;
  }
`;

const UserFollowers = () => {

  const {userInfo} = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfFollower = () => {

      if(userInfo.Followers[0] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' /> {userInfo.Followers[0].nickname}</Li>;
      }
      if(userInfo.Followers[1] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' />{userInfo.Followers[1].nickname}</Li>;
      }
      if(userInfo.Followers[2] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' />{userInfo.Followers[2].nickname}</Li>;
      }
      else{
        return  <div>
                    <Empty 
                    description={
                      <span>
                        아직 팔로워가 없어요.
                      </span>
                    } 
                    />
                </div>;
      }

  };

  const originalImage = `https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg`;

    return(
      <div>
        <OneUserFollower>
        <Card
          title="Followers"
          extra={<a onClick={referModal}>More</a>}
          className="card1"
        >
          <IfFollower />
        
        </Card>
        
        
        <Modal title={userInfo.nickname + " 의 팔로워 목록"} footer={null} onCancel={handleCancel} open={isModalOpen}>
         

            <List
               grid={{
                gutter: 50,
                column: 3
              }}
              dataSource={userInfo.Followers}
              renderItem={(items) => (
                <List.Item>
                  <OneUserFollower>
                    {/* <Card
                    className='card2'
                    title={<a href={`http://localhost:3000/post/${item.id}`} >{item.nickname}</a>}
                    cover={<a href={`http://localhost:3000/post/${item.id}`} ><OneUserFollower><img className='img1'alt="example" src={item.Image.src === originalImage ? originalImage : `http://localhost:3065/${item.Image.src}`} /></OneUserFollower></a>}
                    >
                    </Card> */}
                    <a href={`http://localhost:3000/user/${items.id}`} >
                    <Avatar size={100} src={items.Image.src === originalImage ? originalImage : items.Image.src} />
                    </a>
                  <a className='a1' href={`http://localhost:3000/user/${items.id}`} >{items.nickname}</a>
                  </OneUserFollower>
                </List.Item>
            )}
            >
          </List> 
        </Modal>
        </OneUserFollower>
      </div>
    );

};

export default UserFollowers;