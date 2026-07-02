import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Settings() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.settingsHeader}>
                    <Link href={"/"}>
                        <Image source={require("../../assets/images/close.png")}></Image>
                    </Link>
                    <Text style={styles.pageTitle}>Ayarlar</Text>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>Görüntüleme Seçenekleri</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>Yeni öğeleri alta ekle</Text>
                        <View style={styles.key}>
                            <View style={styles.button}></View>
                        </View>
                    </View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>İşaretlenen öğeleri alta taşı</Text>
                        <View style={styles.key}>
                            <View style={styles.button}></View>
                        </View>
                    </View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>Zengin bağlantı önizlemelerini göster</Text>
                        <View style={styles.key}>
                            <View style={styles.button}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>Paylaşım</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>Paylaşımı etkinleştir</Text>
                        <View style={styles.key}>
                            <View style={styles.button}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>Google</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.text}>Google uygulaması ayarları</Text>
                        <Image source={require("../../assets/images/arrow-right.png")}></Image>
                    </View>
                </View>
                <View style={styles.sections}>
                    <Text style={styles.title}>Hakkında</Text>
                    <View>
                        <Text style={styles.text}>Uygulama sürümü</Text>
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
    button: {
        position: "absolute",
        width: 20,
        height: 20,
        right: 2,
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