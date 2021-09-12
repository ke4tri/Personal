
import React from 'react';
import Neo from '../../Components/Neo/index'
import './About.css';


function About() {
    return (
        <React.Fragment >
            <Neo className='Neo' />
            <div className='test'>
                <div className="words word-1">
                    <span>W</span>
                    <span>A</span>
                    <span>Y</span>
                    <span>N</span>
                    <span>E</span>
                    {/* <span>E</span>
                    <span>N</span> */}
                </div>

                <div className="words word-2">
                    {/* <span>=</span>
                    <span>=</span> */}
                </div>

                <div className="words word-3">
                    <span>C</span>
                    <span>O</span>
                    <span>L</span>
                    <span>L</span>
                    <span>I</span>
                    <span>E</span>
                    <span>R</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;