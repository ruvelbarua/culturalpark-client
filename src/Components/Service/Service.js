import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { key, name, description, img } = props.service || {}
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{key}</Card.Title>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">View More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;