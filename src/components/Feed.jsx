import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
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
            {!posts 
            ? <Text>Loading...</Text>
            : posts.map(post => (
                <Post key={post.photoId} post={post} navigation={navigation} />
            ))}
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: '#4B4F4D',
        width: '100%',
    }
})