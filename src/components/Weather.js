import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Barometer } from 'expo-sensors';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressure: 0
        };

        this.subscription = Barometer.addListener(barometerData => {
            this.setState({
                pressure: barometerData.pressure
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
            </View>
        )
    }
}
