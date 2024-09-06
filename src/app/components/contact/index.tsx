import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export type ContactProps = {
    name: string
    image?: ImageProps
}

export function Contact() {
    return <TouchableOpacity style={styles.container}>
        <Avatar name="Pedro" image={require("@/assets/avatar.jpeg")} />
        <Text style={styles.name}>Pedro</Text>

    </TouchableOpacity>
}