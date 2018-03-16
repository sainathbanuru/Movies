import React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    return(
        <ActivityIndicator 
            size = {props.size}
        />
    );
}


export default Spinner;