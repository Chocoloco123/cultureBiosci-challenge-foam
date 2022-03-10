import { NavLink, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoamImages } from "../store/images";
import ImageCard from "./ImageCard";

function CategoriesPage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images)

  useEffect(() => {
    dispatch(getFoamImages(pageNumber))
  }, [dispatch, pageNumber])


  if (!images) return null;

  return (
    <div>
      <div>
        <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
      </div>
      <div className='ImageCard-Div-Cont'>
      {Object.values(images).map(image => 
        <div key={image.id}>
          <ImageCard key={image?.url} image={image} />
        </div>
      )}
      </div>
      <div className="arrowBox-Div">
        {+pageNumber > 1 ?
          <div>
            <NavLink to={`/images/categories/foam/${(+pageNumber - 1)}`} exact={true} className="arrows" >Back</NavLink>
          </div>
          : 
          <div>
            <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
          </div>
        } 
        <div>
          <NavLink to={`/images/categories/foam/${+pageNumber + 1}`} exact={true} className="arrows">Next</NavLink>
        </div> 
      </div>
    </div>
  )

}

export default CategoriesPage;