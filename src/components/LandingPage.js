import React from 'react';
import { Alert, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, TabContainer, Header, TabHeading, Content, Button, H1, H2, H3 } from 'native-base';
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from 'react-native-paper';
import Question1 from './Questions/Question1';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 295,
        height: 106,
        borderRadius: 24,
        borderColor: '#D9D9D9',
        borderWidth: 1.2,
        backgroundColor: '#D9D9D9',
        marginTop: 30,
        marginLeft: 40

    }


});

const ResultPage = (props) => (
    <Container>

        <LinearGradient
            colors={['#A9CDEB', '#B9B6E5', '#FFC38F', '#FF6E90']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
            <Content>
                <Text style={{
                    fontSize: 50,
                    margin: 15,
                    marginLeft: 100,
                    marginTop: 50
                }}>Hi, Max!</Text>
                <Image source={require('../../assets/images/max.png')} style={{ marginTop: 10, marginBottom: 20, marginLeft: 120 }} />
                <Text style={{ fontSize: 18, marginLeft: 140 }}>11 years old</Text>
                <View style={styles.button}
                ><Text style={{
                    fontSize: 35,
                    textAlign: 'center',
                    marginTop: 12,
                    fontWeight: 'bold'
                }}
                >31</Text>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Emotions Learned</Text></View>
                <View>
                    <Image style={{ marginTop: 30 }} source={require('../../assets/images/landingPageBottom.png')} />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            marginLeft: 320,
                            marginTop: 140
                        }}
                        onPress={() => alert('navigate to grief results page')}>
                        <Image source={require('../../assets/images/arrow_back_ios.png')}
                        />
                    </TouchableOpacity>
                </View>
            </Content>
            <View style={{
                height: 80,
                width: 400,
                borderRadius: 24,
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                bottom: 0
            }}>
                <TouchableOpacity><Image source={require('../../assets/images/navbar/home-nav-active.png')} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../../assets/images/navbar/readme-nav-inactive.png')} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../../assets/images/navbar/dictionary-nav-inactive.png')} /></TouchableOpacity>

            </View>
        </LinearGradient>
    </Container>
);
export default ResultPage;