import { useRef } from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";

export default function Note(props) {

    const panResponder = useRef(
        PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderMove: (_, gestureState) => { },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -50) {
                    deleteNote(props.id);
                }
                else if (gestureState.dx > 50) {
                    archiveNote(props.id);
                }
            },
        }),
    ).current;

    function deleteNote(id) {
        const deleted = props.notes.find(note => note.id === id)
        const remaining = props.notes.filter(note => note.id !== id)
        props.setNotes(remaining)
        props.setDeletedNotes(prev => [...prev, deleted])
        props.setDeletedShown(prev => !prev)
    }

    function archiveNote(id) {
        const archived = props.notes.find(note => note.id === id)
        const remaining = props.notes.filter(note => note.id !== id)
        props.setNotes(remaining);
        props.setArchivedNotes(prev => [...prev, archived])
        props.setArchiveShown(prev => !prev)
    }

    return (
        <View {...panResponder.panHandlers} style={[styles.note, { backgroundColor: props.color }]}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desciption}>{props.description}</Text>
            </View>
        </View>
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