import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import ListComponent from '../common/ListComponent';
import Card from '../common/Card';
import currentMoviesUrl from '../../utils/ApiCalls';
import  Icon from 'react-native-vector-icons/Octicons';
import { select_movie, get_movies } from '../../actions';
import { CURRENT_MOVIES } from '../../utils/Constants';

class CurrentMovies extends Component{

    static navigationOptions= ({navigation}) => ({
        title: 'Movies running',
        drawerLabel:'current movies',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#E91E63',
            height: 45
        },
        headerTitleStyle:{
            marginLeft: 0
        },
        headerLeft:<Icon 
            name='three-bars' 
            color='white' 
            style={{ fontSize: 24, marginLeft: 20, marginRight: 0}} 
            onPress={() => navigation.navigate('DrawerOpen')}
            />
    })


    state = {
        movies : [],
    }

    componentWillMount(){ 
        this.props.get_movies('https://api.themoviedb.org/3/movie/now_playing?api_key=10b93db8c4746659e0310e8b4ce416e2&language=en-US&page=1', CURRENT_MOVIES);    
    }

    
    moviesDetail(item){
        const { navigate } = this.props.navigation;
        navigate('moviesDetail');
    }

    renderItems({item, index}){
        return(

                <Card style={{ height: 240}} onPress={() => {this.props.select_movie(item.id), this.props.navigation.navigate('moviesDetail',{movies: item})}}>
                    <Image 
                        style={styles.ImageStyle}                
                        source={{ uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`}}
                        resizeMode='stretch'
                    />
                    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:5}}>
                        <View style={{ flex:5}}>
                            <Text>{item.title}</Text>
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
                data={this.props.currentMovies}
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
      }
});

const mapStateToProps = (state) => {
    return {
        currentMovies: state.moviesReducer.CurrentMovies
    }
}
export default connect(mapStateToProps, { select_movie, get_movies })(CurrentMovies);