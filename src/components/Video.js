import React from "react";
import PropTypes from "prop-types";

const Video = ({title, embed}) => (

    <div className="video-container">
        <iframe title={title} className="player"
            width="100%" height="400px"
            src={embed} frameBorder="0"/>
    </div>

);

Video.protoType = {
    name: PropTypes.string.isRequired,
    embed: PropTypes.string.isRequired
};

export default React.memo(Video);