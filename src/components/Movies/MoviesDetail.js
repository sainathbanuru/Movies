import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import Card from '../common/Card';
import { connect } from 'react-redux';

class MoviesDetail extends Component{
    static navigationOptions = {
        title: 'Movie Details',
        drawerLabel:'current movies',
        headerTintColor: 'white',
        headerStyle:{
            backgroundColor: '#E91E63',
            height: 45
        },
        headerTitleStyle:{
            marginLeft: 0
        },
    }

    state={
        movieDetails: {}
    }

    componentWillMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.movie}?api_key=10b93db8c4746659e0310e8b4ce416e2&language=en-US&page=1&region=IN`)
        .then((response) => response.json())
        .then((responseJson) => this.setState({movieDetails : responseJson}))
        .catch((error) => console.log(error));
    }

    render(){

        const { posterImage, smallImage, marginLine, textStyle } = styles;

        return(
            
            <ScrollView>

                <Card style={{ flex: 1}}>
                    <View style={{ height: 300}}>
                        <Image
                            style={ posterImage }
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${this.state.movieDetails.backdrop_path}`}}
                        />
                        <Image 
                            style={ smallImage }
                            source={{uri: `https://image.tmdb.org/t/p/w342/${this.state.movieDetails.poster_path}`}}
                        />
                    </View>

                    <View style={ marginLine }/>

                    <View style={{ padding: 10}}>
                        <Text style={textStyle}>Overview</Text>
                        <Text >{this.state.movieDetails.overview}</Text>
                    </View>

                    <View style={marginLine}/> 

                    <View style={{ padding: 10}}>
                        <Text style={ textStyle }>Tagline</Text>
                        <Text >{this.state.movieDetails.tagline}</Text>
                    </View>

                    <View style={{borderColor: '#90A4AE', borderWidth:1, margin:5}}/>    
                </Card>

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    marginLine: {
        borderColor: '#90A4AE', 
        borderWidth:1, 
        margin:5
    },

    posterImage: { 
        width: '100%',
        borderRadius: 3,
        height: 250, 
        paddingBottom: 5
    },

    smallImage: { 
        width: '40%', 
        borderRadius:5, 
        height:180, 
        resizeMode:'stretch', 
        position: 'absolute',
        bottom: 10, 
        left:30
    },
    textStyle: { 
        fontSize: 28, 
        fontWeight:'100'
    }
    
});

const mapStateToProps = (state) =>{
    return{
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MoviesDetail);