/**
 * Created by liuzhe on 2017/5/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'


export default class Home extends Component {

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.titleWapper}>
                    <Text style={styles.title}>
                        YIYI APP
                    </Text>
                </View>
                <View style={styles.subTitleWapper}>
                    <Text style={styles.subtitle}>
                        Powered by Sandra Zhang
                    </Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    titleWapper: {
        flex: 1,
        justifyContent: 'center',
    },
    subTitleWapper: {
        paddingBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
    }
});