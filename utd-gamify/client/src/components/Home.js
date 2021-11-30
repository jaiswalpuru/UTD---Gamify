import React, { useEffect, useState } from 'react'
import axios from 'axios';

const images = require.context('../../public/images', true);

const Home = (props) => {
    const [locations, setLocations] = useState([]);
    useEffect(() => {
        loadLocations();
    }, []);

    const loadLocations = () => {
        console.log(`onload`);

        axios.get('/api/v1/locations').then((data) => {
            setLocations(data.data);
        });
    }
    
    return (
        <div>
            <div className="row container m-l-1">
                {locations.map(location => (
                    <div className="col-md-3" key={location._id} onClick={() => { console.log("nagivate to individual page"); }}>
                        <img className="d-block home-img" src={images(`./${location.image_name}`).default} alt="slide" />
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
