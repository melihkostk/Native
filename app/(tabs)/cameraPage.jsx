import { CameraView, useCameraPermissions } from 'expo-camera';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [facing, setFacing] = useState('back');
    const [flashMenu, setFlashMenu] = useState(false)
    const [permission, requestPermission] = useCameraPermissions();
    const [flash, setFlash] = useState("")
    const [zoom , setZoom] = useState(1)

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <View style={styles.flashContainer}>
                <Pressable onPress={() => setFlashMenu(prev => !prev)}>
                    <Image source={require("../../assets/images/flash.png")}></Image>
                </Pressable>
                {flashMenu && <View style={styles.flashOptionFlex}>
                    <Pressable onPress={() => { setFlash("auto"); setFlashMenu(false) }}>
                        <Text style={[styles.flashOptions, flash === "auto" && styles.activeFlashOption]}>Otomatik</Text>
                    </Pressable>
                    <Pressable onPress={() => { setFlash("open"); setFlashMenu(false) }}>
                        <Text style={[styles.flashOptions, flash === "open" && styles.activeFlashOption]}>Açık</Text>
                    </Pressable>
                    <Pressable onPress={() => { setFlash("close"); setFlashMenu(false) }}>
                        <Text style={[styles.flashOptions, flash === "close" && styles.activeFlashOption]}>Kapalı</Text>
                    </Pressable>
                </View>}
            </View>
            <View>
                <CameraView style={styles.camera} facing={facing} />
                {facing === "back" && <View style={styles.zoomOptionsContainer}>
                    <Pressable onPress={() => setZoom(0.5)} style={[styles.zoomOptions , zoom === 0.5 && styles.activeZoomOptions]}>
                        <Text style={[styles.zoomOptionsText , zoom === 0.5 && styles.activeZoomText]}>{zoom === 0.5 ? "0,5x" : "0,5"}</Text>
                    </Pressable>
                    <Pressable onPress={() => setZoom(1)} style={[styles.zoomOptions , zoom === 1 && styles.activeZoomOptions]}>
                        <Text style={[styles.zoomOptionsText , zoom === 1 && styles.activeZoomText]}>{zoom === 1 ? "1x" : "1"}</Text>
                    </Pressable>
                     <Pressable onPress={() => setZoom(3)} style={[styles.zoomOptions , zoom === 3 && styles.activeZoomOptions]}>
                        <Text style={[styles.zoomOptionsText , zoom === 3 && styles.activeZoomText]}>{zoom === 3 ? "3x" : "3"}</Text>
                    </Pressable>
                </View>}
                {facing === "front" && <View style={styles.zoomOptionsContainer}>
                    <Image source={require("../../assets/images/expand.png")}></Image>
                </View>}
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <Text style={styles.photos}>FOTOGRAF</Text>
                </View>
                <View style={styles.buttonFlex}>
                    <TouchableOpacity>
                        <Link href={"/home"} style={styles.cancelButtonText}>Vazgeç</Link>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.takePhotoButton}>
                        <TouchableOpacity style={styles.innerTakePhotoButton}></TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <Image source={require("../../assets/images/flip.png")}></Image>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "black"
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        height: "80%",
        position: "relative"
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#2C2C2E",
        padding: 10,
        borderRadius: "100%"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    cancelButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "400"
    },
    takePhotoButton: {
        backgroundColor: "white",
        width: 70,
        height: 70,
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    innerTakePhotoButton: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: "100%",
        borderWidth: 3,
        borderColor: "black"
    },
    buttonFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    photos: {
        color: "yellow",
        paddingBottom: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 10,
        fontSize: 13,
        width: "100%",
        textAlign: "center"
    },
    flashOptionFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",

    },
    flashOptions: {
        color: "white",
        fontSize: 13,
        fontWeight: "600",
        paddingHorizontal: 20,
    },
    activeFlashOption: {
        color: "yellow",
        fontSize: 13,
        fontWeight: "600"
    },
    flashContainer: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 50,
        paddingHorizontal: 10
    },
    zoomOptionsContainer: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        bottom: 190,
        left: '50%',
        transform: [{ translateX: -50 }],
        display: "flex",
        flexDirection: "row",
        gap:10,
        padding: 6,
        borderRadius: 40,
        alignItems:"center"
    },
    zoomOptions: {
        fontWeight: "600",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "100%",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    activeZoomOptions: {
        fontWeight: "600",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "100%",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    zoomOptionsText:{
        color:"white",
        fontSize:12
    },
    activeZoomText:{
        color:"yellow",
        fontSize:13
    },
    expandContainer:{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "100%",
        width: 30,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
});