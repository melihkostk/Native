import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {

    const router = useRouter();
    const [emailInput, setEmailInput] = React.useState("");
    const [passwordInput, setPasswordInput] = React.useState("");
    const [emptyWarning, setEmptyWarning] = React.useState(false);
    const [notFoundWarning, setNotFoundWarning] = React.useState(false)

    function handleLogIn() {
        let email = "melih"
        let password = "123"
        if (emailInput !== "" && passwordInput !== "") {
            if (emailInput === email && passwordInput === password) {
                router.replace("/(tabs)/home");
                setNotFoundWarning(false)
            }
            else {
                setNotFoundWarning(true)
            }
            setEmptyWarning(false)
        }
        else {
            setNotFoundWarning(false)
            setEmptyWarning(true)
        }

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.helpHeader}>
                <Text style={styles.pageTitle}>Oturum açın - Google Hesapları</Text>
            </View>
            <View>
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Image style={styles.googleLogo} source={require("../../assets/images/google.png")}></Image>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.loginTitle}>Oturum açın</Text>
                        <Text style={styles.useAccount}>Google Hesabınızı kullanın</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput placeholderTextColor={emptyWarning ? "#EA4335" : "#202124"} value={emailInput} onChangeText={setEmailInput} style={[styles.inputs , emptyWarning && styles.wrongInput , notFoundWarning && styles.wrongInput]} placeholder="E-posta"></TextInput>
                        <TextInput  placeholderTextColor={emptyWarning ? "#EA4335" : "#202124"}  value={passwordInput} onChangeText={setPasswordInput} style={[styles.inputs , emptyWarning && styles.wrongInput , notFoundWarning && styles.wrongInput]} placeholder="Şifre"></TextInput>
                        {emptyWarning && <View style={styles.errorMesageContainer}>
                            <Image source={require("../../assets/images/error.png")}></Image>
                            <Text style={styles.errorMesage}>Bir e-posta adresi ve şifre girin</Text>
                        </View>}
                        {notFoundWarning && <View style={styles.errorMesageContainer}>
                            <Image source={require("../../assets/images/error.png")}></Image>
                            <Text style={styles.errorMesage}>Google Hesabınız bulunamadı</Text>
                        </View>}
                        <Text style={styles.blueText}>E-posta adresinizi mi unuttunuz ?</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.guest}>
                            <Text style={styles.authText}>Bu bilgisayar sizin değil mi? Oturum açmak için bir gizli göz atma penceresi kullanın.</Text>
                            <Text style={styles.blueText}>Misafir modunu kullanma hakkında daha fazla bilgi</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.buttonsContainer}>
                            <Pressable>
                                <Text style={styles.blueText}>Hesap oluşturun</Text>
                            </Pressable>
                            <Pressable onPress={() => handleLogIn()} style={styles.nextButton}>
                                <Text style={styles.nextButtonText}>Oturum aç</Text>
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
        fontWeight: "600"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },
    googleLogo: {
        width: 40,
        height: 40,
    },
    pageTitle: {
        color: "white",
        fontWeight: 600,
        fontSize: 18
    },
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    container: {
        width: "100%",
        maxWidth: "90%"
    },
    inputs: {
        borderWidth: 1,
        borderColor: "#202124",
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginBottom: 8,
        fontSize: 16
    },
    wrongInput: {
        borderWidth: 1,
        borderColor: "#EA4335",
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 4,
        marginBottom: 8,
        fontSize: 16
    },
    nextButton: {
        backgroundColor: "#1A73E8",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 18
    },
    nextButtonText: {
        color: "white",
        fontWeight: "600"
    },
    loginTitle: {
        fontSize: 32,
        paddingTop: 20,
        color: "#202124"
    },
    useAccount: {
        paddingTop: 10,
        paddingBottom: 30,
        color: "#202124",
        fontSize: 16
    },
    guest: {
        paddingTop: 30,
        display: "flex",
    },
    errorMesage: {
        color: "#EA4335",
        fontSize: 14,
        fontWeight: "600"
    },
    errorMesageContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    }



})