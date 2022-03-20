import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeDoc = () => {
    return (
        <div className=' container text-danger p-2 my-4'>
            <Marquee pauseOnHover>
                <p>আত্মোন্নয়ন কোর্স ( সায়েন্টিফিক লেকচার ও মেডিটেশন )-অংশ নিন, জীবনে পরিপূর্ণতা আনুন। নাম নিবন্ধন চলছে - যোগাযোগ: ০১৮১৯৬৪০৩৫৮ অথবা <a href='https://forms.gle/VfUbufgY5oGVjaiF7' target='blank'> ক্লিক করুন</a></p>
            </Marquee>
        </div >
    );
};

export default MarqueeDoc;