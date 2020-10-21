import React from 'react';

// Resources
import loadingGif from '../../images/gif/loading.gif';

const Loading = () => {
    return (
        <div>
            <img src={loadingGif} alt='Loading' />
        </div>
    );
};

export default Loading;
