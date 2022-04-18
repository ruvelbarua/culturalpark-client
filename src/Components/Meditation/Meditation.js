import React from 'react';
import { Card } from 'react-bootstrap';
import Media from '../Media/Media';
import mdtpic from '../pic/meditation.jpg'

const Meditation = () => {
    return (
        <div className='container my-4'>
            <div className='text-success'>
                <h2 className='text-center'>আত্মোন্নয়ন কোর্সে অংশ নিন জীবনে পরিপূর্ণতা আনুন </h2>
                <h2 className='text-center'>সায়েন্টিফিক লেকচার ও মেডিটেশন </h2>
            </div>
            <div className='text-danger'>
                <h4 className='text-center'>মানুষের দুটি সত্তা আছে, একটা হচ্ছে পশুত্ব অন্যটি মনুষ্যত্ব। মানুষ মনুষ্যত্ব নিয়ে জন্মগ্রহণ করে না। কঠোর সাধনা আর আত্মোপলব্ধির মাধ্যমে মানুষকে মনুষ্যত্ব অর্জন করতে হয়।
                    সত্য, সুন্দর ও মহত্ত্বের সাধনা হচ্ছে সেই মনুষ্যত্ব বিকাশের পথ। আমাদের আত্মোন্নয়নের চর্চা সেই মনুষ্যত্ব বিকাশের সাধনা। একটাই দুর্লভ মানব জীবন। সুখ, শান্তি, সমৃদ্ধি এই জীবনেই অর্জন করতে হয়। মানবতা, সমতা আর শুদ্ধতার পথে যেকোন কেউ গড়ে তুলতে পারে সার্থক ও পরিপূর্ণ জীবন। তিন দিনের আত্মোন্নয়ন কোর্সের বার্তা এটাই। </h4>
            </div>
            <div className='text-dark'>
                {/* <h2 className='text-center'>আত্মোন্নয়ন কোর্স</h2> */}
            </div>
            {/* <Card className="text-white my-4">
                <Card.Img src={mdtpic} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                </Card.ImgOverlay>
            </Card> */}
            <div className='container text-center my-4'>
                <h2 className='bg-dark text-warning p-3'> আমাদের ইউটিউব চ্যানেল</h2>
                <div className='p-4'>
                    <Media />
                </div>
            </div>
            <div className='my-4'>
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
                            <h3>এন্ট্রি: ফ্রি</h3>
                        </Card.Text>
                        {/* <a className='bg-primary text-white border text-decoration-none' href='https://forms.gle/VfUbufgY5oGVjaiF7' target='_blank'>
                            আবেদন করুন
                        </a> */}
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="text-center">
                    <Card.Header className='bg-dark text-info '><h2>সাপ্তাহিক মেডিটেশন</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>প্রতি শুক্রবার বিকেল ৪:০০ টায় </h3></Card.Title>
                        <Card.Text>
                            <h2 className='text-success'>কালচারাল পার্ক মেডিটেশন সেন্টার</h2>
                        </Card.Text>
                        <Card.Text>
                            <h4>বৈদ্যপাড়া, পশ্চিম গুজরা, রাউজান, চট্টগ্রাম।</h4>
                        </Card.Text>
                        <Card.Text>
                            <h3>এন্ট্রি: ফ্রি</h3>
                        </Card.Text>
                        {/* <a className='bg-success text-white border text-decoration-none' href='https://forms.gle/VfUbufgY5oGVjaiF7' target='_blank'>
                            আবেদন করুন
                        </a> */}
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className="text-center">
                    <Card.Header className='bg-dark text-warning '><h2>ত্রৈমাসিক তিন দিনের আত্মোন্নয়ন কোর্স</h2></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>কালচারাল পার্কের নিজস্ব সেন্টারে থাকা খাওয়ার ব্যবস্থা সহ</h3></Card.Title>
                        <Card.Text>
                            <h2 className='text-danger'>সুনয়ন মিলনায়তন (শীতাতপ নিয়ন্ত্রিত)</h2>
                        </Card.Text>
                        <Card.Text>
                            <h4>বৈদ্যপাড়া, পশ্চিম গুজরা, রাউজান, চট্টগ্রাম।</h4>
                        </Card.Text>
                        <Card.Text>
                            {/* <h3>ফি প্রযোজ্য</h3> */}
                        </Card.Text>
                        <a className=' text-success text-decoration-none' href='https://forms.gle/VfUbufgY5oGVjaiF7' target='_blank'>
                            <span className='fs-4 fw-bold lh-sm'>নাম নিবন্ধন করুন</span>
                        </a>
                        <p>যোগাযোগ: ০১৮১৯-৬৪০৩৫৮</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Meditation;