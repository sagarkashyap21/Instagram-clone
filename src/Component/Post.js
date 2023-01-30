import React, { useState } from 'react'
import Sdata from "./Sdata"


export default function Post() {
    const [data, setdata] = useState(Sdata)
    console.log(data);
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
                        <li><i class="fa fa-regular fa-heart"></i></li>
                        <li><img src="https://icons.veryicon.com/png/o/miscellaneous/2px-common-icons/message-63.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/5883/5883507.png" alt="" /></li>
                    </ul>
                    <div><i class="fa fa-regular fa-bookmark"></i></div>
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
