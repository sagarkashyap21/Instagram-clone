import React, { useState } from 'react'
import Sdata from "./Sdata"

export default function Status() {
    const [data, setdata] = useState(Sdata)
    // console.log(data[0].title)

    return (



        <div className="status">

            {
                data.map((val)=>{
                    return(
                        <div className="statusbar">
                <div>
                    <img src={val.imgsrc} alt="" />
                </div>
                <p>{val.title}</p>
            </div>

                    )
                })
            }
            
            

        </div >



    )
}
