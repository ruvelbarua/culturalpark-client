import React, { useEffect, useState } from 'react';
import Cultur from '../Cultur/Cultur';
import Photo from '../Photo/Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() =>
        fetch('/photogl.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
        , [])
    return (
        <div className="container my-4">
            <div className='text-center text-danger bg-light'>
                <h2>PHOTO GALLERY</h2><br />
                <h3 className='text-info bg-dark p-2'>কালচারাল পার্কে গুণীজন সন্মাননা ও বিভিন্ন কার্য্যক্রমের ছবি</h3>
            </div>
            <div className="row bg-light g-2 m-2 p-3 my-4">
                {
                    photos.map((photo =>
                        <Photo
                            photo={photo}
                        ></Photo>
                    ))
                }
            </div>

        </div>
    );
};

export default Photos;