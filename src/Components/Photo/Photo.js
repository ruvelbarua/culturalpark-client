import React from 'react';
import { Card } from 'react-bootstrap';

const Photo = (props) => {
    const { name, img } = props.photo || {}
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='img-fluid img-thumbnail d-block m-auto' src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Photo;