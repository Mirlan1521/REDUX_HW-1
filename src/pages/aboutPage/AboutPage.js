import React from 'react';
import {useSelector} from "react-redux";

const AboutPage = () => {
    const title = useSelector(state => state.title)
    return (
        <div>
            AboutPage -- {title}
        </div>
    );
};

export default AboutPage;