import React, { useState } from 'react'
import Sdata from "./Sdata"
// import {Link} from "react-router-dom"


export default function Post() {
    const [data, setdata] = useState(Sdata)
    // console.log(data);

const Like=(e)=>{
    // lete.targete=document.getElementById("likebtn");
if(e.target.className==="fa fa-regular fa-heart")
{
    return(
        e.target.className="fa fa-solid fa-heart"
    )

}
   else if( e.target.className==="fa fa-solid fa-heart"){
        return(
            e.target.className="fa fa-regular fa-heart"

        )
}


    // e.target.className="fa-solid fa-heart"
// console.log(e.target.className)

}
const Bookmark=(e)=>{
    // let bookmark=document.getElementById("bookmarkbtn");
if(e.target.className==="fa fa-regular fa-bookmark")
{
    return(
        e.target.className="fa fa-solid fa-bookmark"
    )

}
   else if( e.target.className==="fa fa-solid fa-bookmark"){
        return(
            e.target.className="fa fa-regular fa-bookmark"

        )
}
}

    return (
        <>

      
      {
          data.map((val)=>{
              return(
<div style={{ border: "" }} className="post">
                <div className="first">
                    <div className="statusbar">
                        <div>
                            <img src={val.imgsrc} alt="" />
                        </div>
                        <p>{val.title}</p>
                    </div>
                    <div className="" >
                        <i  class=" fa fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="second">
                    <img src={val.imgsrc} alt="" />
                </div>
                <div className="third">
                    <ul>
                        <li><i onClick={Like}  id="likebtn" class="fa fa-regular fa-heart"></i></li>
                        <li><img  src="https://icons.veryicon.com/png/o/miscellaneous/2px-common-icons/message-63.png" alt="" /></li>
                        <li><img  src="https://cdn-icons-png.flaticon.com/512/5883/5883507.png" alt="" /></li>
                    </ul>
                    <div><i onClick={Bookmark} id="bookmarkbtn"  class="fa fa-regular fa-bookmark"></i></div>
                </div>
                <div className="fourth">
                    <ul>
                        <li>Liked by <strong>{val.title}</strong>  and <b>others</b> </li>
                        <li>View all {val.comment} comments</li>
                        <li>{val.time}</li>

                    </ul>
                </div>
            </div>
              )
          })
      }
            
        </>
    )
}
