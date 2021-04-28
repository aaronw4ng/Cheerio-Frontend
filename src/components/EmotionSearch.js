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
        borderRadius: 24
    },
    buttonClear: {
        backgroundColor: 'rgba(246, 246, 246, 0.1)',
        borderColor: 'rgba(246, 246, 246, 0.3)',
        marginTop: 20,
        borderWidth: 2,
        width: 335,
        height: 106,
        borderRadius: 24
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
            colors={['#64B3F4', '#B9B6E5']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
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
                        <Text style={styles.emotion}>Grief</Text>
                        <Text style={styles.emotionDescription}>A painful feeling of loss, usually very deep and distressful</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Dissapointed</Text>
                        <Text style={styles.emotionDescription}>Feeling sad when you are excited about something but it doesn't end up happening the way you hope</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Remorsefu</Text>
                        <Text style={styles.emotionDescription}>Feeling really sorry because you did or said something wrong</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
            <Button style={styles.buttonClear}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View>
                        <Text style={styles.emotion}>Lonely</Text>
                        <Text style={styles.emotionDescription}>Feeling left out, not invited, or alone</Text>
                    </View>
                    <Image 
                    style={{marginTop: 25, marginLeft: 20}}
                    source={require('../../assets/images/arrow_back_ios.png')} />
                </View>
            </Button>
        </LinearGradient>
    </Container>
);
export default ResultPage;