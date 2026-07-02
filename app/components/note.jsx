import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Note(props) {

    function deleteNote(id) {
        const deleted = props.notes.find(note => note.id === id)
        const remaining = props.notes.filter(note => note.id !== id)
        props.setNotes(remaining)
        props.setDeletedNotes(prev => [...prev, deleted])
    }

    function archiveNote(id) {
        const archived = props.notes.find(note => note.id === id)
        const remaining = props.notes.filter(note => note.id !== id)
        props.setNotes(remaining);
        props.setArchivedNotes(prev => [...prev, archived])

    }

    return (
        <Pressable style={[styles.note, { backgroundColor: props.color }]} onPress={() => deleteNote(props.id)}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desciption}>{props.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    note: {
        borderWidth: 1,
        borderColor: "#8E8E8F",
        padding: 6,
        paddingBottom: 26,
        borderRadius: 8,
        width: "95%",
    },
    title: {
        fontWeight: 600,
        fontSize: 16
    },
    desciption: {
        fontSize: 15
    }
})