import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import {updateFName} from './redux/slice';
import {updateLName} from './redux/slice';
import {updateImage} from './redux/slice';
function Content(){
   const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");
    const[image,setimage]=useState();
    const dispatch=useDispatch();
    const onSubmitData=(event)=>{
        dispatch(updateFName({fname}));
        dispatch(updateLName({lname}));
        dispatch(updateImage({image}));
    }
    return (
    <div className="content">
          <label>First name</label>
         <input type="text" placeholder="Type here..." onChange={(event)=>setfname(event.target.value)}/>
         <label>Last name</label>
         <input type="text" placeholder="Type here..." onChange={(event)=>setlname(event.target.value)}/>
          <input type="submit" onClick={onSubmitData}/>
          <input type="file" onChange={(event)=>setimage(event.target.value)}></input>
          
          <input type="submit" onClick={onSubmitData}/>

          </div>
    );
  }

 
export default Content