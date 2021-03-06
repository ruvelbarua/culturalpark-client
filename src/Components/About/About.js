import React from 'react';
import aboutimg from '../pic/nantu.JPG';
import './About.css';

const About = () => {
    return (
        <div className="my-5">
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="">
                            <img className="img-fluid" src={aboutimg} alt="" />
                        </div>
                        <div className="my-3 text-center text-danger">
                            <h4>প্রতিষ্ঠাতা: নান্টু বড়ুয়া</h4>
                            <h4>Founder: Nantu Barua</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-align-center">
                            <div className="text-center text-success">
                                <h2 className='bg-primary text-white'>কালচারাল পার্ক</h2>
                            </div>
                            <div className="my-4">
                                <h5 className="text-align">মনুষ্যত্বের সাধনার লক্ষ্যে কালচারাল পার্ক প্রতিষ্ঠিত হয় ২০১০ সালে। এ প্রতিষ্ঠানের বর্তমান অবস্থান চট্টগ্রাম জেলার রাউজান থানার অন্তর্গত বৈদ্যপাড়া গ্রামে।
                                    শুরুতে গ্রামের শিক্ষা-সংস্কৃতির উন্নয়নে কাজ করলেও বর্তমানে এর কর্মপরিধির বিস্তার ঘটেছে দেশের বিভিন্ন প্রান্তে ভিন্ন ভিন্ন আঙ্গিকে। কালচারাল পার্কের মাধ্যমে একটি সুখী, সমৃদ্ধ ও আনন্দপূর্ণ সমাজ নির্মাণের জন্য আমরা কাজ করছি- যেটি ন্যায্যতা ও সাম্যের উপর প্রতিষ্ঠিত। আমরা চাই শিশু তার শৈশব, কিশোর তার কৈশোর, তরুণ তার তারুণ্য, যুবক তার যৌবন ও বৃদ্ধ তার বার্ধক্য যাপনে নিরাপত্তা ও পরমানন্দের মতো বিষয়গুলোর যেন নিশ্চয়তা পান। কালচারাল পার্কে আছে আত্মকর্মসংস্থান ও শিল্পচর্চার ক্ষেত্র, খেলার মাঠ, পাঠাগার, মুক্তমঞ্চ, মিলনায়তন, চিকিৎসা ও আইনসেবা, মননশীল আড্ডা-আলোচনা ও বিভিন্ন প্রশিক্ষণ। যেমন: সংগীত শিক্ষা, কবিতা আবৃত্তি, চিত্রাংকন, কম্পিউটার শিক্ষা, হস্তশিল্প, শরীর চর্চা, নৈতিক শিক্ষা, ফুড ফর লাইফ, মেডিটেশন ও সায়েন্টিফিক লেকচার, নিসর্গের ছোঁয়া নিয়ে সকল শ্রেণি ও পেশার মানুষকে আত্মশুদ্ধির জন্য আহবান করছে। সত্য, সুন্দর আর মহত্ত্বের সাধনা করে যেকোন মানুষ গড়ে তুলতে পারে সার্থক ও পরিপূর্ণ জীবন।
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;