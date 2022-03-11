import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneImage, updateFoamStatus } from "../store/images";

const EditFoamStatus = ({props}) => {
  const { id } = useParams();
  console.log('id hereeeeee: ',id)
  const image = useSelector((state) => state?.images)
  console.log('this is image ',image);
  // let theImgObj; // if image.id === id ... 
  // for (const key in image) {
  //   console.log(typeof key, typeof id)
  //   console.log('imaage at key',image[key])
  //   if (key === id) theImgObj = image[key]
  //   console.log('inside the img obj: ',theImgObj)
  // }
  // console.log('this is theImgObj: ',theImgObj, 'hello')
  const [foamStatus, setFoamStatus] = useState(image?.foamStatus ? image?.foamStatus : '');
  const [lastModified, setLastModified] = useState(image?.lastModified ? image?.lastModified : '')
  

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneImage(+id))
  }, [dispatch, id])
  let currentDate = new Date().toUTCString();

  // useEffect(() => {
  //   dispatch(updateFoamStatus(image, +id));
  //   setFoamStatus(image.foamStatus)
  //   setLastModified(currentDate)
  
  // }, [dispatch, image, id, image.foamStatus, currentDate])
// ! This may be the problem
  // useEffect(() => {
  //   setFoamStatus(image.foamStatus)
  //   setLastModified(currentDate)
  
  // }, [dispatch, image, image.foamStatus, currentDate])
  


  const handleSelect = async (e) => {
    e.preventDefault();
    

    const updatedImage = {
      foamStatus: foamStatus,
      lastModified: currentDate
    }
    // console.log('updatedImage: ',updatedImage)
    const newImage = await dispatch(updateFoamStatus(updatedImage, id))

    if (newImage) {
      window.history.back();
      window.scrollTo(0,0)
    } else if (!history.back()) {
      history.push(`/images/1`);
    }
    // if (newImage) {
    //   history.push(`/images/all/1`)
    // }
    
  }

  const handleCancel = async(e) => {
    window.history.back();
  }

  return (
    <div>
      <div>
        <h3>
          Image Id: {image?.id}
        </h3>
        <img src={image?.url} alt='reactor img' className="imageCard-img"></img>
      </div>
      <p>Foam Status: {image?.foamStatus}</p>
      <form onSubmit={handleSelect}>
        {/* <select required value={foamStatus} onChange={(e) => setFoamStatus(e.target.value)}> */}
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