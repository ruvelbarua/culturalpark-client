import React from 'react';
import { Button } from 'react-bootstrap';
import bpic from '../pic/books/book4.jpg';
import bpic1 from '../pic/books/book1.jpg';
import bpic2 from '../pic/books/book2.jpg';
import bpic3 from '../pic/books/book3.jpg';
import bpic4 from '../pic/books/book.jpg';

const Publication = () => {
    return (
        <div className='container bg-light text-center my-4'>
            <h2 className='bg-success text-white'>কালচারাল পার্কের পাবলিকেশন</h2>
            <div className="container row gap-3 mr-4 pt-4">
                <div className="col-md-3 col-sm-2">
                    <div className="card h-100">
                        <img src={bpic} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">স্মারক গ্রন্থ</h5>
                            <p className="card-text">যুগপূর্তি স্মারক গ্রন্থ</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2">
                    <div className="card h-100">
                        <img src={bpic1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> সিরিজ -১</h5>
                            <p className="card-text">সামাজিক বিভিন্ন প্রথা, রীতি ও অসঙ্গতি নিয়ে লেখা এই বই</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2">
                    <div className="card h-100">
                        <img src={bpic2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">সিরিজ -২</h5>
                            <p className="card-text">সামাজিক বিভিন্ন প্রথা, রীতি ও অসঙ্গতি নিয়ে লেখা এই বই</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2">
                    <div className="card h-100">
                        <img src={bpic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">সিরিজ -৩</h5>
                            <p className="card-text">সামাজিক বিভিন্ন প্রথা, রীতি ও অসঙ্গতি নিয়ে লেখা এই বই</p>
                        </div>
                        <div className="card-footer">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-2">
                    <div className="card h-100">
                        <img src={bpic4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">আলোকায়ন</h5>
                            <p className="card-text">অর্ধ-যুগপূর্তি স্মারক গ্রন্থ </p>
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