/**
 * Created by synode on 01.07.17.
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native'
import Tabs from 'react-native-tabs'
import {StackNavigator} from 'react-navigation';
import List from './Tabs/List/List'

export default function register() {
    AppRegistry.registerComponent('RNWSTP', () => MyStackNavigator);
}

class MainScreen extends Component {

    static navigationOptions = { title: 'Main' };

    constructor(props) {
        super(props);
        this.state = {
            page: 'First'
        };
    }

    render() {
        let tab = null;
        switch (this.state.page) {
            case 'First': {
                tab = <First
                    navigation={ this.props.navigation }
                />;
                break
            }
            case 'Second': {
                tab = <Second
                    navigation={ this.props.navigation }
                />;
                break
            }
            case 'List': {
                tab = <List
                    naviagtion={ this.props.navigation }
                />;
                break
            }
        }

        return (
            <View style={styles.mainContainer}>

                { tab }

                <Tabs
                    selected={ this.state.page }
                    style={ styles.tabbar }
                    selectedStyle={ {color: 'red'} }
                    onSelect={ tab => this.setState({page: tab.props.name}) }
                >
                    <Text name="First">First</Text>
                    <Text name="Second">Second</Text>
                    <Text name="List">List</Text>
                </Tabs>
            </View>
        )
    }
}

class First extends Component {
    render() {
        return (
            <View style={styles.info}>
                <Text style={ styles.welcome }>First Tab</Text>
                <Button
                    title="Show Details"
                    onPress={ () => this.props.navigation.navigate('DetailsScreen', {text: "First"}) }
                />
            </View>
        )
    }
}

class Second extends Component {

    render() {
        return (
            <View style={styles.info}>
                <Text style={ styles.welcome }>Second Tab</Text>
                <Button
                    title="Show Details"
                    onPress={ () => this.props.navigation.navigate('DetailsScreen', {text: "Second"}) }
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
            <View style={styles.mainContainer}>
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
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    info: {
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
    },
});