import React, { useEffect, useState } from 'react';
import Cultur from '../Cultur/Cultur';

const Cultural = () => {
    const [cultural, setcultural] = useState([])

    useEffect(() =>
        fetch('/activities.json')
            .then(res => res.json())
            .then(data => setcultural(data))
        , [])
    return (
        <div>
            <h1>This is Cultural</h1>
            <div className="row bg-light g-2 m-2 p-3 my-4">
                {
                    cultural.map((cultur =>
                        <Cultur
                            cultur={Cultur}
                        ></Cultur>
                    ))
                }
            </div>
        </div>
    );
};

export default Cultural;