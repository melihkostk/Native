import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import Note from "../components/note";
import Sidebar from "../components/sidebar";
import { useNotes } from "../context/NotesContext";
const { height } = Dimensions.get('window');

export default function Archived() {
    const { t } = useTranslation()

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/archived/list", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setArchivedNotes(data)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const { archivedNotes, setArchivedNotes, setNotes } = useNotes();

    const [sidebarShown, setSiderbarShown] = React.useState(false)
    const [flexCol, setFlexCol] = React.useState(true);
    const [unArchive, setUnArchive] = React.useState(false)

    React.useEffect(() => {

        if (!unArchive) return

        const timer = setTimeout(() => {
            setUnArchive(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [unArchive])

    function restoreArchive(id) {
        const archived = archivedNotes.find(note => note.id === id)
        setArchivedNotes(prev => prev.filter(note => note.id !== id))
        setNotes(prev => [...prev, archived])
        setUnArchive(true)

        fetch(`https://demo.pigasoft.com/intern/melih-kostak/note/public/api/notes/${id}/archive`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                is_archived: false,
            }),
        })
    }

    if (loading) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <ActivityIndicator size="large" color="#1A73E8" />
                <Text>Yükleniyor...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            {sidebarShown && <View style={{flex:1 , backgroundColor:"rgba(0,0,0,0.4)" , position:"absolute" , top:0 , right:0 , left:0 , bottom:0 , zIndex:100}}></View>}
            <Header setSiderbarShown={setSiderbarShown} title="Arşiv" searchShown="true" flexCol={flexCol} setFlexCol={setFlexCol} />
            <Sidebar page="archived" sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            <View style={styles.mainContainer}>
                {archivedNotes && archivedNotes.length === 0 && <View style={styles.infoContainer}>
                    <Image style={styles.infoImage} source={require("../../assets/images/archive.png")}></Image>
                    <Text style={styles.infoText}>{t("archived.pageInfo")}</Text>
                </View>}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.notesContainer, !flexCol && styles.rowContainer]} style={styles.scrollContainer}>
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
                {unArchive && <View style={styles.deletedInfo}>
                    <Text style={styles.deletedInfoText}>{t("archived.unArchive")}</Text>
                </View>}
            </View>
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
    deletedInfo: {
        position: "absolute",
        bottom: 10,
        width: "95%",
        backgroundColor: "#212121",
        padding: 10,
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto"
    },
    deletedInfoText: {
        color: "white",
        fontWeight: "500",
        fontSize: 13
    },
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})