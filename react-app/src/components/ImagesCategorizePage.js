import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages, updateFoamStatus } from '../store/images';
import ImageCard from './ImageCard';
import './ImagesCategorizePage.css';

function ImagesCategorizePage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images)
  
  useEffect(() => {
    dispatch(getImages(pageNumber))
  }, [dispatch, pageNumber])

  // useEffect(() => {
  //   // image, pagenumber, id
  //   dispatch(updateFoamStatus())
  // })

  if (!images) return null;

  
  return (
    <>
      <div>
        <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
      </div>
      <div>
        <div>
          <NavLink to={`/images/categories/foam/1`}>Foam</NavLink>
        </div>
        <div>
        <NavLink to={`/images/categories/no_foam/1`}>No Foam</NavLink>
      </div>
      </div>
      <div className='ImageCard-Div-Cont'>
      {Object.values(images).map(image => 
        <div key={`${image.id}-ImageCard`}>
          <ImageCard key={image?.url} image={image} />
        </div>
      )}
      </div>
      <div className="arrowBox-Div">
        {+pageNumber > 1 ?
          <div>
            <NavLink to={`/images/all/${(+pageNumber - 1)}`} exact={true} className="arrows" >Back</NavLink>
          </div>
          : 
          <div>
            <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
          </div>
        } 
        <div>
          <NavLink to={`/images/all/${+pageNumber + 1}`} exact={true} className="arrows">Next</NavLink>
        </div> 
      </div>
    </>
    
  )
}

export default ImagesCategorizePage;