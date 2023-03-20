import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Avatar, Card, Empty, List, Modal } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Item = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  .li1{
    margin-bottom: 20px;
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

    if(me.Followers.length !== 0){
      return(
        <OneFollwer>
          {me.Followers[0] ?  <li className='li1'><FontAwesomeIcon icon={faSquare} className="icons" /> {me.Followers[0].nickname}</li>  : null  }
          {me.Followers[1] ?  <li className='li1'><FontAwesomeIcon icon={faSquare} className="icons" /> {me.Followers[1].nickname}</li>  : null  }
          {me.Followers[2] ?  <li className='li1'><FontAwesomeIcon icon={faSquare} className="icons" /> {me.Followers[2].nickname}</li>  : null  }

        </OneFollwer>
      ); 
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
                  <Item>
                    <a href={`http://fashionary.site/user/${items.id}`} >
                    <Avatar size={100} src={items.Image.src === originalImage ? originalImage : items.Image.src} />
                  </a>
                  <a href={`http://fashionary.site/user/${items.id}`} >{items.nickname}</a>
                  </Item>
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