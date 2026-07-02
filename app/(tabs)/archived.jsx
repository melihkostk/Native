import React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Note from "../components/note";
import Sidebar from "../components/sidebar";
import { useNotes } from "../context/NotesContext";
const { height } = Dimensions.get('window');

export default function Archived() {

    const { archivedNotes, setArchivedNotes } = useNotes();

    const [sidebarShown, setSiderbarShown] = React.useState(false)

    return (
        <SafeAreaView>
            <Header setSiderbarShown={setSiderbarShown} title="Arşiv" searchShown="true" />
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            {archivedNotes && archivedNotes.length === 0 && <View style={styles.infoContainer}>
                <Image style={styles.infoImage} source={require("../../assets/images/archive.png")}></Image>
                <Text style={styles.infoText}>Arşivlenen notlarınız burada görünür</Text>
            </View>}
            <ScrollView contentContainerStyle={styles.notesContainer} style={styles.scrollContainer}>
                <View style={styles.notesContainer}>
                    {archivedNotes.map((item) => (
                        <Note
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            color={item.color}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.1
    },
    infoText: {
        fontSize: 18,
        color: "#5F6368",
        textAlign: "center"
    },
    infoImage: {
        margin: 20
    }
})