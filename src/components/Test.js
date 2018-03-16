import React, { Component} from 'react';
import { View, Button } from 'react-native';

class Test extends Component{
    render(){
        return(
            <View>
                <Button title="details" onPress={() => this.props.navigation.navigate('moviesDetail')}/>
            </View>
        );
    }
}

export default Test;