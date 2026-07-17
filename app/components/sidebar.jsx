import { Link } from "expo-router";
import { useRef } from "react";
import { Animated, Dimensions, Image, PanResponder, SafeAreaView, StyleSheet, Text, View } from "react-native";
const { height } = Dimensions.get('window');

export default function Sidebar(props) {

    const pan = useRef(new Animated.ValueXY()).current;
    const AnimatedSafeAreaView =
        Animated.createAnimatedComponent(SafeAreaView);

    const panResponder = useRef(
        PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
            },

            onPanResponderMove: (_, gestureState) => {
                pan.setValue({
                    x: Math.min(0, gestureState.dx),
                    y: 0,
                });
            },

            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -50) {
                    Animated.timing(pan.x, {
                        toValue: -300,
                        duration: 200,
                        useNativeDriver: false,
                    }).start(() => {
                        props.setSiderbarShown(prev => !prev);
                        pan.setValue({ x: 0, y: 0 });
                    });

                    return;
                }

                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        }),
    ).current;
    return (
        props.sidebarShown && (
            <AnimatedSafeAreaView {...panResponder.panHandlers} style={[styles.sidebarComponent, {
                transform: [
                    { translateX: pan.x },
                ],
            }]}>
                <View style={styles.firstSection}>
                    <Image style={styles.icon} source={require("../../assets/images/google.png")}></Image>
                    <Text style={styles.title}>Keep</Text>
                </View>
                <View style={styles.secondSection}>
                    <Link href={"/home"} style={[styles.linkContainer, props.page === "home" && styles.activeLinkContainer]}>
                        <View style={styles.linkImage}>
                            <Image source={props.page === "home" ? require("../../assets/images/blue-bulb.png") : require("../../assets/images/gray-bulb.png")}/>
                            <Text style={[styles.links, props.page === "home" && styles.activeLink]}>Notlar</Text>
                        </View>
                    </Link>
                    <Link href={"/archived"} style={[styles.linkContainer, props.page === "archived" && styles.activeLinkContainer]}>
                        <View style={styles.linkImage}>
                            <Image source={props.page === "archived" ? require("../../assets/images/blue-archive.png") : require("../../assets/images/gray-archive.png")}/>
                            <Text style={[styles.links, props.page === "archived" && styles.activeLink]}>Arşiv</Text>
                        </View>
                    </Link>
                    <Link href={"/deleted"} style={[styles.linkContainer, props.page === "deleted" && styles.activeLinkContainer]}>
                        <View style={styles.linkImage}>
                            <Image source={props.page === "deleted" ? require("../../assets/images/blue-delete.png") : require("../../assets/images/gray-delete.png")}/>
                            <Text style={[styles.links, props.page === "deleted" && styles.activeLink]}>Çöp Kutusu</Text>
                        </View>
                    </Link>
                </View>
                <View style={styles.thirdSection}>
                    <Link href={"/settings"} style={styles.linkContainer}>
                        <View style={styles.linkImage}>
                            <Image source={require("../../assets/images/gray-settings.png")}></Image>
                            <Text style={styles.links}>Ayarlar</Text>
                        </View>
                    </Link>
                    <Link href={"/help"} style={styles.linkContainer}>
                        <View style={styles.linkImage}>
                            <Image source={require("../../assets/images/gray-help.png")}></Image>
                            <Text style={styles.links}>Yardım</Text>
                        </View>
                    </Link>
                </View>
            </AnimatedSafeAreaView>)
    )
}

const styles = StyleSheet.create({
    sidebarComponent: {
        position: "absolute",
        left: 0,
        backgroundColor: "white",
        zIndex: 120,
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
        color: "#5F6368",
        fontWeight: "500"
    },
    firstSection: {
        borderBottomWidth: 1,
        borderColor: "#e5e5e5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    secondSection: {
        borderBottomWidth: 1,
        borderColor: "#e5e5e5",
        paddingRight: 10,
        paddingVertical: 10
    },
    thirdSection: {
        paddingRight: 10,
        paddingVertical: 10
    },
    links: {
        fontWeight: 600,
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: "#5F6368",
    },
    activeLink: {
        color: "#1A73E8",
        fontWeight: 600,
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    linkContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    activeLinkContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        backgroundColor: "#E8F0FD",
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    icon: {
        width: 25,
        height: 25
    },
    linkImage: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15
    }
})