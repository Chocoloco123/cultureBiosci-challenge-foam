import './ImageCard.css';

function ImageCard({ image }) {
  const imageUrl = image.url;

  return (
    <div className='imageCard-Div-Cont-Ind'>
      <img src={imageUrl} alt='reactor img' className="imageCard-img"></img>
      <div className="foamBtn-Div-Class">
        <button className="foamBtn">Foam</button>
        <button className="foamBtn">No Foam</button>
      </div>
    </div>
  )
}

export default ImageCard;