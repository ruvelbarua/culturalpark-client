import React from 'react';
import { Card } from 'react-bootstrap';

const Photo = (props) => {
    const { key, name, description, img } = props.photo || {}
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{key}</Card.Title>
                    {/* <Card.Title>{name}</Card.Title> */}
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Photo;