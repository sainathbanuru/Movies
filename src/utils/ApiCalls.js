
const API_KEY = '10b93db8c4746659e0310e8b4ce416e2'
export function currentMoviesUrl () {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
}

export function renderItems({item, index}){
    return(
        <Card>
            <Image 
                style={styles.ImageStyle}                
                source={{ uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}`}}
                resizeMode='stretch'
            />
            <View style={{ flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:5}}>
                <View style={{ flex:5}}>
                    <Text>{item.original_title}</Text>
                </View>
            <View style={{ flex:1}}>
                <Text>{item.vote_average}</Text>
            </View>    
            </View>
        </Card>
    );
}