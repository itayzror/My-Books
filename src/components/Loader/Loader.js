import React from 'react';
import {FallingLines} from "react-loader-spinner";

const Loader = ({isLoading}) => {
    return (
        isLoading && <div>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
                position='absolute'
                z-index='2'
            />
        </div>
    );
};

export default Loader;