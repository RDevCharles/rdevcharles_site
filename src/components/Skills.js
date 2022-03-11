import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'base-line',
            margin: '10rem 0rem 2rem 0rem',
            flexWrap:'wrap'
        }}>
            <ul>
                <h4>Skills</h4>
                <li>Front-end Developement</li>
                <li>Back-end Developement</li>
                <li>Web Scrapping</li>
                <li>Prototyping</li>
            </ul>

            <ul>
                <h4>Tools</h4>
                <li>Vim</li>
                <li>Sketch</li>
                <li>Inkscape</li>
                <li>Lightroom</li>
            </ul>

            <ul>
                <h4>Languages</h4>
                <li>Javascript (React Js)</li>
                <li>Node</li>
                <li>Python</li>
                <li>Html/CSS</li>
                <li>Headless Cms</li>
            </ul>
    </div>
)
}

export default Skills