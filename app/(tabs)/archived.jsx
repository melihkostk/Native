import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
const { height } = Dimensions.get('window');

export default function Archived() {

    const [sidebarShown, setSiderbarShown] = React.useState(false)

    return (
        <SafeAreaView>
            <Header setSiderbarShown={setSiderbarShown} title="Arşiv" searchShown="true"/>
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            <View style={styles.infoContainer}>
                <Image style={styles.infoImage} source={require("../../assets/images/archive.png")}></Image>
                <Text style={styles.infoText}>Arşivlenen notlarınız burada görünür</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    infoContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:height * 0.1
    },
    infoText:{
        fontSize:18,
        color:"#5F6368",
        textAlign:"center"
    },
    infoImage:{
        margin:20
    }
})