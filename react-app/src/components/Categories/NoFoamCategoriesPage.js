import { NavLink, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNoFoamImages } from "../../store/images";
import ImageCard from "../ImageCard";
import './CategoriesStyling.css'

function NoFoamCategoriesPage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images);
  const imagesArr = Object.values(images);
  console.log(imagesArr);


  useEffect(() => {
    dispatch(getNoFoamImages(pageNumber))
  }, [dispatch, pageNumber])


  if (!images) return null;

  return (
    <div>
      <h3>Category: No Foam</h3>
      <div>
        <NavLink to={`/`} exact={true} className="arrows instructions-NavLink" >Instructions</NavLink>
      </div>
      
      <div className="Categories-Div">
        <div className="Category-NavLink-Div">
          <NavLink to={`/images/all/1`} exact={true} className="arrows Category-NavLink all-images-category " >All</NavLink>
        </div>
        <div className="Category-NavLink-Div">
          <NavLink disabled to={`/images/categories/foam/1`} className="Category-NavLink">Foam</NavLink>
        </div>
        <div className="Category-NavLink-Div">
          <NavLink to={`/images/categories/no_foam/1`} className="Category-NavLink Foam-NavLink">No Foam</NavLink>
        </div>
        <div className="Category-NavLink-Div">
          <NavLink to={`/images/categories/uncategorized/1`} className="Category-NavLink">Uncategorized</NavLink>
        </div>
      </div>
      <div className='ImageCard-Div-Cont'>
      {Object.values(images).map(image => 
        images?.id ? null :
          <div key={image.id}>
            <ImageCard key={image?.url} image={image} />
          </div>
      )}
      </div>
      <div className="arrowBox-Div">
        {+pageNumber > 1 ?
          <div>
            <NavLink to={`/images/categories/no_foam/${(+pageNumber - 1)}`} exact={true} className="arrows" >Back</NavLink>
          </div>
          : null
        } 
        {imagesArr.length >= 18 ?
          <div>
            <NavLink to={`/images/categories/no_foam/${+pageNumber + 1}`} exact={true} onClick={window.scrollTo(0,0)} className="arrows">Next</NavLink>
          </div> 
          : null
        }
        
      </div>
    </div>
  )

}

export default NoFoamCategoriesPage;