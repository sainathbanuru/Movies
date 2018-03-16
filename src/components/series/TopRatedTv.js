import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ListComponent from '../common/ListComponent';
import Card from '../common/Card';
import { get_series, selected_series } from '../../actions';
import { connect } from 'react-redux';
import { TOP_TV } from '../../utils/Constants';

class TopRatedTV extends Component{

    static navigationOptions={
        title: 'Top TV',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#E91E63',
            height: 45
        }
    }
    state = {
        topTV: []
    }

    componentDidMount(){
        // fetch()
        //     .then((response) => response.json())
        //     .then((responseJson) => {this.setState({ topTV: responseJson['results']})})
        //     .catch((error) => console.log(error));

        this.props.get_series('https://api.themoviedb.org/3/tv/top_rated?api_key=10b93db8c4746659e0310e8b4ce416e2&language=en-US&page=1',TOP_TV);
    }

    renderItems({item, index}){
        
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
                <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:5}}>
                    <View style={{ flex:5}}>
                        <Text>{item.name}</Text>
                    </View>
                <View style={{ flex:1}}>
                    <Text>{item.vote_average}</Text>
                </View>    
                </View>
            </Card>
        );
    }

    render(){
        console.log(this.state);
        return(
            <View>
                <ListComponent 
                    data={this.props.topTv}
                    renderItem={this.renderItems.bind(this)}
                    columns={2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ImageStyle: {
        flex:6,
        width:'100%',          
        borderRadius:3,
    }
})


const mapStateToProps = (state) => {
    return{
        topTv : state.seriesReducer.Toptv
    }
}
export default connect(mapStateToProps, { get_series, selected_series })(TopRatedTV);