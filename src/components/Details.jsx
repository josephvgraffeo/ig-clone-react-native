import { useContext } from "react";
import { View } from "react-native";
import Post from "./Post";
import { PostContext } from "../../App";

export default function Details() {
    const { currentPost } = useContext(PostContext);
    
    return (
        <View>
            <Post post={currentPost}/>
        </View>
    )
}