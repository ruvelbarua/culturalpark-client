import React from 'react';
import { Card } from 'react-bootstrap';
import mdtpic from '../pic/quantum.jpg'

const Meditation = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={mdtpic} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h2>আত্মউন্নয়ন ও মেডিটেশন</h2></Card.Title>
                    <Card.Text>
                        নিয়মিত মেডিটেশন করুন, জীবন বদলে যাবে।
                    </Card.Text>
                    <Card.Text>নিয়মিত বই পড়ুন, জ্ঞানের ভান্ডার বৃদ্ধি করুন।</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Meditation;