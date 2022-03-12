import React from 'react';
import { NavLink } from 'react-router-dom';
import foam from '../Media/imageFoaming.png';
import noFoam from '../Media/imageNotFoaming.png';
import './mainPage.css'

function MainPage() {

  return(
    <div>
      <h3>Built by Caroline Sarkki</h3>
      <p>Welcome to the foam selector! This application will be used to determine whether or not the reactor is foaming. On the following page, you'll be able to tag images based on their foam status.</p> 
      
          {/* <p>Please view the images below and categorize foam presence.</p> */}
      <p>Below are some examples of reactor images:</p>    
      <div className='mainImages-div-container'>
        <div>
          <h3 className='foamTitleHeading-Main'>Not Foaming</h3>
          <img src={noFoam} alt='no foam' className='foamImage-Main'></img>
        </div>
        <div>
          <h3 className='foamTitleHeading-Main'>Foaming</h3>
          <img src={foam} alt='foam' className='foamImage-Main'></img>
        </div>
      </div>
      <p>Please select the Start button below to begin.</p>
      <NavLink to={`/images/all/1`} exact={true} className='startButton-Main Category-NavLink'>Start</NavLink>
    </div>
  )
}

export default MainPage;