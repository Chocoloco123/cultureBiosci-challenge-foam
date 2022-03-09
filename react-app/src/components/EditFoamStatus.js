import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneImage, updateFoamStatus } from "../store/images";

const EditFoamStatus = ({props}) => {
  const { id } = useParams();
  console.log('id hereeeeee: ',id)
  const images = useSelector((state) => state?.images)
  console.log(images);
  let theImgObj = '';
  for (const key in images) {
    console.log(typeof key, typeof id)
    if (key == id) theImgObj = images[key]
  }
  console.log(theImgObj)
  const [foamStatus, setFoamStatus] = useState(theImgObj?.foamStatus ? theImgObj?.foamStatus : '');

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneImage(+id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(EditFoamStatus(theImgObj, +id));
  }, [dispatch, theImgObj, id])


  const handleSelect = async (e) => {
    e.preventDefault();

    const updatedImage = {
      foamStatus,
    }

    const newImage = await dispatch(updateFoamStatus(updatedImage, id))

    if (newImage) {
      history.back()
    } else if (!history.back()) {
      history.push(`/images/1`)
    }
    
  }

  return (
    <div>
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