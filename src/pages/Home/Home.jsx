import React from 'react';
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card';
import rentalList from '../../data/logements.json'
import homeBanner from '../../assets/home-background.png'

function Home() {

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/logements/${id}`);
    };

    return (
        <div>
            <Banner
                title="Chez vous, partout et ailleurs"
                image={homeBanner}
            />
            <section className="card-grid">
                {rentalList.map(item => (
                    <Card 
                        key={item.id}
                        title={item.title}
                        image={item.cover}
                        onClick={() => handleClick(item.id)}
                    />
                ))}
            </section>
        </div>
    );
}

export default Home;