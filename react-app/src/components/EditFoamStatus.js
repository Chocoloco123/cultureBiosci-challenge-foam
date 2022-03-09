import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneImage, updateFoamStatus } from "../store/images";

const EditFoamStatus = ({props}) => {
  const { id } = useParams();
  console.log('id hereeeeee: ',id)
  const image = useSelector((state) => state?.images)
  console.log('this is images: ',image);
  let theImgObj = '';
  for (const key in image) {
    console.log(typeof key, typeof id)
    if (key === id) theImgObj = image[key]
  }
  console.log('this is theImgObj: ',theImgObj, 'hello')
  const [foamStatus, setFoamStatus] = useState(theImgObj?.foamStatus ? theImgObj?.foamStatus : '');
  

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneImage(+id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(updateFoamStatus(theImgObj, +id));
  }, [dispatch, theImgObj, id])


  const handleSelect = async (e) => {
    e.preventDefault();

    const updatedImage = {
      foamStatus,
    }

    const newImage = await dispatch(updateFoamStatus(updatedImage, id))

    if (newImage) {
      window.history.back();
    } else if (!history.back()) {
      history.push(`/images/1`)
    }
    
  }

  return (
    <div>
      <div>
        <h3>
          Image Id:{image.id}
        </h3>
        <img src={image?.url} alt='reactor img' className="imageCard-img"></img>
      </div>
      <form onSubmit={handleSelect}>
        <select required value={foamStatus} onChange={(e) => setFoamStatus(e.target.value)}>
          <option value="Uncategorized">Select Status</option>
          <option value="Foam">Foam</option>
          <option value="No Foam">No Foam</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )

}

export default EditFoamStatus;