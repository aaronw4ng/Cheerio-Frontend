import React from 'react';
import { Alert, StyleSheet, View, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import { Container, TabContainer, Header, TabHeading, Content, Button, H1, H2, H3, Footer } from 'native-base';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
    searchBar: {
        width: 334,
        height: 39,
        borderRadius: 24,
        margin: 10,
        marginTop: 30,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'rgba(246, 246, 246, 0.1)'
    }
});

const ResultPage = () => (
    <Container style={{ backgroundColor: '#ECF0F3' }}>

        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 30,
                textAlign: 'center'
            }}>Dictionary</Text>
            <Searchbar
                placeholder="Search for an emotion"
                style={styles.searchBar}
            />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 25 }}>
            <View>
            <TouchableOpacity>
                <Image source={require('../../assets/images/sad.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{right: 0}}>
                <Image source={require('../../assets/images/surprised.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{right: 0}}>
                <Image source={require('../../assets/images/fear.png')} />
            </TouchableOpacity>
            </View>
            <View style={{marginTop: 7}}>
            <TouchableOpacity>
                <Image source={require('../../assets/images/happy.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{right: 0}}>
                <Image source={require('../../assets/images/anger.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{right: 0}}>
                <Image source={require('../../assets/images/disgusted.png')} />
            </TouchableOpacity>
            </View>
        </View>
    </Container>
    
);
export default ResultPage;