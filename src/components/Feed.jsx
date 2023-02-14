import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, ImageBackground } from "react-native";
import Post from './Post'

export default function Feed({ navigation }) {
    const [posts, setPosts] = useState();
    useEffect(()=>{
        fetch('https://express-ts-c8.web.app/photos')
        .then(res => res.json())
        .then(setPosts)
        .catch(console.error)
    }, [])
    return (
        <ScrollView style={styles.feed}>
            <ImageBackground
            source={require('../../assets/igclone.webp')}
            resizeMode="cover"
            style={styles.bg}>
            {!posts 
            ? <Text>Loading...</Text>
            : posts.map(post => (
                <Post key={post.photoId} post={post} navigation={navigation} />
            ))}
            </ImageBackground>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: '#3A58AE',
        width: '100%',
    },

    bg: {
        flex: 1,
        justifyContent:'center'
    },
})