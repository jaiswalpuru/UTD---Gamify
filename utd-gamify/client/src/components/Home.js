import React, { useEffect, useState } from 'react'
import axios from 'axios';

//import pictures from below path for respective locations
import pool from '../images/pool.jpeg';


const Home = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        loadLocations();
    }, []);

    const loadLocations = () => {
        console.log(`onload`);

        // axios.get('/api/v1/locations').then((data) => {
        //     setLocations(data);
        // })
    }

    return (
        <div>
            <div className="row conatiner m-l-1">
                {locations.map(location => (
                    <div className="col-md-3" onClick={() => { console.log(`nagivate to individual page`); }}>
                        <img className="d-block home-img" src={location.image_name} alt="slide" />
                        <div className="text-center">
                            {location.location_name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
