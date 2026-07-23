import { Link } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {

    const [newItem, setNewItem] = React.useState(true);
    const [moveDown, setMoveDown] = React.useState(true);
    const [preview, setPreview] = React.useState(true);
    const [share, setShare] = React.useState(true);
    const { t } = useTranslation();


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.settingsHeader}>
                    <Link href={"/home"}>
                        <Image source={require("../../assets/images/close.png")}></Image>
                    </Link>
                    <Text style={styles.pageTitle}>{t("sidebar.notes")}</Text>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>{t("settings.h1")}</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>{t("settings.s1")}</Text>
                        <Pressable onPress={() => setNewItem(prev => !prev)}  style={[styles.key , !newItem && styles.inActiveKey]}>
                            <View style={[styles.button , !newItem && styles.inActiveButton]}></View>
                        </Pressable>
                    </View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>{t("settings.s2")}</Text>
                        <Pressable onPress={() => setMoveDown(prev => !prev)} style={[styles.key , !moveDown && styles.inActiveKey]}>
                            <View style={[styles.button , !moveDown && styles.inActiveButton]}></View>
                        </Pressable>
                    </View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>{t("settings.s3")}</Text>
                        <Pressable onPress={() => setPreview(prev => !prev)} style={[styles.key , !preview && styles.inActiveKey]}>
                            <View style={[styles.button , !preview && styles.inActiveButton]}></View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>{t("settings.h2")}</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>{t("settings.s4")}</Text>
                        <Pressable onPress={() => setShare(prev => !prev)} style={[styles.key , !share && styles.inActiveKey]}>
                            <View style={[styles.button , !share && styles.inActiveButton]}></View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>{t("settings.h3")}</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>{t("settings.s5")}</Text>
                        <Image source={require("../../assets/images/arrow-right.png")}></Image>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>{t("settings.h4")}</Text>
                    <View>
                        <Text style={styles.text}>{t("settings.s6")}</Text>
                        <Text style={styles.version}>2.2026.25100</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 12
    },
    title: {
        color: "#1A73E8",
        fontWeight: 600,
        fontSize: 13
    },
    pageTitle: {
        color: "#333333",
        fontSize: 18,
        marginLeft: "auto",
        marginRight: "auto"
    },
    text: {
        color: "#202124",
        fontSize: 14,
        fontWeight: "400"
    },
    version: {
        fontSize: 13,
        color: "#808080"
    },
    settingsHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: 10,
    },
    key: {
        backgroundColor: "#1A73E8",
        width: 45,
        height: 25,
        borderRadius: 30,
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    inActiveKey:{
        backgroundColor: "#DCDCDC",
        width: 45,
        height: 25,
        borderRadius: 30,
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    button: {
        position: "absolute",
        width: 20,
        height: 20,
        right: 2,
        backgroundColor: "white",
        borderRadius: "100%"
    },
    inActiveButton:{
        position: "absolute",
        width: 20,
        height: 20,
        left: 2,
        backgroundColor: "white",
        borderRadius: "100%"
    },
    settingsItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 6
    },
    arrow: {
        width: 20,
        height: 20
    },
    sections: {
        paddingVertical: 10
    }
})