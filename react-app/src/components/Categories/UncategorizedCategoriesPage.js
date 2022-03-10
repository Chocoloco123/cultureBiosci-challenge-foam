import { NavLink, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUncategorizedImages } from "../../store/images";
import ImageCard from "../ImageCard";

function UncategorizedCategoriesPage() {
  const { pageNumber } = useParams();
  const dispatch = useDispatch();
  const images = useSelector(state => state?.images);
  const imagesArr = Object.values(images);
  console.log(imagesArr);


  useEffect(() => {
    dispatch(getUncategorizedImages(pageNumber))
  }, [dispatch, pageNumber])


  if (!images) return null;

  return (
    <div>
      <h3>Category: Uncategorized</h3>
      <div>
        <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
      </div>
      <div>
        <NavLink to={`/images/all/1`} exact={true} className="arrows" >Main</NavLink>
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
            <NavLink to={`/images/categories/uncategorized/${(+pageNumber - 1)}`} exact={true} className="arrows" >Back</NavLink>
          </div>
          : 
          <div>
            <NavLink to={`/`} exact={true} className="arrows" >Home</NavLink>
          </div>
        } 
        {imagesArr.length >= 18 ?
          <div>
            <NavLink to={`/images/categories/uncategorized/${+pageNumber + 1}`} exact={true} className="arrows">Next</NavLink>
          </div> 
          : null
        }
        
      </div>
    </div>
  )

}

export default UncategorizedCategoriesPage;