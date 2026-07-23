import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Header(props) {
    const { t } = useTranslation();
    
    return (
        <View style={styles.headerContainer}>
            <View>
                <Pressable onPress={() => props.setSiderbarShown(prev => !prev)}>
                    <Image source={require("../../assets/images/menu-icon.png")}></Image>
                </Pressable>
            </View>
            <View>
                <Text style={styles.pageTitle}>{props.title}</Text>
            </View>
            <Pressable onPress={() => props.setFlexCol(prev => !prev)} style={styles.headerRight}>
                <Image source={props.flexCol === true ? require("../../assets/images/grid.png") : require("../../assets/images/list.png")}></Image>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingVertical:4
    },
    pageTitle:{
        fontWeight:500,
        fontSize:16
    },
})