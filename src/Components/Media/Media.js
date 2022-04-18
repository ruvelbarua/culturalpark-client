import React from 'react';
import ReactPlayer from 'react-player'

const Media = () => {
    return (
        <div className='d-flex gap-4 m-4'>

            <ReactPlayer url='https://youtu.be/fiUbAJ5zbU8' />


            <ReactPlayer url='https://youtu.be/2G9BmYDnZuQ' />

        </div>
    );
};

export default Media;