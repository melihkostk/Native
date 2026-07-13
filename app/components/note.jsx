import { useRef } from "react";
import { Animated, PanResponder, Pressable, StyleSheet, Text } from "react-native";

export default function Note(props) {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(

        PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gestureState) => {

                if (props.page === "home") {
                    if (gestureState.dx < -150) {
                        props.deleteNote(props.id);
                    }
                    else if (gestureState.dx > 150) {
                        props.archiveNote(props.id);
                    }
                }

                if (props.page === "deleted") {
                    if (gestureState.dx < -150) {
                        props.deletePerma(props.id);
                    }
                    else if (gestureState.dx > 150) {
                        props.restoreThrash(props.id);
                    }
                }

                if (props.page === "archived") {
                    if (gestureState.dx < -150) {
                        props.restoreArchive(props.id);
                    }
                }

                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        }),
    ).current;

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[
                styles.note,
                !props.flexCol && styles.noteRow,
                {
                    backgroundColor: props.color,
                    transform: [
                        { translateX: pan.x },
                    ],
                },
            ]}
        >
            <Pressable onPress={props.page === "home" ? () => props.setNoteInputShown(prev => !prev) : undefined}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desciption}>{props.description}</Text>
            </Pressable>

        </Animated.View>

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
    noteRow:{
        width:"45%",
    },
    title: {
        fontWeight: 600,
        fontSize: 16
    },
    desciption: {
        fontSize: 15
    }
})