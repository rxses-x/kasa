function Card({ title, image, onClick }) {
  return (
      <div className="card" onClick={onClick} >
        <img src={image} alt={title} className='card__image'></img>
        <h2 className='card__title'>{title}</h2>
      </div>
  );
}

export default Card;