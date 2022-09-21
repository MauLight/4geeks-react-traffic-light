import React from 'react';
import Light from './light';
import Button from './button';

const Body = () => {
    return (
        <div className='container justify-content-center'>
            <div className='row'>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col handler mx-5"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className='row'>
                
            <div className='col body d-flex justify-content-center w-25 py-2'>
                <Light />
            </div>
            </div>

            <Button />
        </div>

    )
};

export default Body;