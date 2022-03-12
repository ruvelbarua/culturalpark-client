import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

const Activities = () => {
    return (
        <div className='my-4'>
            <h2 className='text-center text-primary text-center '>আমাদের নিয়মিত আয়োজন</h2>
            <Container className='my-3'>
                <Card style={{ width: '70rem' }}>
                    <Card.Body>
                        <Card.Title className='text-center bg-success'><h2 className='text-white'>আয়োজন সমূহ:</h2></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><h5>১। সাপ্তাহিক বন্ধ রবিবার ছাড়া প্রতিদিন সকাল ৯:০০টা থেকে পাঠাগারে পাঠক সমাবেশ। পাঠক সৃষ্টির লক্ষ্যে সাধারণ জ্ঞান ও বিতর্ক প্রতিযোগিতা।</h5></ListGroupItem>
                        <ListGroupItem><h5>২। বাৎসরিক ক্রীড়া প্রতিযোগিতা, সঙ্গীত, চিত্রাঙ্কন, কবিতা আবৃত্তি, গল্প বলা, রচনা লেখা, আনন্দর‌্যালি, বৃক্ষরোপণ ও শিক্ষাসফর।</h5></ListGroupItem>
                        <ListGroupItem><h5>৩। বাৎসরিক আলোচনাসভা, ‍কৃতী শিক্ষার্থীদের বৃত্তি প্রদান, গুণীজন সম্মাননা, পুরস্কার বিতরণ ও সংগীতানুষ্ঠান।</h5></ListGroupItem>
                        <ListGroupItem><h5>৪। পহেলা বৈশাখসহ সকল জাতীয় দিবস উদযাপন।</h5></ListGroupItem>
                        <ListGroupItem><h5>৫। বাৎসরিক বুলেটিন, বই প্রকাশ ও বইমেলার আয়োজন।</h5></ListGroupItem>
                        <ListGroupItem><h5>৬। বিষয়ভিত্তিক সেমিনার ও উঠান বৈঠক।</h5></ListGroupItem>
                        <ListGroupItem><h5>৭। ত্রৈমাসিক আত্নোন্নয়ন কোর্স- এতে সায়েন্টিফিক লেকচার ও মেডিটেশনের মাধ্যমে অভিযাত্রীগণের শারিরীক ও মানসিক প্রশান্তিসহ আত্নশুদ্ধির উন্নতি করা হয়।</h5></ListGroupItem>
                        <ListGroupItem><h5>৮। শিক্ষার্থীদের উদ্যোগে ত্রিমাসিক দেয়ালিকা প্রকাশ।</h5></ListGroupItem>
                        <ListGroupItem><h5>৯। প্রতি শুক্রবার সকাল ১১:০০টায় শিক্ষার্থীদের শরীরচর্চা, ১১:৩০টায় নৈতিক শিক্ষা, দুপুর ১২:৩০টায় ফুড ফর লাইফ এবং বিকাল ৪:০০টায় মেডিটেশন ও কাউন্সেলিং।</h5></ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
            <Container className=' my-4'>
                <h2 className='text-center text-danger text-center'>সংগঠনের ধরন</h2>
                <Card style={{ width: '70rem' }}>
                    <Card.Body>
                        <Card.Title className='text-center bg-primary'><h2 className='text-white'>সংগঠনের ধরন সমূহ:</h2></Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><h5>১। কালচারাল পার্ক একটি অরাজনৈতিক, সামাজিক, সাংস্কৃতিক, অসাম্প্রদায়িক ও মানবতাবাদী সংগঠন।</h5></ListGroupItem>
                        <ListGroupItem><h5>২। মহান মুক্তিযদ্ধের চেতনা এবং গণপ্রজান্ত্রী বাংলাদেশের সংবিধানের প্রতি সংগঠন ও এর সদস্যবৃন্দ শ্রদ্ধাশীল। সংগঠনের সকল কর্মকান্ড সংবিধান সম্মত ও মুক্তিযুদ্ধের আদর্শে উজ্জীবিত।</h5></ListGroupItem>
                        <ListGroupItem><h5>৩। এই সংগঠন নিজস্ব আদর্শে পরিচালিত হয়। সংগঠনের আজীবন সদস্যবৃ্দ ৩ বছর অন্তর সংগঠনের কার্যকরী কমিটি এবং অনুষ্ঠানের পূর্বে উদযাপন পরিষদ নির্বাচিত করবেন।</h5></ListGroupItem>
                        <ListGroupItem><h5>৪। আমাদের সকল কর্মকান্ড একটি নিরাপদ, উজ্জ্বল, উন্নত-সমৃদ্ধ জাতি গঠনের লক্ষ্যে সুশিক্ষা ও শুদ্ধ সংস্কৃতি চর্চা করা।</h5></ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
        </div>
    );
};

export default Activities;