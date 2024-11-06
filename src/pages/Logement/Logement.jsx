import { useParams, Navigate } from 'react-router-dom';
import rentalList from '../../data/logements.json'
import Carrousel from '../../components/Carrousel/Carrousel'
import Tags from '../../components/Tags/Tags'
import Rate from '../../components/Rate/Rate'
import Collapse from '../../components/Collapse/Collapse';

const Logement = () => {
    const { id } = useParams();
    const rental = rentalList.find((i) => i.id === id)

    if (!rental) {
        return <Navigate to='*' />
    }

    return (
        <section className='logement'>
            <Carrousel
                images = { rental.pictures }
            />
            <div className='logement-content'>
                <h1 className='logement-content__title'>{ rental.title }</h1>
                <p className='logement-content__location'>{ rental.location }</p>
            </div>
            <Tags
                tag = { rental.tags }
            />
            <div className='logement-info'>
                <div className='logement-info__identity'>
                    <p className='logement-info__identity--name'>{ rental.host.name }</p>
                    <img className='logement-info__identity--picture'
                        alt= { rental.host.name }
                        src = { rental.host.picture}
                    />
                </div>
                <span className='logement-info__rate'><Rate
                    rating = { rental.rating }
                /></span>
            </div>
            <div className='logement-collapse'>
                <Collapse
                    title = 'Description'
                >
                    <p>{ rental.description }</p>
                </Collapse>
                <Collapse
                    title = 'Équipements'>
                    { rental.equipments.map((item, index) => (
                        <p key={ index }>{ item }</p>
                    )) }
                </Collapse>
            </div>
        </section>
    )
}

export default Logement