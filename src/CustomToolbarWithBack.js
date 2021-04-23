import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import fontSelector from './FontSelector';


class CustomToolbarWithBack extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={myStyles.navBar}>
                <View style={myStyles.rowitem}>
                    <View style={{ flex: 1 }} >
                        <TouchableOpacity style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }} onPress={() => alert("back") }    >
                            <Image source={require('./images/backicon.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 7}} >
                        <View style={{ justifyContent:'center', alignItems:'center'}} > 
                            <Text style={myStyles.appTitleStyle}> {this.props.title} </Text> 
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const myStyles = StyleSheet.create({
    navBar: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: 'white'
    },
    rowitem: {
        flexDirection: 'row', flex: 1
    },
    appTitleStyle: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily:fontSelector("medium"),
        color: '#222722'
    }
});
export default CustomToolbarWithBack;