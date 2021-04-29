import React from 'react';
import { Alert, StyleSheet, View, Image, Text, TouchableOpacity, Touchable } from 'react-native';
import { Container, TabContainer, Header, TabHeading, Content, Button, H1, H2, H3 } from 'native-base';
import { LinearGradient } from "expo-linear-gradient";
import { Searchbar } from 'react-native-paper';


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        width: 334,
        height: 39,
        borderRadius: 24,
        margin: 10,
        marginTop: 30,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'rgba(246, 246, 246, 0.1)'
    },
    buttonWhite: {
        backgroundColor: 'white',
        width: 335,
        height: 106,
        borderRadius: 24, 
        marginLeft: 25
    },
    buttonClear: {
        backgroundColor: 'rgba(246, 246, 246, 0.1)',
        borderColor: 'rgba(246, 246, 246, 0.3)',
        marginTop: 20,
        borderWidth: 2,
        width: 335,
        height: 106,
        borderRadius: 24,
        marginLeft: 25
    },
    emotion: {
        margin: 5,
        marginLeft: 25,
        fontSize: 20,
        fontWeight: 'bold'
    },
    emotionDescription: {
        marginLeft: 25,
        fontSize: 13, 
        width: 225
    }

});

const ResultPage = () => (
    <Container>
        <LinearGradient
            colors={['#F9748F', '#FE9A8B']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
                <Content>
            <View style={{ padding: 20 }}>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center'
                }}>Dictionary</Text>
                <Searchbar
                    placeholder="Search"
                    style={styles.searchBar}
                />
            </View>
            <Button style={styles.buttonWhite}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Violated</Text>
                        <Text style={styles.emotionDescription}>When someone forcefully breaks your trust and treats you with a lack of respect</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Infuriated</Text>
                        <Text style={styles.emotionDescription}>Feeling extremely angry and impatient with something or someone</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Resentful</Text>
                        <Text style={styles.emotionDescription}>Feeling or expressing bitterness or hatred at having been treated unfairly</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Numb</Text>
                        <Text style={styles.emotionDescription}>Feeling lost or emotionless</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            </Content>
            <View style={{
        height: 80,
        width: 410,
        borderRadius: 24,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',

      }}>
        <TouchableOpacity><Image source={require('../../assets/images/navbar/home-nav-inactive.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../assets/images/navbar/readme-nav-inactive.png')} /></TouchableOpacity>
        <TouchableOpacity><Image source={require('../../assets/images/navbar/dictionary-nav-active.png')} /></TouchableOpacity>

      </View>
        </LinearGradient>
    </Container>
);
export default ResultPage;