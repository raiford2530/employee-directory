import {useState} from 'react';

const SortableHeader = (props) => {

    
    return (
        <th onClick={() => props.onClick(props.name.toLowerCase(), props.sort)}>{props.name}</th>
    )
}

export default SortableHeader;