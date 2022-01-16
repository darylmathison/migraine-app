import * as React from "react";
import { View, Text } from "react-native";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <View>
                <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
            </View>
        );
    }
}
