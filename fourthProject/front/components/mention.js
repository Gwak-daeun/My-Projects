import { Card, Empty, List, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
const { Meta } = Card;
import styled from 'styled-components';

const One = styled.div`
  .card1{
    width: 250px;
    height: 220px;
    float: 'left';
    margin-left: 17px;
    margin-top: 10px;
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


const Mention = () => {

  const {me} = useSelector((state) => state.user);

  const router = useRouter();
  const {id} = router.query;

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("멘션 me 확인: ", me);

  const referModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const IfRefer = () => {

    if(me.References.length !== 0){
        return(
          <One>
            {me.References[0] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{me.References[0].content === '' ? me.nickname+"의 리트윗" :  me.References[0].content}</li> : null}
            {me.References[1] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{me.References[1].content === '' ? me.nickname+"의 리트윗" :  me.References[1].content}</li> : null}
            {me.References[2] ? <li className='li1'><FontAwesomeIcon icon={faPenNib} className="icons" />{me.References[2].content === '' ? me.nickname+"의 리트윗" :  me.References[2].content}</li> : null}
          </One>
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
        <One>
            <Card
            title="I refered..."
            extra={<a onClick={referModal}>More</a>}
            className="card1"
            >
              <IfRefer />
            </Card>
            <Modal title={me.nickname + " 의 인용 목록"} footer={null} onCancel={handleCancel} open={isModalOpen} >
              

            <List
               grid={{
                gutter: 50,
                column: 3
            }}
              dataSource={me.References}
              renderItem={(item) => (
                <List.Item>
                    <Card
                    cover={<a href={`http://fashionary.site/post/${item.id}`} ><One><img className='img1' alt="example" src={item.referSrc} /></One></a>}
                    className='card2'
                    >
                      <Meta description={item.content} />
                    </Card>
                </List.Item>
            )}
            >
            </List>
            </Modal>
        </One>
    );
};

// {me.References.map((refer) => (
//   <ul key={refer.id}>
//     <p><FontAwesomeIcon icon={faPenNib} style={{fontSize: 20}} /> <img style={{width: 60}} src={`http://localhost:3065/${refer.referSrc}`}/> {refer.content}</p>
//   </ul>
// ))}

export default Mention;