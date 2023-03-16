import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { LOAD_USER_CALENDAR_DATA_REQUEST } from "../../reducers/user";
import { useRouter } from "next/router";
import styled from "styled-components";

const OneImage = styled.div`

   .img1{
      width: 60px;
   }

`;

const UserDateCellRender = (value) => {

   const dispatch = useDispatch();

   const router = useRouter();
   const { id } = router.query;

   const {userCalendarData, userInfo} = useSelector((state) => state.user);

   useEffect(() => {
      dispatch({
         type: LOAD_USER_CALENDAR_DATA_REQUEST,
         data: userInfo.id
      });
   }, []);

   const getDayInfo = () => {
      const calendarData = [];
      let diaryMoment;

      for( let i = 0; i < userCalendarData.length; i++ ){
         // console.log("생성 날짜",  moment(userCalendarData[i].createdAt).format("YYYY-MM-DD"));
         diaryMoment = moment(userCalendarData[i].createdAt).format("YYYY-MM-DD");


         if(diaryMoment){
            calendarData.push( {
               photo: userCalendarData[i].Images[0].src,
               title: userCalendarData[i].lookName,
               date: diaryMoment,
               createdAt: userCalendarData[i].createdAt,
               id: userCalendarData[i].id
            });
         }
      }

      return calendarData || [];
   };

   const PhotoRander = ({date, photo, postId}) => {

   
      switch(moment(value).format("YY-MM-DD")){
         case moment(date).format("YY-MM-DD"):  
         return (
            <a href={`http://fashionary.site/post/${postId}`} >
               <OneImage><img className="img1" src={photo} /></OneImage> 
            </a>
         );
         default:
         return(
            <div></div>
         );   
      }
   };

   const NameRander = ({date, name}) => {

      switch(moment(value).format("YY-MM-DD")){
         case moment(date).format("YY-MM-DD") : 
         return(
            <h5>{name}</h5>
         );
         default:
         return(
            <div></div>
         );   
      }

   };

   const dayInfo = getDayInfo();

 return(
  <div>
   {dayInfo.map((info) => (

         <div key={info.id} >
            {/* <LookRander date={info.date} photo={info.photo} title={info.title} />  */}
              {/* <h5>{info.title}</h5>
            <Link href="#">
         <img style={{width: 50}} src={`http://localhost:3065/${info.photo}`} />
         </Link> */}
          <NameRander date={info.createdAt}  name={info.title} /> 
         <PhotoRander postId={info.id} date={info.createdAt} photo={info.photo} />
         </div>

      
   ))}
  </div>
 );
};



export default UserDateCellRender;