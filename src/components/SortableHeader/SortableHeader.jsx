import {useState} from 'react';

const SortableHeader = (props) => {

    
    return (
        <th onClick={() => props.onClick(props.name.toLowerCase(), props.sort)} ><td style={{cursor: 'pointer'}}>{props.name}</td></th>
    )
}

export default SortableHeader;