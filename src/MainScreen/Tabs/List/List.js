/**
 * Created by Maksim Ostrovidov on 04.07.17.
 * dustlooped@yandex.ru
 */
import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        return this.makeRemoteRequest();
    }

    item = ({item}) => (
        <View
            onPress={ () => console.log("!!!!!!!!!!!!!!!!!! lol") }
        >
            <Text style={styles.item}>{item.title}</Text>
        </View>
    );

    getData(json) {
        return json.map(obj => {
            console.log(obj);
            return { key: obj.id, title: obj.title }
        })
    }

    makeRemoteRequest() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({data: this.getData(json)})
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.item}
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    item: {
        flex: 1, //TODO last item overlapped by tabbar
        alignSelf: 'stretch',
        padding: 16,
        margin: 16,
        fontSize: 18,
        backgroundColor: 'grey',
    },
});