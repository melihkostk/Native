import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Help() {
    const [input, setInput] = React.useState("")
    const [openItem, setOpenItem] = React.useState(null);
    const [languagesShown, setLanguagesShown] = React.useState(false)
    const [scrollEnabled, setScrollEnabled] = React.useState(true);

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingBottom: 20 }}>
            <View style={styles.helpHeader}>
                <View>
                    <Link href="/home">
                        <Image source={require("../../assets/images/close.png")}></Image>
                    </Link>
                </View>
                <View>
                    <Text style={styles.keepTitle}>Google Keep Yardım</Text>
                </View>
            </View>
            <ScrollView scrollEnabled={scrollEnabled} contentContainerStyle={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.keepIcon}>
                        <Image style={styles.keepIconImage} source={require("../../assets/images/keep.png")}></Image>
                    </View>
                    <Text style={styles.questionText}>Size nasıl yardımcı olabiliriz ?</Text>
                    <View style={styles.inputContainer}>
                        <Image style={styles.searchIcon} source={require("../../assets/images/search.png")}></Image>
                        <TextInput onChangeText={setInput} value={input} style={styles.questionInput} placeholder="Sorununuzu açıklayın"></TextInput>
                        {input.length > 0 && (
                            <Pressable onPress={() => setInput("")} style={styles.clearIcon}>
                                <Image source={require("../../assets/images/close.png")}></Image>
                            </Pressable>
                        )}
                    </View>
                </View>
                <View style={styles.helpContainer}>
                    <Text style={styles.helpItemsTitle}>Yardım konularına göz at</Text>
                    <View style={styles.helpItemsContainer}>
                        <Pressable onPress={() => setOpenItem(openItem === 1 ? null : 1)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Google Keep kullanmaya başlama</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 1 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Google Keep kullanma</Text>
                                <Text style={styles.subItemText}>Google Keep Chrome uzantısı kullanma</Text>
                                <Text style={styles.subItemText}>Liste, hatırlatıcı ve paylaşım ayarlarını değiştirme</Text>
                                <Text style={styles.subItemText}>Google Keep`i kullanmak için nelere ihtiyacınız var</Text>
                                <Text style={styles.subItemText}>Google ürünlerini yan yana kullanma</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 2 ? null : 2)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Not ve liste oluşturma ve düzenleme</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 2 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Not oluşturma ve düzenleme</Text>
                                <Text style={styles.subItemText}>Liste yapın</Text>
                                <Text style={styles.subItemText}>Resim not alma</Text>
                                <Text style={styles.subItemText}>Çizimi not olarak kaydetme</Text>
                                <Text style={styles.subItemText}>Crete a list with Gemini in Google Keep</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 3 ? null : 3)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Notları ve listeleri organize etme</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 3 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Notlarınızı organize etme</Text>
                                <Text style={styles.subItemText}>Not ve liste arşivleme</Text>
                                <Text style={styles.subItemText}>Android ana ekranınızda not alma</Text>
                                <Text style={styles.subItemText}>Notların sürüm geçmişini bulma</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 4 ? null : 4)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Not ve liste arama ve paylaşma</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 4 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Not ve liste arama</Text>
                                <Text style={styles.subItemText}>Not, liste ve çizim paylaşma</Text>
                                <Text style={styles.subItemText}>Başka bir uygulamaya Keeo notu gönderme</Text>
                                <Text style={styles.subItemText}>Keep notunu aile grubunuzla paylaşma</Text>
                                <Text style={styles.subItemText}>Dokümanda veya sunuda Google Keep`i kullanma</Text>
                                <Text style={styles.subItemText}>Google Keep`teki verilerinizi dışa aktarma</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 5 ? null : 5)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Hatırlatıcı oluşturma</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 5 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Notlarınız için hatırlatıcılar oluşturma</Text>
                                <Text style={styles.subItemText}>Google Hatırlatıcılar`daki verilerinizi dışarı aktarma</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 6 ? null : 6)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Araçlar ve sorun giderme</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 6 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Google Keep sorunlarını giderme</Text>
                                <Text style={styles.subItemText}>Google Keep için klavye kısayolları</Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 7 ? null : 7)} style={styles.helpItems}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Gemini in Keep</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 7 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Create a list with AI in Google Keep</Text>
                                <Text style={styles.subItemText}>Gemini ile Google Workspace`i kullanmaya başlama</Text>
                                <Text style={styles.subItemText}>Gemini ile Google Workspace`te desteklenen diller</Text>
                                <Text style={styles.subItemText}>Workspace uygulamalarında Gemini için kötüye kullanım bildirme</Text>
                                <Text style={styles.subItemText}>
                                    Gemini ile Google Workspace, kullanıcıları kötü amaçlı içeriklere ve istem
                                    enjeksiyonuna karşı nasıl korur?
                                </Text>
                            </View>)}
                        </Pressable>
                        <Pressable onPress={() => setOpenItem(openItem === 8 ? null : 8)} style={styles.lastHelpItem}>
                            <View style={styles.topic}>
                                <Text style={styles.helpItemsText}>Accessibility</Text>
                                <Image source={require("../../assets/images/down-arrow.png")}></Image>
                            </View>
                            {openItem === 8 && (<View style={styles.subItem}>
                                <Text style={styles.subItemText}>Google Keep`i ekran okuyucuyla kullanma</Text>
                            </View>)}
                        </Pressable>
                    </View>
                </View>
                <View style={styles.moreInfoContainer}>
                    <View style={styles.moreInfoTitle}>
                        <Text style={styles.moreHelp}>
                            Daha fazla yardıma mı ihtiyacınız var ?
                        </Text>
                        <Text style={styles.steps}>
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
                </View>
                <View style={styles.langMenu}>
                    <Pressable onPress={() => {setLanguagesShown(prev => !prev); setScrollEnabled(false)}} style={styles.languageSelect}>
                        <Text style={styles.languageTitle}>Dil</Text>
                        <Text style={styles.language}>Türkçe</Text>
                        <Image source={require("../../assets/images/down-arrow.png")}></Image>
                    </Pressable>
                    <Pressable onPress={() => {setLanguagesShown(prev => !prev); setScrollEnabled(true)}}>
                        <Image style={styles.darkIcon} source={require("../../assets/images/dark.png")}></Image>
                    </Pressable>
                </View>
                {languagesShown && <View style={styles.languagesMenu}>
                    <ScrollView>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Deutch</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>English</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                        <View style={styles.lang}>
                            <Text>Türkçe</Text>
                        </View>
                    </ScrollView>
                </View>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 7
    },
    helpHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#005F6A",
        paddingTop: 70,
        paddingBottom: 15,
        gap: 30,
        paddingHorizontal: 15
    },
    keepIcon: {
        width: 45,
        height: 45,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor: "white",
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
        paddingTop: 15,
        paddingBottom: 30
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "95%",
        paddingBottom: 70
    },
    inputContainer: {
        width: "100%",

    },
    questionInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 8,
        backgroundColor: "white"
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
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    lastHelpItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    helpItemsTitle: {
        paddingBottom: 15,
        fontWeight: "600",
    },
    helpItemsText: {
        fontWeight: "600",
        fontSize: 15
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
        fontSize: 18,
        textAlign: "center"
    },
    steps: {
        fontSize: 14,
        textAlign: "center"
    },
    keepTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 20
    },
    subItem: {
        backgroundColor: "#F3EEE7",
        width: "100%",
        paddingHorizontal: 20,
    },
    searchIcon: {
        position: "absolute",
        top: 13,
        left: 12,
        zIndex: 10
    },
    clearIcon: {
        position: "absolute",
        top: 13,
        right: 12
    },
    topic: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    subItemText: {
        paddingVertical: 10
    },
    langMenu: {
        marginTop: 40,
        width: "100%",
        maxWidth:"95%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: 30
    },
    languageSelect: {
        borderWidth: 2.5,
        borderColor: "#B0B0B0",
        padding: 10,
        paddingVertical: 13,
        position: "relative",
        borderRadius: 6,
        width: "35%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    languageTitle: {
        position: "absolute",
        top: -10,
        left: 12,
        backgroundColor: "white",
        fontSize: 13,
        color: "#2E2E2E",
        paddingHorizontal: 4
    },
    language: {
        color: "#4A4A4A"
    },
    darkIcon: {
        width: 30,
        height: 30
    },
    languagesMenu: {
        position: "absolute",
        backgroundColor: "#fff",
        top: 0,
        bottom: 3,
        left: 20,
        width: "50%",
        zIndex: 100,
        height: "100%",
        borderRadius: 8,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.4)',
        paddingTop:120
    },
    lang: {
        padding: 15
    }

})