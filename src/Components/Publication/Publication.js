import React from 'react';
import { Card } from 'react-bootstrap';
import bpic from '../pic/book1.jpg';

const Publication = () => {
    return (
        <div className='text-center'>
            <h2 className='text-success'>কালচারাল পার্কের পাবলিকেশন</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        স্মারক গ্রন্থ </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={bpic} />
            </Card>
        </div>
    );
};

export default Publication;