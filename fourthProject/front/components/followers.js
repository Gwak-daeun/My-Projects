import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Avatar, Card, Empty, List, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { backUrl } from '../config/config';

const Li = styled.li`
  .ficon{
    font-size: 15px;
  }
`;

const OneFollwer = styled.div`
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

const Followers = () => {

  const {me} = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfFollower = () => {

      if(me.Followers[0] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' /> {me.Followers[0].nickname}</Li>;
      }
      if(me.Followers[1] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' />{me.Followers[1].nickname}</Li>;
      }
      if(me.Followers[2] !== undefined){
        return <Li><FontAwesomeIcon icon={faSquare} className='ficon' />{me.Followers[2].nickname}</Li>;
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
        <OneFollwer>
        <Card
          title="Followers"
          extra={<a onClick={referModal}>More</a>}
          className="card1"
        >
          <IfFollower />
        
        </Card>
        
        
        <Modal title={me.nickname + " 의 팔로워 목록"} footer={null} onCancel={handleCancel} open={isModalOpen}>
         

            <List
               grid={{
                gutter: 50,
                column: 3
              }}
              dataSource={me.Followers}
              renderItem={(items) => (
                <List.Item>
                  <OneFollwer>
                    <a href={`http://localhost:3000/user/${items.id}`} >
                    <Avatar size={100} src={items.Image.src === originalImage ? originalImage : items.Image.src} />
                  </a>
                  <a className='a1' href={`http://localhost:3000/user/${items.id}`} >{items.nickname}</a>
                  </OneFollwer>
                </List.Item>
            )}
            >
          </List> 
        </Modal>
        </OneFollwer>
      </div>
    );

};

export default Followers;