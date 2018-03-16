import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

const Card =(props) => {
    const { CardStyle } = styles;
    return(
        <TouchableHighlight style={{flex:1}} onPress={props.onPress}>
            <View style={[CardStyle, props.style]}>
                { props.children }
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    CardStyle: {
        margin: 3,
        borderRadius: 3,
        elevation: 3,
        padding:2
    }
});

export default Card;