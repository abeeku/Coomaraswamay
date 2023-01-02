import React from 'react'
import { View, Text,SafeAreaView,FlatList } from 'react-native'

export default class HomeScreen extends React.Component {
    state = {
        dataSource: []
    }

    async componentDidMount() {
        var response = await fetch('https://linkstation.xyz/links.json')
        var rJD = await response.json();
        this.setState({dataSource: rJD})
    }
    render()
    {
    return (
        <View>
            <Text>LinkStation - A link manager for the modern day</Text>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) =>
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                }
                keyExtractor={ item => item.id}
            />
        </View>
    )
    }
}

