import { Link } from "expo-router"
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"

export default function Help() {
    return (
        <View style={{ flex: 1 , backgroundColor:"white" , paddingBottom:20}}>
            <View style={styles.helpHeader}>
                <View>
                    <Link href="/">
                        <Image source={require("../../assets/images/close.png")}></Image>
                    </Link>
                </View>
                <View>
                    <Text style={styles.keepTitle}>Google Keep Yardım</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.keepIcon}>
                        <Image style={styles.keepIconImage} source={require("../../assets/images/keep.png")}></Image>
                    </View>
                    <Text style={styles.questionText}>Size nasıl yardımcı olabiliriz ?</Text>
                    <TextInput style={styles.questionInput} placeholder="Sorununuzu açıklayın"></TextInput>
                </View>
                <View style={styles.helpContainer}>
                    <Text style={styles.helpItemsTitle}>Yardım konularına göz at</Text>
                    <View style={styles.helpItemsContainer}>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Google Keep kullanmaya başlama</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Not ve liste oluşturma ve düzenleme</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Notları ve listeleri organize etme</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Not ve liste arama ve paylaşma</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Hatırlatıcı oluşturma</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Araçlar ve sorun giderme</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Gemini in Keep</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                        <View style={styles.helpItems}>
                            <Text style={styles.helpItemsText}>Accessibility</Text>
                            <Image source={require("../../assets/images/down-arrow.png")}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.moreInfoContainer}>
                    <View style={styles.moreInfoTitle}>
                        <Text style={styles.moreHelp}>
                            Daha fazla yardıma mı ihtiyacınız var ?
                        </Text>
                        <Text>
                            Bir sonraki adımları deneyin
                        </Text>
                    </View>
                    <View style={styles.communityContainer}>
                        <View>
                            <Text style={styles.helpItemsText}>
                                Yardım topluluğunda yayınlayın
                            </Text>
                            <Text>
                                Topluluk üyelerinden sorularınıza cevap alın
                            </Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:7
    },
    helpHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor:"#005F6A",
        paddingTop:70,
        paddingBottom:15,
        gap:30,
        paddingHorizontal:15
    },
    keepIcon: {
        width: 45,
        height: 45,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor:"white",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    keepIconImage: {
        width: 35,
        height: 35
    },
    questionText: {
        fontSize: 28,
        textAlign: "center",
        paddingTop:15,
        paddingBottom:30
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "95%",
        paddingBottom: 70
    },
    questionInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        backgroundColor:"white"
    },
    helpContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        maxWidth: "95%"
    },
    helpItemsContainer: {
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        borderRadius: 8
    },
    helpItems: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    helpItemsTitle: {
        paddingBottom: 15,
        fontWeight: "600"
    },
    helpItemsText: {
        fontWeight: "600"
    },
    moreInfoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "95%",
        borderTopWidth: 1,
        borderTopColor: "gray",
        marginTop: 28,
        paddingTop: 20
    },
    moreInfoTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    communityContainer: {
        backgroundColor: "#D2E3FC",
        width: "100%",
        marginTop: 20,
        padding: 20,
        borderRadius: 16
    },
    moreHelp: {
        fontSize: 18
    },
    keepTitle: {
        color:"white",
        fontWeight:"600",
        fontSize:"21"
    }


})