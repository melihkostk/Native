import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function NoteInput(props) {
    const [moreShown, setMoreShown] = React.useState(false);
    const [colorShown, setColorShown] = React.useState(false);

    function addNote() {

        if (props.title?.trim() || props.description?.trim()) {
            props.setNotes(prev => [
                ...prev,
                {
                    id: Date.now(),
                    title: props.title,
                    description: props.description,
                    color:props.color
                }
            ]);
        }
        props.setNoteInputShown(prev => !prev)
        props.setTitle("")
        props.setDescription("")
    }

    return (
        <SafeAreaView style={[styles.container , {backgroundColor : props.color}]}>
            <View style={styles.noteInputHeader}>
                <Pressable onPress={() => addNote()}>
                    <View>
                        <Image source={require("../../assets/images/back-arrow.png")}></Image>
                    </View>
                </Pressable>
                <View style={styles.headerRight}>
                    <View>
                        <Image style={styles.headerItems} source={require("../../assets/images/point.png")}></Image>
                    </View>
                    <View>
                        <Image style={styles.headerItems} source={require("../../assets/images/alert.png")}></Image>
                    </View>
                    <View>
                        <Image style={styles.headerItems} source={require("../../assets/images/small-archive.png")}></Image>
                    </View>
                </View>
            </View>
            <View style={styles.inputArea}>
                <TextInput value={props.title} onChangeText={props.setTitle} style={styles.inputTitle} placeholder="Başlık"></TextInput>
                <TextInput value={props.description} onChangeText={props.setDescription} style={styles.inputNote} placeholder="Not"></TextInput>
            </View>
            <View style={styles.noteInputFooter}>
                <View style={styles.footerLeft}>
                    <Image source={require("../../assets/images/add-box.png")}></Image>
                    <Pressable onPress={() => setColorShown(prev => !prev)}>
                        <Image source={require("../../assets/images/palette.png")}></Image>
                    </Pressable>
                </View>
                <View>
                    <Text>Düzenleme tarihi: 16:12</Text>
                </View>
                <View>
                    <Pressable onPress={() => setMoreShown(prev => !prev)}>
                        <Image source={require("../../assets/images/more.png")}></Image>
                    </Pressable>
                </View>
                {colorShown && <View style={styles.colorMenu}>
                    <Text>
                        Renk
                    </Text>
                    <View style={styles.colorOptions}>
                        <Pressable onPress={() => props.setColor("white")}>
                            <View style={styles.colorWhite}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#F0918A")}>
                            <View style={styles.colorPink}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#FBF180")}>
                            <View style={styles.colorYellow}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#CEFB98")}>
                            <View style={styles.colorGreen}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#ABFBEA")}>
                            <View style={styles.colorMint}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#CCEEF5")}>
                            <View style={styles.colorBlue}></View>
                        </Pressable>
                        <Pressable onPress={() => props.setColor("#D7B2F9")}>
                            <View style={styles.colorLila}></View>
                        </Pressable>
                    </View>
                </View>}
                {moreShown && <View style={styles.moreMenu}>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/small-delete.png")}></Image>
                        <Text>Sil</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/copy.png")}></Image>
                        <Text>Kopyasını oluştur</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/share.png")}></Image>
                        <Text>Gönder</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/person-add.png")}></Image>
                        <Text>Ortak çalışanlar</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/label.png")}></Image>
                        <Text>Etiketler</Text>
                    </View>
                    <View style={styles.moreOptions}>
                        <Image source={require("../../assets/images/feedback.png")}></Image>
                        <Text>Uygulama içi geri bildirim gönder</Text>
                    </View>
                </View>}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 100,
        padding: 10,
        flex: 1,
    },
    noteInputHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 14
    },
    headerRight: {
        display: "flex",
        flexDirection: "row",
        gap:25
    },
    noteInputFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        paddingBottom:35
    },
    footerLeft: {
        display: "flex",
        flexDirection: "row",
        gap:10
    },
    inputArea: {
        marginTop: 20,
        paddingHorizontal: 14
    },
    inputTitle: {
        fontSize: 20,
        paddingVertical:8
    },
    inputNote: {
        fontSize: 16,
        paddingVertical:8
        
    },
    moreMenu: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        zIndex: 100,
        right: 0,
        left: 0,
        padding: 10,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    moreOptions: {
        paddingVertical: 6,
        display: "flex",
        flexDirection: "row",
        gap: 8
    },
    colorMenu: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        left:0,
        right:0,
        padding:12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingBottom:40
    },
    colorOptions: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        paddingTop:6
    },
    colorWhite: {
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "white",
        borderWidth:1,
        borderColor:"black"
    },
    colorPink:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#F0918A",
        borderWidth:1,
        borderColor:"black"
    },
    colorYellow:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#FBF180",
        borderWidth:1,
        borderColor:"black"
    },
    colorGreen:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#CEFB98",
        borderWidth:1,
        borderColor:"black"
    },
    colorMint:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#ABFBEA",
        borderWidth:1,
        borderColor:"black"
    },
    colorBlue:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#CCEEF5",
        borderWidth:1,
        borderColor:"black"
    },
    colorLila:{
        width: 25,
        height: 25,
        borderRadius: "100%",
        backgroundColor: "#D7B2F9",
        borderWidth:1,
        borderColor:"black"
    }


})