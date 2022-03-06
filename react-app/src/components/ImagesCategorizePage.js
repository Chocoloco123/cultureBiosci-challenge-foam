import React from 'react';
import { useParams } from 'react-router-dom';
import imagesStyling from './ImagesStyling.css';

function ImagesCategorizePage() {
  const { pageNumber } = useParams();

  return (
    <div>
      Testing 123 
    </div>
  )
}

export default ImagesCategorizePage;