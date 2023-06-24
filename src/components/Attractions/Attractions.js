import './Attractions.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Attractions = () => {

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const fetchCities = async () => {
            axios
                .get('http://localhost:8080/cities')
                .then(response => {
                    console.log(response.data);
                    const citiesDataRes = response.data;
                    setCities(citiesDataRes);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        fetchCities();
    }, []);

    useEffect(() => {

        const fetchAttractions = async () => {
            if (selectedCity) {
                axios
                    .get(`http://localhost:8080/attractions/${selectedCity}`)
                    .then(response => {
                        console.log(response.data);
                        const attractionsDataRes = response.data;
                        setAttractions(attractionsDataRes);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
        fetchAttractions();
    }, [selectedCity]);


    return (
        <div className="attractions">
            <h1 className="attractions__title">Please select your city:</h1>
            <select className="attractions__dropdown" name="mySelect" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option>Please select</option>
                {cities.map((city) => {
                    return (
                        <option key={city.id} value={city.id}>{city.city}</option>
                    )
                })}
            </select>
            <div className="attractions__container">
                {attractions.map((attraction) => {
                    return (
                        <>
                            <div className="attractions__card" key={attraction.id}>
                                <img className="attractions__image" src={attraction.attraction_image} alt="attraction image"></img>
                                <p className="attractions__location">Destination: {attraction.attraction_city}</p>
                                <p className="attractions__name">Attraction name: {attraction.attraction_name}</p>
                                <p className="attractions__description">Description: {attraction.attraction_description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Attractions;