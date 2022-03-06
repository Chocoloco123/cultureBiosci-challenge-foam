const GET_IMAGES = 'images/GET_IMAGES';

const getTheImages = (images) => ({
  type: GET_IMAGES,
  images
})

export const getImages = (pageNumber) => async(dispatch) => {
  const res = await fetch(`/api/images/${pageNumber}`)
  if (res.ok) {
    const images = await res.json();
    dispatch(getTheImages(images));
  }
}


const initial_state = {};

const imagesReducer = (state = initial_state, action) => {
  switch(action.type) {
    case GET_IMAGES : {
      const newState = action.images;
      return newState;
    }
    default:
      return state;
  }
}

export default imagesReducer;