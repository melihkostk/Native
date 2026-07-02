import React from "react";
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";
import Note from "../components/note";
import Sidebar from "../components/sidebar";
import { useNotes } from "../context/NotesContext";
const { height } = Dimensions.get('window');

export default function Deleted() {

    const { deletedNotes , setDeletedNotes } = useNotes();

    const [sidebarShown, setSiderbarShown] = React.useState(false)

    return (
        <SafeAreaView>
            <Header setSiderbarShown={setSiderbarShown} title="Çöp Kutusu" searchShown="false" />
            <Sidebar sidebarShown={sidebarShown} setSiderbarShown={setSiderbarShown} />
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Çöp Kutusundaki notlar 7 gün sonra silinir.</Text>
                    <Pressable onPress={() => setDeletedNotes([])}>
                        <Text style={styles.deleteAll}>Çöp Kutusunu Boşalt</Text>
                    </Pressable>
                </View>
                {deletedNotes && deletedNotes.length === 0 && <View style={styles.infoContainer}>
                    <Image source={require("../../assets/images/delete.png")}></Image>
                    <Text style={styles.infoText}>Çöp Kutusunda not yok</Text>
                </View>}
                <ScrollView contentContainerStyle={styles.notesContainer} style={styles.scrollContainer}>
                    <View style={styles.notesContainer}>
                        {deletedNotes.map((item) => (
                            <Note
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                color={item.color}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
    titleContainer: {
        display: "flex",
        alignItems: "flex-end"
    }
})