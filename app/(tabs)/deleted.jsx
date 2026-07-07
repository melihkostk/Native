import React from "react";
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Note from "../components/note";
import Sidebar from "../components/sidebar";
import { useNotes } from "../context/NotesContext";
const { height } = Dimensions.get('window');

export default function Deleted() {

    const { deletedNotes, setDeletedNotes, setNotes } = useNotes();
    const [sidebarShown, setSiderbarShown] = React.useState(false)
    const [deleteWarning, setDeleteWarning] = React.useState(false)
    const [savedInfo, setSavedInfo] = React.useState(false)
    const [deletedInfo, setDeletedInfo] = React.useState(false)
    const [flexCol, setFlexCol] = React.useState(true);

    function deletePerma(id) {
        const remaining = deletedNotes.filter(note => note.id !== id);
        setDeletedNotes(remaining)
        setDeletedInfo(prev => !prev)
    }

    function restoreThrash(id) {
        const restored = deletedNotes.find(note => note.id === id);
        const remaining = deletedNotes.filter(note => note.id !== id);
        setDeletedNotes(remaining);
        setNotes(prev => [...prev, restored]);
        setSavedInfo(prev => !prev)
    }

    React.useEffect(() => {
        if (!savedInfo) return;

        const timer = setTimeout(() => {
            setSavedInfo(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [savedInfo]);

    React.useEffect(() => {
        if (!deletedInfo) return;
        const timer = setTimeout(() => {
            setDeletedInfo(prev => !prev)
        }, 3000)
        return () => clearTimeout(timer)
    }, [deletedInfo])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header setSiderbarShown={setSiderbarShown} title="Çöp Kutusu" searchShown="false" setFlexCol={setFlexCol} />
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Çöp Kutusundaki notlar 7 gün sonra silinir.</Text>
                    <Pressable onPress={() => setDeleteWarning(prev => !prev)}>
                        <Text style={[styles.deleteAll, deletedNotes.length > 0 && styles.activeDeleteAll]}>Çöp Kutusunu Boşalt</Text>
                    </Pressable>
                </View>
                {deletedNotes && deletedNotes.length === 0 && <View style={styles.infoContainer}>
                    <Image source={require("../../assets/images/delete.png")}></Image>
                    <Text style={styles.infoText}>Çöp Kutusunda not yok</Text>
                </View>}
                {deleteWarning && deletedNotes.length > 0 && <View style={styles.deleteWarningContainer}>
                    <View>
                        <Text style={styles.warningTitle}>Çöp Kutusu boşaltılsın mı ? </Text>
                    </View>
                    <View>
                        <Text style={styles.warningMessage}>Çöp Kutusundaki tüm notlar kalısı olarak silinecektir.</Text>
                    </View>
                    <View style={styles.deleteButtonsContainer}>
                        <Pressable onPress={() => setDeleteWarning(prev => !prev)}>
                            <Text style={styles.deleteButtons}>İptal</Text>
                        </Pressable>
                        <Pressable onPress={() => { setDeletedNotes([]); setDeleteWarning(prev => !prev) }}>
                            <Text style={styles.deleteButtons}>Çöp Kutusu`nu boşalt</Text>
                        </Pressable>
                    </View>
                </View>}
                <ScrollView contentContainerStyle={[styles.notesContainer , !flexCol && styles.rowContainer]} style={styles.scrollContainer}>
                    <View style={[styles.notesContainer , !flexCol && styles.rowContainer]}>
                        {deletedNotes.map((item) => (
                            <Note
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                color={item.color}
                                setDeletedNotes={setDeletedNotes}
                                deletedNotes={deletedNotes}
                                deletePerma={deletePerma}
                                restoreThrash={restoreThrash}
                                page="deleted"
                                flexCol={flexCol}
                            />
                        ))}
                    </View>
                </ScrollView>
                {savedInfo && <View style={styles.deletedInfo}>
                    <Text style={styles.deletedInfoText}>Not geri yüklendi</Text>
                </View>}
                {deletedInfo && <View style={styles.deletedInfo}>
                    <Text style={styles.deletedInfoText}>Not kalıcı olarak silindi</Text>
                </View>}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    infoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.1
    },
    title: {
        paddingTop: 24,
        paddingBottom: 8,
        textAlign: "center",
        fontSize: 17,
        color: "#202124",
        fontStyle: "italic"
    },
    infoText: {
        fontSize: 18,
        color: "#5F6368",
        textAlign: "center"
    },
    deleteAll: {
        fontSize: 14,
        fontWeight: 600,
        color: "#cdcdcd"
    },
    activeDeleteAll: {
        fontSize: 14,
        fontWeight: 600,
        color: "#1A73E8"
    },
    scrollContainer: {
        width: "100%",
        flex: "1",
        height: "100%"
    },
    notesContainer: {
        display: "flex",
        width: "100%",
        gap: 8,
        marginTop: 8,
        alignItems: "center",
        justifyContent: "flex-start",
        flex: "1",
        paddingBottom: 40
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
    titleContainer: {
        display: "flex",
        alignItems: "flex-end"
    },
    deleteWarningContainer: {
        backgroundColor: "white",
        width: "95%",
        padding: 15,
        borderRadius: 8,
        position: "absolute",
        zIndex: 50,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        top: "30%",

    },
    warningTitle: {
        fontWeight: "600"
    },
    warningMessage: {
        paddingVertical: 20
    },
    deleteButtonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    deleteButtons: {
        color: "#1A73E8",
        fontWeight: "600",
        padding: 8
    },
    deletedInfo: {
        position: "absolute",
        bottom: 10,
        width: "95%",
        backgroundColor: "#212121",
        padding: 10,
        borderRadius: 6
    },
    deletedInfoText: {
        color: "white",
        fontWeight: "500",
        fontSize: 13
    }
})