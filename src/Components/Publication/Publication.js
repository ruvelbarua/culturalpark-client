import React from 'react';
import { Button } from 'react-bootstrap';
import bpic from '../pic/book1.jpg';

const Publication = () => {
    return (
        <div className='text-center'>
            <h2>কালচারাল পার্কের পাবলিকেশন</h2>
            <div className="container row row-cols-1 row-cols-md-3 g-4 my-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={bpic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">স্মারক গ্রন্থ</h5>
                            <p className="card-text">বিস্তারিত পড়ুন..</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bpic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">স্মারক গ্রন্থ</h5>
                            <p className="card-text">বিস্তারিত পড়ুন..</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bpic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">স্মারক গ্রন্থ</h5>
                            <p className="card-text">বিস্তারিত পড়ুন..</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publication;