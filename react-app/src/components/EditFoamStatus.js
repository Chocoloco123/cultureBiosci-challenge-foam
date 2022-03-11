import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneImage, updateFoamStatus } from "../store/images";
import './EditFoamStatus.css'

const EditFoamStatus = ({props}) => {
  const { id } = useParams();
  
  const image = useSelector((state) => state?.images)
  
  const [foamStatus, setFoamStatus] = useState(image?.foamStatus ? image?.foamStatus : '');
  // const [lastModified, setLastModified] = useState(image?.lastModified ? image?.lastModified : '')
  

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneImage(+id))
  }, [dispatch, id])
  let currentDate = new Date().toUTCString();


  const handleSelect = async (e) => {
    e.preventDefault();
    

    const updatedImage = {
      foamStatus: foamStatus,
      lastModified: currentDate
    }

    const newImage = await dispatch(updateFoamStatus(updatedImage, id))

    if (newImage) {
      window.history.back();
      window.scrollTo(0,0)
    } else if (!history.back()) {
      history.push(`/images/1`);
    }
    
  }

  return (
    <div>
      <div>
        <h3>
          Image Id: {image?.id}
        </h3>
        <img src={image?.url} alt='reactor img' className="imageCard-img editFoam-Image"></img>
      </div>
      <p>Foam Status: {image?.foamStatus}</p>
      <form onSubmit={handleSelect}>
        <select onChange={(e) => setFoamStatus(e.target.value)}>
          <option selected="true" disabled>Select Status</option>
          <option value="Foam">Foam</option>
          <option value="No Foam">No Foam</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )

}

export default EditFoamStatus;