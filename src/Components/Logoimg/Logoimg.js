import React from 'react';
import logoimg from '../pic/logo.png'

const Card = () => {
    return (
        <Card>
            <Card.Img variant="top" src={logoimg} />
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Card;