import React from "react";
import {StyleSheet, View, Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class SimpleDesign extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <View style={styles.navBarCircle} />
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInputs} />
                        <View style={styles.loginInputs}/>
                    </View>
                    <View />
                </View>
                <View style={styles.carouselContainer}/>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePanel}/>
                    <View style={styles.imagePanel}/>
                    <View style={styles.imagePanel}/>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imagePanelSM}></View>
                    <View style={styles.imagePanelSM}></View>
                    <View style={styles.imagePanelSM}></View>
                    <View style={styles.imagePanelSM}></View>
                    <View style={styles.imagePanelSM}></View>
                </View>
                <View style={styles.centerdImageContainer}>
                    <View style={styles.imagePanelSM}></View>
                    <View style={styles.imagePanelSM}></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: 20,
        backgroundColor: '#d0d3d4',
    },
    navBar: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        flexBasis: '10%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    navBarCircle: {
        backgroundColor: 'white',
        flexBasis: 50,
        height: 50,
        borderRadius: 50
    },
    loginContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        flex: 2,
    },
    loginInputs: {
        backgroundColor: 'white',
        flexBasis: 70,
        height: 25,
        marginLeft: 5,
    },
    carouselContainer: {
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: 'grey',
        flexBasis: '20%',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    imagePanel: {
        backgroundColor: 'grey',
        flexBasis: 90,
        height: 90
    },
    imagePanelSM: {
        backgroundColor: 'grey',
        flexBasis: 30,
        height: 30
    },
    centerdImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});