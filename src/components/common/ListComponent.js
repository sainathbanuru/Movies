import React from 'react';
import { FlatList } from 'react-native';

const ListComponent = (props) => {
    return(
        <FlatList 
            data={props.data}
            renderItem={props.renderItem}
            numColumns={props.columns}
            keyExtractor={(item, index) => item.id}            
        />
    );
}

export default ListComponent;