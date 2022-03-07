import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFoamStatus } from '../store/images';
import './ImageCard.css';

function ImageCard({ image }) {
  const [foamStatus, setFoamStatus] = useState(image?.foamStatus)
  const imageUrl = image.url;

  const dispatch = useDispatch();

  const handleSelect = async (e) => {
    e.preventDefault();

    const updatedImage = {
      foamStatus
    }

    // const newImage = await dispatch(updateFoamStatus(updatedImage, image?.id))

    dispatch(updateFoamStatus(updatedImage, image?.id))
  }


  return (
    <div className='imageCard-Div-Cont-Ind'>
      <img src={imageUrl} alt='reactor img' className="imageCard-img"></img>
      <div className="foamBtn-Div-Class">
        {/* <div>{foamStatus}</div> */}
        {/* <button className="foamBtn">Foam</button>
        <button className="foamBtn">No Foam</button> */}
        <form onSubmit={handleSelect}>
          <select required onChange={(e) => setFoamStatus(e.target.value)}>
          <option value="Uncategorized">Select Status</option>
          <option value="Foam">Foam</option>
          <option value="No Foam">No Foam</option>
        </select>
        </form>
      </div>
    </div>
  )
}

export default ImageCard;