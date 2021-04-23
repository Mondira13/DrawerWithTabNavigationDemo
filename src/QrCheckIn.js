import React, { useState } from 'react';
import {
    Image, Text, View, TouchableOpacity, StyleSheet, Linking
} from 'react-native';
import CustomToolbarWithBack from './CustomToolbarWithBack';
import fontSelector from './FontSelector'
import QRCode from 'react-native-qrcode-svg';


class QrCheckIn extends React.Component {
    constructor(props) {
        super(props);
        const { navigation }  = this.props;
        const userData = navigation.getParam('imgData', null);
    }

    render() {
        // console.warn(this.props.navigation.state.params.imgData);
        console.warn(userData);
        return (
            <View style={{ flex: 1 }}>
                <CustomToolbarWithBack title={"QR CheckIn"} backgroundColor="#FFFFFF" />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 6 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: fontSelector("robo_medium"), color: '#222722', textAlign: 'center', marginTop: '40%', marginStart: 25, marginEnd: 25 }} > QR Code Entry </Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', fontFamily: fontSelector("robo_regular"), color: '#868484', textAlign: 'center', marginTop: 10, marginStart: 25, marginEnd: 25 }}> Check in with QR Code at the facility you want to use </Text>

                        <View style={myStyle.cardstyle}>
                            {this.props.qrUrl ?
                                <QRCode
                                    logoSize={30}
                                    logoBackgroundColor='transparent'
                                    value={this.props.qrUrl}
                                />
                                : null
                            }

                            {/* <Image source={require('./images/qrcodeimg.png')} style={{height:250,width:230,marginTop:35,marginBottom:35}} /> */}
                            {/* <Image source={require('./images/retry.png')} style={{height:45,width:45}} /> */}
                            {/* <Image source={require('./images/approve.png')} style={{height:45,width:45}} /> */}
                        </View>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <TouchableOpacity style={myStyle.buttonStyle} onPress={() => alert("button click")}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontWeight: '400', fontSize: 16, fontFamily: fontSelector("regular") }}> Confirm </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const myStyle = StyleSheet.create({
    cardstyle: {
        // elevation: 2,
        backgroundColor: '#ffffff',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginStart: 25,
        marginEnd: 25,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        height: 55,
        backgroundColor: '#222722'
    }
});
export default QrCheckIn;
