import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Donation = () => {
    return (
        <div className='container my-4'>
            <div className='text-center text-success my-5'>
                <h1>কালচারাল পার্কের সদস্যপদ প্রাপ্তির যোগ্যতা </h1>
            </div>
            <Card style={{ width: '70rem' }}>
                <Card.Header><h3 className='text-center'>জন্মসূত্রে বাংলাদেশী প্রাপ্তবয়স্ক যেকোন নাগরিক কালচারাল পার্কের আদর্শ মেনে সদস্যপদ গ্রহণ করতে পারবেন। </h3></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><h5>১। প্রতিষ্ঠাতা সদস্য: প্রতিষ্ঠাতা ও তাঁর বংশধর।</h5></ListGroup.Item>
                    <ListGroup.Item><h5>২। সাধারণ সদস্য: মাত্র ১০০ (একশত) টাকা অনুদান দিয়ে সদস্য ফরম পূরণ করে সাধারণ সদস্যপদ গ্রহণ করতে পারবেন।</h5></ListGroup.Item>
                    <ListGroup.Item><h5>৩। আজীবন সদস্য: এককালীন ৫০০০ (পাঁচ হাজার) টাকা অনুদান দিয়ে সদস্য ফরম পূরণ করে আজীবন সদস্যপদ লাভ করতে পারবেন।</h5></ListGroup.Item>
                    <ListGroup.Item><h5>৪। দাতা সদস্য: যেকান অংকের অনুদান দিয়ে দাতাসদস্য হতে পারেন। তবে ১০,০০০ (দশ হাজার) টাকার অধিক অনুদানদাতার নাম স্থায়ী বোর্ডে লেখা থাকবে।</h5></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <h5 className='text-center bg-info'>আপনার আন্তরিক অংশগ্রহণ ও সহযোগিতা আমাদের অনুপ্রাণিত করবে এবং প্রগতিশীল সমাজ গঠনে অবদান রাখবে।</h5>
                </Card.Body>
            </Card>
            <Button variant="primary">আবেদন করুন</Button>
        </div>
    );
};

export default Donation;