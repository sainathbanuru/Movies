import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { connect} from 'react-redux';
import ListComponent from '../common/ListComponent';
import Card from '../common/Card';
import  Icon from 'react-native-vector-icons/Octicons';
import { TV_AIRING_TODAY } from '../../utils/Constants';
import { selected_series, get_series } from '../../actions';


class TvAiringToday extends Component{

    static navigationOptions= ({navigation}) => ({
        title: 'Today on Tv',
        drawerLabel:'Tv Airing today',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#E91E63',
            height: 45
        },
    })



    componentWillMount(){  
        this.props.get_series('https://api.themoviedb.org/3/tv/airing_today?api_key=10b93db8c4746659e0310e8b4ce416e2&language=en-US&time_zone=IST', TV_AIRING_TODAY);   
    }

    

    renderItems({item, index}){

        const { textStyle, ImageStyle } = styles;

        return(
            <Card style={{ height: 240}} onPress={() => {
                this.props.selected_series(item.id);
                this.props.navigation.navigate('seriesDetail')
                }}>
                <Image 
                    style={styles.ImageStyle}                
                    source={{ uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`}}
                    resizeMode='stretch'
                />
                <View style={textStyle}>
                    <View style={{ flex:5}}>
                        <Text>{item.original_name}</Text>
                    </View>
                <View style={{ flex:1}}>
                    <Text>{item.vote_average}</Text>
                </View>    
                </View>
            </Card>
        );
    }

    

    render(){

        return(
          
            <ListComponent
                data={this.props.tv}
                renderItem={this.renderItems.bind(this)}
                columns={2}
            />

        );
    }
}

const styles= StyleSheet.create({
    
      ImageStyle: {
          flex:6,
          width:'100%',          
          borderRadius:3,
      },
      textStyle: { 
          flex:1, 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginLeft:5
        }
});

const mapStateToProps = (state) => {
    return {
        tv: state.seriesReducer.AiringToday
    }
}

export default connect(mapStateToProps, { selected_series, get_series})(TvAiringToday);