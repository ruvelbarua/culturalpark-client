import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Donation = () => {
    return (
        <div className='container my-4'>
            <div className='text-center text-primary my-5'>
                <h2>কালচারাল পার্কের সদস্যপদ প্রাপ্তির যোগ্যতা </h2>
            </div>
            <Card style={{ width: '70rem' }}>
                <Card.Header><h5 className='text-center'>জন্মসূত্রে বাংলাদেশী প্রাপ্তবয়স্ক যেকোন নাগরিক কালচারাল পার্কের আদর্শ মেনে সদস্যপদ গ্রহণ করতে পারবেন। </h5></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>১। প্রতিষ্ঠাতা সদস্য: প্রতিষ্ঠাতা ও তাঁর বংশধর।</ListGroup.Item>
                    <ListGroup.Item>২। সাধারণ সদস্য: মাত্র ১০০ (একশত) টাকা অনুদান দিয়ে সদস্য ফরম পূরণ করে সাধারণ সদস্যপদ গ্রহণ করতে পারবেন।</ListGroup.Item>
                    <ListGroup.Item>৩। আজীবন সদস্য: এককালীন ৫০০০ (পাঁচ হাজার) টাকা অনুদান দিয়ে সদস্য ফরম পূরণ করে আজীবন সদস্যপদ লাভ করতে পারবেন।</ListGroup.Item>
                    <ListGroup.Item>৪। দাতা সদস্য: যেকান অংকের অনুদান দিয়ে দাতাসদস্য হতে পারেন। তবে ১০,০০০ (দশ হাজার) টাকার অধিক অনুদানদাতার নাম স্থায়ী বোর্ডে লেখা থাকবে।</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <h5 className='text-center bg-info'>আপনার আন্তরিক অংশগ্রহণ ও সহযোগিতা আমাদের অনুপ্রাণিত করবে এবং প্রগতিশীল সমাজ গঠনে অবদান রাখবে।</h5>
                </Card.Body>
                <Button variant="primary">আমি সদস্য হতে চাই</Button>
            </Card>
        </div>
    );
};

export default Donation;