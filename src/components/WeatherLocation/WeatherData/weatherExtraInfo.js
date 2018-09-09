import React from 'react'
import PropTypes from 'prop-types'

const weatherExtraInfo = ({humidity,wind}) =>
(
    <div>
        <span>{`${humidity} % - `}   </span>
        <span>{`${wind} wind `}</span>
    </div>
);

weatherExtraInfo.PropTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default weatherExtraInfo