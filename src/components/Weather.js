import React from "react";
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Barometer } from 'expo-sensors';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressure: 0,
            relativeAltitude: 0
        };

        this._subscription = Barometer.addListener(barometerData => {
            this.setState({
                pressure: barometerData.pressure,
                relativeAltitude: barometerData.relativeAltitude
            });
        });

        this.styles = StyleSheet.create({
            buttonContainer: {
                flexDirection: 'row',
                alignItems: 'stretch',
                marginTop: 15,
            },
            button: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#eee',
                padding: 10,
            },
            sensor: {
                marginTop: 45,
                paddingHorizontal: 10,
            },
        });

    }

    render() {
        return (
            <View style={this.styles.sensor}>
                <Text>Barometer:</Text>
                <Text>Pressure: {this.state.pressure * 100} Pa</Text>
                <Text>
                    Relative Altitude:{' '}
                    {Platform.OS === 'ios' ? `${this.state.relativeAltitude} m` : `Only available on iOS`}
                </Text>
            </View>
        )
    }
}
