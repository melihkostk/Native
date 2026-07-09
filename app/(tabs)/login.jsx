import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export default function Login() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.helpHeader}>
                <Image source={require("../../assets/images/close.png")}></Image>
                <Text style={styles.pageTitle}>Oturum açın - Google Hesapları</Text>
            </View>
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Image style={styles.googleLogo} source={require("../../assets/images/google.png")}></Image>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.loginTitle}>Oturum açın</Text>
                        <Text>Google Hesabınızı kullanın</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput style={styles.inputs} placeholder="E-posta"></TextInput>
                        <TextInput style={styles.inputs} placeholder="Şifre"></TextInput>
                        <Text style={styles.blueText}>E-posta adresinizi mi unuttunuz ?</Text>
                    </View>
                    <View style={styles.container}>
                        <View>
                            <Text>Bu bilgisayar sizin değil mi? Oturum açmak için bir gizli göz atma penceresi kullanın.</Text>
                            <Text style={styles.blueText}>Misafir modunu kullanma hakkında daha fazla bilgi</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.buttonsContainer}>
                            <Pressable>
                                <Text style={styles.blueText}>Hesap oluşturun</Text>
                            </Pressable>
                            <Pressable style={styles.nextButton}>
                                <Text style={styles.nextButtonText}>Sonraki</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    blueText: {
        color: "#1A73E8",
        fontWeight:"600"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingTop:40
    },
    googleLogo: {
        width: 40,
        height: 40,
    },
    pageTitle: {
        color: "white",
        fontWeight: 600,
        fontSize: 20
    },
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "100%",
        maxWidth: "90%"
    },
    inputs:{
        borderWidth:1,
        borderColor:"black",
        paddingVertical:10,
        paddingHorizontal:16,
        borderRadius:4,
    },
    nextButton:{
        backgroundColor:"#1A73E8",
        paddingVertical:8,
        paddingHorizontal:20,
        borderRadius:18
    },
    nextButtonText:{
        color:"white",
        fontWeight:"600"
    },
    loginTitle:{
        fontSize:32,
        fontWeight:"600"
    }

})