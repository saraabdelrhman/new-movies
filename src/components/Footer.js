import React from "react";
import '../styles.css';
export default function Footer(){
const time=new Date().getFullYear();

    return(
        <footer className="footer">
<p className="movie-text">
® {time} movieducks , All rights reserved 
</p>
        </footer>
    );

}