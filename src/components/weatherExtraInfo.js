import React from 'react'

const weatherExtraInfo = ({humidity,wind}) =>
(
    <div>
        <span>{`${humidity} % - `}   </span>
        <span>{`${wind} wind `}</span>
    </div>
)

export default weatherExtraInfo