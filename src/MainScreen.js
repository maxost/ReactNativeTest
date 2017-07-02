/**
 * Created by synode on 01.07.17.
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native'
import Tabs from 'react-native-tabs'
import {StackNavigator} from 'react-navigation';

export default function register() {
    AppRegistry.registerComponent('RNWSTP', () => MyStackNavigator);
}

class MainScreen extends Component {

    static navigationOptions = {
        title: 'Main',
    };

    constructor(props) {
        super(props);
        this.state = {
            page: 'First'
        };
    }

    render() {
        const {page} = this.state;

        let tab = null;
        switch (page) {
            case 'First': {
                tab = <First
                    navigation = { this.props.navigation }
                />;
                break
            }
            case 'Second': {
                tab = <Second
                    navigation = { this.props.navigation }
                />;
                break
            }
        }

        return (
            <View style={styles.container}>

                { tab }

                <Tabs
                    selected={ page }
                    style={ styles.tabbar }
                    selectedStyle={ {color: 'red'} }
                    onSelect={ tab => this.setState({page: tab.props.name}) }
                >
                    <Text name="First">First</Text>
                    <Text name="Second">Second</Text>
                </Tabs>
            </View>
        )
    }
}

class First extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={ styles.welcome }>First Tab</Text>
                <Button
                    title="Show Details"
                    onPress={ () => this.props.navigation.navigate('DetailsScreen', { text: "First" }) }
                />
            </View>
        )
    }
}

class Second extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={ styles.welcome }>Second Tab</Text>
                <Button
                    title="Show Details"
                    onPress={ () => this.props.navigation.navigate('DetailsScreen', { text: "Second" }) }
                />
            </View>
        )
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    render() {
        const {params} = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Hello, { params.text }!
                </Text>
            </View>
        );
    }
}

const MyStackNavigator = StackNavigator({
    MainScreen: {screen: MainScreen},
    DetailsScreen: {screen: DetailsScreen},
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabbar: {
        backgroundColor: 'white',
        height: 48,
        borderTopColor: 'red',
        borderTopWidth: 1
    }
});