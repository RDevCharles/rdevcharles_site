import React from 'react';
import '../App.css';

const Skills = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'base-line',
            margin: '10rem 0rem 4rem 0rem',
            flexWrap:'wrap'
        }}>
            <ul>
                <h4>Skills</h4>
                <li>Front-end Developement</li>
                <li>Prototyping</li>
                <li>Photography</li>
                <li>Video Editing</li>
            </ul>

            <ul>
                <h4>Tools</h4>
                <li>Vim</li>
                <li>Sketch</li>
                <li>Inkscape</li>
                <li>Lightroom</li>
                <li>FinalCut</li>
                <li>Davinci Resolve</li>
            </ul>

            <ul>
                <h4>Languages</h4>
                <li>Html/CSS</li>
                <li>Javascript (React Js)</li>
                <li>Headless Cms</li>
                <li>Python</li>
            </ul>
    </div>
)
}

export default Skills