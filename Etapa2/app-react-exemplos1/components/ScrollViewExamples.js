import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet} from 'react-native';

class ScrollViewExample extends Component {
    state = {
        names: [
            { 'name': 'Ben', 'id': 1 },
            { 'name': 'Susan', 'id': 2 },
            { 'name': 'Robert', 'id': 3 },
            { 'name': 'Mary', 'id': 4 },
            { 'name': 'Yumi', 'id': 5 },
            { 'name': 'Janaina', 'id': 6 },
            { 'name': 'Luiz', 'id': 7 },
            { 'name': 'Guilherme', 'id': 8 },
            { 'name': 'Arthur', 'id': 9 },
            { 'name': 'Wandinha', 'id': 10 },
            { 'name': 'Pedro', 'id': 11 },
            { 'name': 'Cole', 'id': 12 }
            
        ]
    }

    
    render() {
        return (
            <View>
                <ScrollView>
                 {
                    this.state.names.map((item, index) => (
                        <View 
                            key={item.id}
                            style={styles.item}
                        >
                        <Image source={require('../assets/favicon.png')} />
                        <Text>{item.name}</Text>
                        </View>
                    ))
                 }   
                </ScrollView>
            </View>
        );
    }
}
export default ScrollViewExample;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
});