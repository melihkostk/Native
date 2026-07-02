import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
const { height } = Dimensions.get('window');

export default function Deleted() {

    const [sidebarShown, setSiderbarShown] = React.useState(false)

    return (
        <SafeAreaView>
            <Header setSiderbarShown={setSiderbarShown} title="Çöp Kutusu" searchShown="false"/>
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Çöp Kutusundaki notlar 7 gün sonra silinir.</Text>
                    <Text style={styles.deleteAll}>Çöp Kutusunu Boşalt</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Image source={require("../../assets/images/delete.png")}></Image>
                    <Text style={styles.infoText}>Çöp Kutusunda not yok</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:height * 0.1
    },
    title:{
        paddingTop:24,
        paddingBottom:8,
        textAlign:"center",
        fontSize:17,
        color:"#202124",
        fontStyle:"italic"
    },
    infoText:{
        fontSize:18,
        color:"#5F6368",
        textAlign:"center"
    },
    deleteAll:{
        fontSize:14,
        fontWeight:600,
        color:"#cdcdcd"
    },
    titleContainer:{
        display:"flex",
        alignItems:"flex-end"
    }
})