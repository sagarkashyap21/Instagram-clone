import React from 'react'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="left">
                <p>Instagram</p>
                <p><i class=" fa fa-solid fa-chevron-down"></i></p>
            </div>
            <div className="right">
               <p> <i class="fa fa-regular fa-square-plus"></i></p>
                <p><img src="https://cdn-icons-png.flaticon.com/512/1532/1532430.png" alt="" /></p>
            </div>
        </div>
    )
}
