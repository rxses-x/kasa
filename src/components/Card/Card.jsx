const Card = ({ title, image, onClick }) => {
  return (
      <main className="card-content" onClick={onClick} >
        <img src={image} alt={title} className='card-content__image'></img>
        <h2 className='card-content__title'>{title}</h2>
      </main>
  );
}

export default Card;