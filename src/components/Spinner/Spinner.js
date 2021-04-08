import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => (
    <Loader
        type="TailSpin"
        color="#3f51b5"
        height={40}
        width={40}
    />
);

export default Spinner;