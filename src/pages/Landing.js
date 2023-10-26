import React, { useState, useEffect } from 'react';
import { Opening, Mobile } from '../components';

const Landing = () => {
    const [show, setshow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setshow(false);
        }, 3000);
    }, []);

    return (
        <div>

            {show && <Opening />}
            <Mobile />
        </div>

    );
};

export default Landing