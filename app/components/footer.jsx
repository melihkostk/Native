import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Footer(props) {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footer}>
                <View style={styles.footerLinks}>
                    <Image source={require("../../assets/images/brush.png")}></Image>
                </View>
                <View style={styles.footerLinks}>
                    <Image source={require("../../assets/images/mic.png")}></Image>
                </View>
                <Link href={"/cameraPage"} style={styles.footerLinks}>
                    <Image source={require("../../assets/images/img.png")}></Image>
                </Link>
            </View>
            <Pressable onPress={() => props.setNoteInputShown(prev => !prev)} style={styles.plusButton}>
                <View>
                    <Image style={styles.buttonImage} source={require("../../assets/images/add.png")}></Image>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 14,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        paddingBottom:35
    },
    footer: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        position: "relative",
        gap:15
    },
    plusButton: {
        position: "absolute",
        right: 30,
        bottom: 60,
        backgroundColor: "white",
        padding: 12,
        borderRadius: "100%",
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)',
    },
    buttonImage:{
        width:30,
        height:30
    },
    footerLinks:{
        padding:6
    },
});