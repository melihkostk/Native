import { Link } from "expo-router";
import { useRef } from "react";
import { Dimensions, Image, PanResponder, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
const { height } = Dimensions.get('window');

export default function Sidebar(props) {

    const panResponder = useRef(
        PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderMove: (_, gestureState) => { },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -50) {
                    props.setSiderbarShown(prev => !prev)
                }
            },
        }),
    ).current;
    return (
        props.sidebarShown && (
            <SafeAreaView {...panResponder.panHandlers} style={styles.sidebarComponent}>
                <View style={styles.firstSection}>
                    <Image style={styles.icon} source={require("../../assets/images/google.png")}></Image>
                    <Text style={styles.title}>Keep</Text>
                </View>
                <View style={styles.secondSection}>
                    <Pressable style={styles.linkContainer}>
                        <Image source={require("../../assets/images/small-bulb.png")}></Image>
                        <Link style={styles.links} href={"/"}>Notlar</Link>
                    </Pressable>
                    <Pressable style={styles.linkContainer}>
                        <Image source={require("../../assets/images/small-archive.png")}></Image>
                        <Link style={styles.links} href={"/archived"}>Arşiv</Link>
                    </Pressable>
                    <Pressable style={styles.linkContainer}>
                        <Image source={require("../../assets/images/small-delete.png")}></Image>
                        <Link style={styles.links} href={"/deleted"}>Çöp Kutusu</Link>
                    </Pressable>
                </View>
                <View style={styles.thirdSection}>
                    <Pressable style={styles.linkContainer}>
                        <Image source={require("../../assets/images/small-settings.png")}></Image>
                        <Link style={styles.links} href={"/settings"}>Ayarlar</Link>
                    </Pressable>
                    <Pressable style={styles.linkContainer} onPress={() => props.setSiderbarShown(prev => !prev)}>
                        <Image source={require("../../assets/images/help.png")}></Image>
                        <Link style={styles.links} href={"/"}>Yardım</Link>
                    </Pressable>
                </View>
            </SafeAreaView>)
    )
}

const styles = StyleSheet.create({
    sidebarComponent: {
        position: "absolute",
        left: 0,
        backgroundColor: "white",
        zIndex: 50,
        height: height,
        width: "70%",
        padding: 8,
        top: 0,
        bottom: 0,
        borderRightWidth: 1,
        borderRightColor: "#e5e5e5"
    },
    title: {
        fontSize: 18,
        color: "gray"
    },
    firstSection: {
        borderBottomWidth: 1,
        borderColor: "#e5e5e5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        paddingHorizontal: 20
    },
    secondSection: {
        borderBottomWidth: 1,
        borderColor: "#e5e5e5",
        paddingHorizontal: 10
    },
    thirdSection: {
        paddingHorizontal: 10
    },
    links: {
        fontWeight: 600,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: "#5F6368"
    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8
    }
})