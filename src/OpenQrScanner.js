import React, { useState } from 'react';
import {
    Image, Text, View, TouchableOpacity, StyleSheet, Linking
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import QrCheckIn from './QrCheckIn'



// const Stack = createStackNavigator();


class OpenQrScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrUrl: ""
        }
    }

    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );

        // this.setState({ qrUrl: e.data })

        //  this.setMyData(e.data)
        this.setMyData(e.data)
        
    };

    setMyData = (data) =>{
        // console.warn("data",data)
        this.setState({ qrUrl: data })
        this.props.navigation.navigate('QrCheckIn',{imgData: this.state.qrUrl})
    }

    render() {
        return (
            <View>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    reactivateTimeout={10}
                    showMarker={true}
                    markerStyle={{ borderColor: "#FFF", borderRadius: 10,borderStyle:'dashed' }}
                    permissionDialogMessage="Need Permission To Access Camera"
                // topContent={
                //     <Text style={styles.centerText}>
                //         Go to{' '}
                //         <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                //             your computer and scan the QR code.
                //     </Text>
                // }
                // bottomContent={
                //     <TouchableOpacity style={styles.buttonTouchable}>
                //         <Text style={styles.buttonText}>OK. Got it!</Text>
                //     </TouchableOpacity>
                // }
                />

                {/* {this.state.qrUrl ?
                    <QRCode
                        logoSize={30}
                        logoBackgroundColor='transparent'
                        value={this.state.qrUrl}
                    />
                    : null
                } */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
export default OpenQrScanner;