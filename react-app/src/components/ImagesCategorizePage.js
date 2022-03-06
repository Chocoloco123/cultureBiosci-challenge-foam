import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../store/images';
import ImageCard from './ImageCard';
import './ImagesStyling.css';

function ImagesCategorizePage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images)
  // console.log(images)
  useEffect(() => {
    dispatch(getImages(pageNumber))
  }, [dispatch, pageNumber])

  if (!images) return null;

  return (
    <div>
      Testing 123 
      <div>
        {Object.values(images).map(image => 
          <ImageCard key={image.url} image={image} />
        )}
      </div>
    </div>
  )
}

export default ImagesCategorizePage;