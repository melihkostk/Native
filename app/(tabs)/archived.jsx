import React from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Note from "../components/note";
import Sidebar from "../components/sidebar";
import { useNotes } from "../context/NotesContext";
const { height } = Dimensions.get('window');

export default function Archived() {

    const { archivedNotes, setArchivedNotes, setNotes } = useNotes();

    const [sidebarShown, setSiderbarShown] = React.useState(false)
    const [flexCol, setFlexCol] = React.useState(true);

    function restoreArchive(id) {
        const archived = archivedNotes.find(note => note.id === id)
        setArchivedNotes(prev => prev.filter(note => note.id !== id))
        setNotes(prev => [...prev, archived])
    }

    return (
        <SafeAreaView>
            <Header setSiderbarShown={setSiderbarShown} title="Arşiv" searchShown="true" flexCol={flexCol} setFlexCol={setFlexCol} />
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            {archivedNotes && archivedNotes.length === 0 && <View style={styles.infoContainer}>
                <Image style={styles.infoImage} source={require("../../assets/images/archive.png")}></Image>
                <Text style={styles.infoText}>Arşivlenen notlarınız burada görünür</Text>
            </View>}
            <ScrollView contentContainerStyle={[styles.notesContainer, !flexCol && styles.rowContainer]} style={styles.scrollContainer}>
                <View style={[styles.notesContainer, !flexCol && styles.rowContainer]}>
                    {archivedNotes.map((item) => (
                        <Note
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            color={item.color}
                            restoreArchive={restoreArchive}
                            page="archived"
                            flexCol={flexCol}
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
    },
    scrollContainer: {
        width: "100%",
    },
    notesContainer: {
        display: "flex",
        width: "100%",
        gap: 8,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    rowContainer: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30
    },
})