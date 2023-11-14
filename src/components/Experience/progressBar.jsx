import React from 'react';

const ProgressBar = ({ skill, level }) => {
    const bar_width = `${level}%`;
    return (
        <div>
            <h3 style={{ color: 'white', marginBottom: '0' }}>{skill}</h3>
            <div style={{ height: '0.4rem', width: '100%', backgroundColor: 'gray', borderRadius: '10px' }}>
            <div style={{ height: '100%', width: bar_width, backgroundColor: 'var(--color-primary)', borderRadius: '10px' }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;