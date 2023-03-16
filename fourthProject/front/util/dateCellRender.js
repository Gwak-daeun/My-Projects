import React, { createElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { LOAD_USER_CALENDAR_DATA_REQUEST } from "../reducers/user";
import styled from "styled-components";

const ImageTag = styled.img`
   width: 60px;
   text-align: center;
`;

const DateCellRender = (value) => {

   const dispatch = useDispatch();

   const {userCalendarData, me} = useSelector((state) => state.user);

   useEffect(() => {
      dispatch({
         type: LOAD_USER_CALENDAR_DATA_REQUEST,
         data: me.id
      });
   }, []);

   const getDayInfo = () => {
      const calendarData = [];
      let diaryMoment;

      for( let i = 0; i < userCalendarData.length; i++ ){
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
            <div >
            <a href={`http://fashionary.site/post/${postId}`} >
                <ImageTag src={photo} />
            </a>
            </div>
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
          <NameRander date={info.createdAt}  name={info.title} /> 
         <PhotoRander postId={info.id} date={info.createdAt} photo={info.photo} />
         </div>

      
   ))}
  </div>
 );
};

export default DateCellRender;