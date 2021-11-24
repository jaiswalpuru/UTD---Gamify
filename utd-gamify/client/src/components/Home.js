import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = (props) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        loadLocations();
    }, []);

    const loadLocations = () => {
        axios.get('/api/v1/locations').then((data) => {
            setLocations(data);
        })
    }

    return (
        <div>
            <div className="row conatiner-fluid">
                {locations.map(location => {
                    <div className="col-md-3" onClick={ }>
                        <img className="d-block" src={location.image_name} alt="slide" />
                        <div>
                            {location.location_name}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home
