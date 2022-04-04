import React, { useState, Fragment, useEffect } from 'react';

import axios from 'axios';



const JoinScreen = ({ className, title, subTitle, fluid }) => {
    


              useEffect(() => {
                document.body.style.setProperty('--primary', '#10266b')
                document.body.style.setProperty('--secondary', '#464545')
                document.body.style.setProperty('--light', '#1F357D')
                document.body.style.setProperty('--dark', '#04185B')
                document.getElementById("showskill").src =
                "http://localhost:3001/react-rtc-demo?streamerName="+JSON.parse(localStorage.getItem('user')).firstName+" "+
                JSON.parse(localStorage.getItem('user')).lastName;
                
              }
             )

return (
    
    <iframe id='showskill' height="720" width="1400" title="Iframe Example" allow="camera; microphone;display-capture;autoplay; clipboard-write;"></iframe>
      
);

};

export default JoinScreen;