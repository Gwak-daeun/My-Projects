import axios from 'axios';
import React, { useEffect, useState } from 'react';



function PartyCategory({item}) {

    const [partyName, setPartyName] = useState({});

    useEffect(()=>{
        const url =`http://localhost:3005/PartyCategories/${item}`
        axios.get(url)
            .then(Response=>{
            setPartyName(Response.data) 
            
        })
    },[item])


    return ( 
        <>
        
        <h5>{partyName.categoryName}</h5>
        </>
    )
    }


export default PartyCategory;