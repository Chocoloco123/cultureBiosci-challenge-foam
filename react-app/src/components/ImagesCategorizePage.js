import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImages, updateFoamStatus } from '../store/images';
import ImageCard from './ImageCard';
import './ImagesCategorizePage.css';

function ImagesCategorizePage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images ? state?.images : null);
  const imagesArr = Object?.values(images);
  
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
      <div className="Categories-Div">
        <div className="Category-NavLink-Div">
          <NavLink disabled to={`/images/categories/foam/1`} className="Category-NavLink">Foam</NavLink>
        </div>
        <div className="Category-NavLink-Div">
          <NavLink to={`/images/categories/no_foam/1`} className="Category-NavLink">No Foam</NavLink>
        </div>
        <div className="Category-NavLink-Div">
          <NavLink to={`/images/categories/uncategorized/1`} className="Category-NavLink">Uncategorized</NavLink>
        </div>
      </div>
      <div className='ImageCard-Div-Cont'>
        {imagesArr.map(image => 
          images?.id ? null :
            <div key={`${image?.id}-ImageCard`}>
              <ImageCard key={image?.url} image={image} />
            </div>
        )}
      </div>
      <div className="arrowBox-Div">
        {+pageNumber > 1 ?
          <div>
            <NavLink to={`/images/all/${(+pageNumber - 1)}`} exact={true} className="arrows" onClick={window.scrollTo(0,0)}>Back</NavLink>
          </div>
          : 
          <div>
            <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
          </div>
        } 
        <div>
          <NavLink to={`/images/all/${+pageNumber + 1}`} exact={true} onClick={window.scrollTo(0,0)}className="arrows">Next</NavLink>
        </div> 
      </div>
    </>
    
  )
}

export default ImagesCategorizePage;