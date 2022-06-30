import React from 'react';

type progressProps = {
    percentage: String
}

const Progress: React.FC <progressProps> = (props: progressProps) => {

    const {percentage} = props;

    return (
        <div className="progress-bar progress=bar-striped bg-success mt-5" role="progressbar" style={{width:`${percentage}%`}}>
            {percentage}%
        </div>
    );
};

export default Progress;