const GET_IMAGES = 'images/GET_IMAGES';
const GET_ONE_IMAGE = 'images/GET_ONE_IMAGE';
const UPDATE_FOAM_STATUS = 'images/UPDATE_FOAM_STATUS';
const GET_FOAM_IMAGES = 'images/GET_FOAM_IMAGES';


const getTheImages = (images) => ({
  type: GET_IMAGES,
  images
})

const getAnImage = (image) => ({
  type: GET_ONE_IMAGE,
  image
})

const updateTheFoam = (image) => ({
  type: UPDATE_FOAM_STATUS,
  image
})

const getTheFoamImages = (images) => ({
  type: GET_FOAM_IMAGES,
  images
})

// const updateTheFoam = (image) => ({
//   type: UPDATE_FOAM_STATUS,
//   image
// })

export const getImages = (pageNumber) => async(dispatch) => {
  const res = await fetch(`/api/images/all/${pageNumber}`)
  if (res.ok) {
    const images = await res.json();
    dispatch(getTheImages(images));
  }
}

export const getOneImage = (id) => async(dispatch) => {
  const res = await fetch(`/api/images/${id}`)
  if (res.ok) {
    const image = await res.json();
    dispatch(getAnImage(image))
  }
}

export const getFoamImages = (pageNumber) => async(dispatch) => {
  const res = await fetch(`/api/images/category/foam/${pageNumber}`)
  if (res.ok) {
    const images = await res.json();
    dispatch(getTheFoamImages(images))
  }
}
// export const updateFoamStatus = (image,pageNumber, id) => async(dispatch) => {
//   const res = await fetch(`/api/images/${pageNumber}/${id}/update`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify(image)
//   });

//   const updatedImageData = await res.json();
//   dispatch(updateTheFoam(updatedImageData, id));
//   return updatedImageData;
// }

// export const updateFoamStatus = (image, id) => async(dispatch) => {
//   console.log('redux store id: ',id)
//   const res = await fetch(`/api/images/${id}/update`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify(image)
//   });

//   const updatedImageData = await res.json();
//   dispatch(updateTheFoam(updatedImageData, id));
//   return updatedImageData;
// }

export const updateFoamStatus = (image, id) => async(dispatch) => {
  // console.log('redux store id: ',id)
  const res = await fetch(`/api/images/${id}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(image)
  });

  const updatedImageData = await res.json();
  dispatch(updateTheFoam(updatedImageData));
  // console.log('updatedImageData: ', updatedImageData)
  return updatedImageData;
}




const initial_state = {};

const imagesReducer = (state = initial_state, action) => {
  switch(action.type) {
    case GET_IMAGES : {
      const newState = action.images;
      return newState;
    }
    case GET_ONE_IMAGE : {
      const newState = action.image;
      return newState;
    }
    case GET_FOAM_IMAGES : {
      const newState = action.images;
      return newState;
    }
    // case UPDATE_FOAM_STATUS : {
    //   if (!state[action.image]) {
    //     const newState = {
    //       ...state, [action.image.id]: action.image
    //     }
    //     return newState;
    //   }
    //   return state;
    // }
    case UPDATE_FOAM_STATUS : {
      const newState = { ...state }
      newState[action.image.id] = action.image
      return newState
    }
    default :
      return state;
  }
}

export default imagesReducer;