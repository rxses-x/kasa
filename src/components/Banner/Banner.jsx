const Banner = ({title, image}) => {
    return (
        <main className="banner-content">
            <img src={image} alt="" className="banner-content__image"></img>
            <h1 className="banner-content__title">{title}</h1>
        </main>
    )
}

export default Banner