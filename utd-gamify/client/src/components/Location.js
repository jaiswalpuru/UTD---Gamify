import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card'

const Location = (props) => {

    const [location, setLocation] = useState({});

    useEffect(() => {
        // pass id as props from Home.js and fetch location details based on id
        axios.get('/api/v1/locations/' + props.locationId).then((data) => {
            setLocation(data);
        })
    }, [props.locationId]);

    return (
        <div>
            <div className="row container m-l-1">
                <div className="col-md-6">
                    <Card>
                        <Card.Img variant="top" src={`../img/${location.image_name}.jpg`} alt='location' />
                        <Card.Body>
                            <Card.Title>{location.name}</Card.Title>
                            <Card.Text>
                                <h6>Capacity      : {location.capacity}</h6>
                                <h6>Capacity Left : {location.capacityleft}</h6>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        {location.games.map(loc => (
                            <div></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
