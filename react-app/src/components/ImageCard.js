import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages ,updateFoamStatus } from '../store/images';
import './ImageCard.css';

function ImageCard({ image }) {
  const { pageNumber } = useParams();
  const images = useSelector((state) => state?.images);
  const [foamStatus, setFoamStatus] = useState(image?.foamStatus);
  // const [imageId, setImageId] = useState(image.id ? image?.id : null)
  // let id;

  // console.log('these are images::::::: ',images)
  // for (const imageObj in images) {
  //   // console.log('image object===>',imageObj)
  //   if (imageObj === image.id) {
  //     id = imageObj
  //   }
  // }

  const id = image?.id ? image?.id : null;
  
  const imageUrl = image.url;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getImages(pageNumber))
  // }, [dispatch, pageNumber])

  const handleSelect = async (e) => {
    e.preventDefault();

    const updatedImage = {
      foamStatus,
    }

    const newImage = await dispatch(updateFoamStatus(updatedImage))

    // dispatch(updateFoamStatus(updatedImage, id))

    // useEffect(() => {
    //   dispatch(updateFoamStatus(updatedImage, image?.id))
    // })

    
  }


  return (
    <div className='imageCard-Div-Cont-Ind'>
      <NavLink to={`/${image?.id}/update`} className='imageId-Card-NavLink'>
        <h3 className='imageId-Card'>{image?.id}</h3>
        <img src={imageUrl} alt='reactor img' className="imageCard-img"></img>
      </NavLink>
    </div>
  )
}

export default ImageCard;