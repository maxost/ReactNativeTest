/**
 * Created by Maksim Ostrovidov on 04.07.17.
 * dustlooped@yandex.ru
 */
import React, {Component} from 'react'
import {StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableHighlight, Button} from 'react-native'
import {fetchData} from '../../../NetworkManager.js'

export default class List extends Component {

    stateEnum = {
        DATA: "DATA",
        EMPTY: "EMPTY",
        ERROR: "ERROR"
    };

    constructor(props) {
        super(props);
        this.state = {
            state: this.stateEnum.DATA,
            data: [new ListItemLoading()],
            allowLoadMore: false,
            page: 0,
            pages: 0
        };
    }

    componentDidMount() {
        return this.makeRemoteRequest();
    }

    renderItem = ({item}) => {
        if (item instanceof ListItemData) {
            console.log(`!!!!!!!!!!!!!!!!!! inflate ListItemData ${item.key}`);
            return (<TouchableHighlight
                onPress={() => console.log(`!!!!!!!!!!!!!!!!! ${item.key}`)}
            >
                <View>
                    <Text style={styles.item}>{item.shortName}</Text>
                </View>
            </TouchableHighlight>)
        } else if (item instanceof ListItemLoading) {
            console.log("!!!!!!!!!!!!!!!!!! inflate ListItemLoading");
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
    };

    onRefresh() {
        console.log("!!!!!!!!!!!!!!!!!! onRefresh");
        this.setState({
            state: this.stateEnum.DATA,
            data: [new ListItemLoading()],
            allowLoadMore: false,
            page: 0,
            pages: 0
        });
        this.makeRemoteRequest()
    }

    onEndReached() {
        if (this.state.allowLoadMore === true) {
            console.log("!!!!!!!!!!!!!!!!!! onEndReached");
            this.setState((prev, _) => {
                const data = prev.data;
                data.push(new ListItemLoading());
                return {
                    state: this.stateEnum.DATA,
                    data: data,
                    allowLoadMore: false,
                    page: prev.page + 1,
                    pages: prev.pages
                }
            });
            this.makeRemoteRequest()
        }
    }

    clearLoadingItems(array) {
        return array.filter(obj => !(obj instanceof ListItemLoading))
    }

    makeRemoteRequest() {
        console.log("!!!!!!!!!!!!!!!!!! makeRemoteRequest");
        fetchData(this.state.page)
            .then(json => {
                // console.log(json);
                const data = json.response.items.map(obj => new ListItemData(obj.id, obj.shortName));
                const pageCount = json.response.totalPages;

                if (data.isEmpty && this.state.page === 0) {
                    this.setState({
                        state: this.stateEnum.EMPTY,
                        data: [],
                        allowLoadMore: false,
                        page: 0,
                        pages: 1
                    });
                    return
                }

                const allowLoadMore = this.state.page + 1 < pageCount;
                this.setState((prev, _) => {
                    return {
                        state: this.stateEnum.DATA,
                        data: this.clearLoadingItems(prev.data).concat(data),
                        allowLoadMore: allowLoadMore,
                        page: prev.page,
                        pages: pageCount
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    state: this.stateEnum.ERROR,
                    data: [],
                    allowLoadMore: false,
                    page: 0,
                    pages: 1
                });
            });
    }

    render() {
        console.log(`!!!!!!!!!!!!!!!!!! render ${this.state.state}`);
        switch (this.state.state) {
            case this.stateEnum.DATA: {
                return (
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        refreshing={false}
                        onRefresh={() => this.onRefresh()}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => this.onEndReached()}
                    />
                )
            }
            case this.stateEnum.EMPTY: {
                return (
                    <View style={{flex: 1, paddingTop: 20}}>
                        <Text>"Empty!"</Text>
                        <Button
                            title="retry"
                            onPress={() => this.onRefresh()}
                        />
                    </View>
                );
            }
            case this.stateEnum.ERROR: {
                return (
                    <View style={{flex: 1, paddingTop: 20}}>
                        <Text>"Error!"</Text>
                        <Button
                            title="retry"
                            onPress={() => this.onRefresh()}
                        />
                    </View>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    item: {
        flex: 1, //TODO last renderItem overlapped by tabbar
        alignSelf: 'stretch',
        padding: 16,
        margin: 16,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'black'
    },
});

class ListItemData {
    constructor(id: string, shortName: string) {
        this.key = id;
        this.shortName = shortName;
    }
}

class ListItemLoading {
    constructor() {
        this.key = "-1"
    }
}