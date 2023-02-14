import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Posts from './Posts';

export default function Feed() {
    const [posts, setPosts] = useState();
    useEffect(() => {
        fetch('https://express-ts-c8.web.app/photos')
            .then(res => res.json())
            .then(setPosts)
            .catch(console.error)
    }, [])

    return(
        <ScrollView style={styles.feed}>
            {!posts
            ? <Text style={styles.text}>Loading...</Text>
            : posts.map(post => (
                <Posts key={post.photoId} post={post} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    feed: {
        backgroundColor: '#3E423F',
        marginTop: 40,
        width: '100%',
    },
})