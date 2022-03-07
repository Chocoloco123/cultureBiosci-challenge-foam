const GET_IMAGES = 'images/GET_IMAGES';
const UPDATE_FOAM_STATUS = 'images/UPDATE_FOAM_STATUS';

const getTheImages = (images) => ({
  type: GET_IMAGES,
  images
})

const updateTheFoam = (image, id) => ({
  type: UPDATE_FOAM_STATUS,
  image,
  id
})

export const getImages = (pageNumber) => async(dispatch) => {
  const res = await fetch(`/api/images/${pageNumber}`)
  if (res.ok) {
    const images = await res.json();
    dispatch(getTheImages(images));
  }
}

export const updateFoamStatus = (image,pageNumber, id) => async(dispatch) => {
  const res = await fetch(`/api/images/${pageNumber}/${id}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(image)
  });

  const updatedImageData = await res.json();
  dispatch(updateTheFoam(updatedImageData, id));
  return updatedImageData;
}


const initial_state = {};

const imagesReducer = (state = initial_state, action) => {
  switch(action.type) {
    case GET_IMAGES : {
      const newState = action.images;
      return newState;
    }
    case UPDATE_FOAM_STATUS : {
      if (!state[action.images]) {
        const newState = {
          ...state, [action.images.id]: action.images
        }
        return newState;
      }
      return state;
    }
    default :
      return state;
  }
}

export default imagesReducer;