import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeDoc = () => {
    return (
        <div className=' container text-dark p-2 my-4'>
            <Marquee pauseOnHover>
                <p><span className='text-danger'>**</span> কালচারাল পার্কের ভুবনে আপনাকে স্বাগতম।<span className='text-danger'>** || </span> বিস্তারিত জানার জন্য যোগাযোগ করুন: ০১৮১৯৬৪০৩৫৮, ০১৭২১১০৮৬৫৪ || </p>
                {/* <a href='https://forms.gle/VfUbufgY5oGVjaiF7' target='blank'> ক্লিক করুন</a> */}
            </Marquee>
        </div >
    );
};

export default MarqueeDoc;