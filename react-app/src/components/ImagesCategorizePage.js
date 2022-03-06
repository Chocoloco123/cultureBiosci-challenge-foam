import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../store/images';
import ImageCard from './ImageCard';
import './ImagesCategorizePage.css';

function ImagesCategorizePage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images)
  console.log(images)
  useEffect(() => {
    dispatch(getImages(pageNumber))
  }, [dispatch, pageNumber])

  if (!images) return null;

  return (
    <div className='ImageCard-Div-Cont'>
      {Object.values(images).map(image => 
        <div key={image.id}>
          <ImageCard key={image?.url} image={image} />
        </div>
      )}
    </div>
  )
}

export default ImagesCategorizePage;