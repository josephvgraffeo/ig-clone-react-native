import { useContext } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PostContext } from '../../App.js';


export default function Post({ post, navigation }) {
    const { setCurrentPost } = useContext(PostContext)
    const handleTouch = () => {
        setCurrentPost(post)
        navigation.navigate('Details')
    }

    return (
        <TouchableOpacity onPress={handleTouch}>
            <View style={styles.post}>
                <Image style={styles.image} source={{ uri: post.photo}} />
                <Text style={styles.title}>{post.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        margin: 20, 
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#77D6FF', 
        shadowColor: 'black', 
        shadowOffset: { width: 1, height: 2},
        shadowOffset: {
            width: "10",
            height: "10",
          },
          shadowOpacity: "1",
          shadowRadius: "10",
          shadowColor: 'black'
    }, 

    image: {
        width: "100%", 
        height: 295,
        marginBottom: 10,
        borderRadius: 10,
    },

    title: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 4,
    },
})
