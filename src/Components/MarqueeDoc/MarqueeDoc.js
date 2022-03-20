import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeDoc = () => {
    return (
        <div className=' container text-dark p-2 my-4'>
            <Marquee pauseOnHover>
                <p><span className='text-danger'>**</span> আত্মোন্নয়ন কোর্সে অংশ নিন, জীবনে পরিপূর্ণতা আনুন <span className='text-danger'>** || </span> নাম নিবন্ধন চলছে - যোগাযোগ: ০১৮১৯৬৪০৩৫৮, ০১৭২১১০৮৬৫৪ || অথবা <a href='https://forms.gle/VfUbufgY5oGVjaiF7' target='blank'> ক্লিক করুন</a></p>
            </Marquee>
        </div >
    );
};

export default MarqueeDoc;