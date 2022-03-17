import React, { useEffect, useState } from 'react';
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
                <h2>PHOTO GALLERY</h2>
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