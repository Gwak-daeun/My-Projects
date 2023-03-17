import { Card, Empty, List, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
const { Meta } = Card;
import styled from 'styled-components';

const OneUserMention = styled.div`
  .card1{
    width: 250px;
    height: 220px;
    float: 'left';
    margin-left: 17px;
    margin-top: 36px;
  }
  .icons{
    font-size: 15px;
  }
  .img1{
    width: 100%;
  }
  .card2{
    width: 110px;
  }
  .li1{
    margin-bottom: 20px;
  }
`;


const UserMention = () => {

  const {userInfo} = useSelector((state) => state.user);

  const router = useRouter();
  const {id} = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfRefer = () => {

    if(userInfo.References.length !== 0){
      return(
        <OneUserMention>
          {userInfo.References[0] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{userInfo.References[0].content === '' ? userInfo.nickname+"의 리트윗" :  userInfo.References[0].content}</li> : null}
          {userInfo.References[1] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{userInfo.References[1].content === '' ? userInfo.nickname+"의 리트윗" :  userInfo.References[1].content}</li> : null}
          {userInfo.References[2] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{userInfo.References[2].content === '' ? userInfo.nickname+"의 리트윗" :  userInfo.References[2].content}</li> : null}
        </OneUserMention>
      ); 
    }
    else{
      return  <div>
                <Empty
                description={
                  <span>
                    아직 인용이 없어요.
                  </span>
                } 
                />
              </div>;
    }
  };

    return(
        <OneUserMention>
            <Card
            title="I refered..."
            extra={<a onClick={referModal}>More</a>}
            className="card1"
            >
              <IfRefer />
            </Card>
            <Modal title={userInfo.nickname + " 의 인용 목록"} footer={null} onCancel={handleCancel} open={isModalOpen} >
              

            <List
               grid={{
                gutter: 50,
                column: 3
            }}
              dataSource={userInfo.References}
              renderItem={(item) => (
                <List.Item>
                    <Card
                    cover={<a href={`http://fashionary.site/post/${item.id}`} ><OneUserMention><img className='img1' alt="example" src={item.referSrc} /></OneUserMention></a>}
                    className='card2'
                    >
                      <Meta description={item.content} />
                    </Card>
                </List.Item>
            )}
            >
            </List>
            </Modal>
        </OneUserMention>
    );
};


export default UserMention;