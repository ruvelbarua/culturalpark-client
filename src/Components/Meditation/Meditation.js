import React from 'react';
import { Button, Card } from 'react-bootstrap';
import mdtpic from '../pic/quantum.jpg'

const Meditation = () => {
    return (
        <div className='container my-4'>
            <div className='text-success'>
                <h2 className='text-center'>আত্মোন্নয়ন কোর্স</h2>
            </div>
            <Card className="text-white my-4">
                <Card.Img src={mdtpic} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h2>সাইয়েন্টিফিক লেকচার ও মেডিটেশন</h2></Card.Title>
                    <Card.Text>
                        নিয়মিত মেডিটেশন করুন, জীবনে পরিপূর্ণতা আনুন।
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <div>
                <Card className="text-center">
                    <Card.Header className='bg-dark text-danger '><h2>সাপ্তাহিক মেডিটেশন</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>প্রতি শুক্রবার সকাল ৮:০০ টায় </h3></Card.Title>
                        <Card.Text>
                            <h2 className='text-primary'>প্রজ্ঞাজ্যোতি হল</h2>
                        </Card.Text>
                        <Card.Text>
                            <h4>জয়পাহাড় হাউজিং সোসাইটি, সার্সন রোড, চট্টগ্রাম সদর।</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>ফ্রি এন্ট্রি</h3>
                        </Card.Text>
                        <a href='https://forms.gle/VfUbufgY5oGVjaiF7'>
                            নাম নিবন্ধন করুন
                        </a>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="text-center">
                    <Card.Header className='bg-dark text-info '><h2>সাপ্তাহিক মেডিটেশন</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>প্রতি শুক্রবার বিকেল ৪:০০ টায় </h3></Card.Title>
                        <Card.Text>
                            <h2 className='text-primary'>কালচারাল পার্ক মেডিটেশন সেন্টার</h2>
                        </Card.Text>
                        <Card.Text>
                            <h4>বৈদ্যপাড়া, পশ্চিম গুজরা, রাউজান, চট্টগ্রাম।</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>ফ্রি এন্ট্রি</h3>
                        </Card.Text>
                        <Button variant="primary">Booking Now</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="text-center">
                    <Card.Header className='bg-dark text-warning '><h2>ত্রৈমাসিক তিন দিনের আত্নোন্নয়ন কোর্স</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>কালচার পার্কের নিজস্ব সেন্টারে থাকা খাওয়ার ব্যবস্থা সহ</h3></Card.Title>
                        <Card.Text>
                            <h2 className='text-primary'>সুনয়ন মিলনায়তন (শীততাপ নিয়ন্ত্রিত)</h2>
                        </Card.Text>
                        <Card.Text>
                            <h4>বৈদ্যপাড়া, পশ্চিম গুজরা, রাউজান, চট্টগ্রাম।</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>ফ্রি এন্ট্রি</h3>
                        </Card.Text>
                        <Button variant="primary">Booking Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Meditation;