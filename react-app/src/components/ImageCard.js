import './ImageCard.css';

function ImageCard({ image }) {
  const imageUrl = image.url;

  return (
    <div>
      <img src={imageUrl} alt='reactor img' className="imageCard-img"></img>
    </div>
  )
}

export default ImageCard;