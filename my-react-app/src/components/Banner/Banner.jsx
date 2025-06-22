import React from "react";
import "./Banner.css"
function Banner() {
   return( 
   <>
   <div className="banner-div">
    <div className="overlay">
        <h1 id="title">Welcome To Our Blogs </h1>

    </div>
    <img src="/media/Banner.jpg" alt="" width={'100%'} height={'550px'} style={{objectFit:'cover'}}/>
    </div>
    </>
    
   )
}

export default Banner;