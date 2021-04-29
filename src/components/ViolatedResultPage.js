import React from 'react';
import { Alert, StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Container, TabContainer, TabHeading, Content, Button, H1, H2, H3 } from 'native-base';
import Spacer from './UI/Spacer';
import { LinearGradient } from "expo-linear-gradient";
import Unorderedlist from 'react-native-unordered-list';
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        height: 87,
        width: 334,
        borderRadius: 24,
        margin: 15,
        marginLeft: 30

    }

});

const ResultPage = () => (

    <Container>

        <LinearGradient
            colors={['#F9748F', '#FE9A8B']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
            <ScrollView>
                <View style={{ width: 400 }}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: 'center'
                    }}>Analysis</Text>

                   

                    <Image source={require('../../assets/images/resultsPageBackground.png')} style={{ position: 'absolute', width: 410, height: 1650, marginTop: 120, }} />
                    <View style={{ flexDirection: 'row', marginTop: 140 }}>
                        <Image source={require('../../assets/images/violated.png')} style={{ height: 121, margin: 5, marginLeft: 15 }} />
                        <View>
                            <H2 style={{
                                fontSize: 38,
                                marginTop: 15,
                                paddingTop: 10,
                                marginLeft: 15,
                                fontWeight: 'bold'
                            }}>Violated</H2>
                            <H3 style={{
                                fontSize: 17,
                                color: '#C25653',
                                width: 250,
                                margin: 5
                            }}> Feeling violated is when someone forcefully breaks your trust and treats you with a lack of respect</H3>
                        </View>
                        <View style={{
                            position: 'absolute', right: 0,
                            marginRight: 30,
                            marginTop: 15
                        }}>
                            <TouchableOpacity
                                onPress={() =>
                                    alert('Violated is added to your dictionary')
                                }><Image source={require('../../assets/images/plus.png')} /></TouchableOpacity></View>
                    </View>
                    <View style={styles.button}>
                        <Text style={{
                            textAlign: 'center',
                            paddingTop: 20,

                        }}>Feeling violated is never okay and you have the right to make decisions about your body and how you want to be treated.</Text>
                    </View>

                    <Text style={{ margin: 10 }}>When you feel violated, it can feel embarrassing or scary to talk about, and that’s completely natural. However, it is still important that you speak to someone you trust. If something has happened that made you feel uncomfortable or disrespected, there are ways you can communicate that to a loved one. </Text>

                    <Text style={{
                        fontWeight: 'bold',
                        margin: 10
                    }}>What can I do when I feel violated? </Text>
                    <View style={{ margin: 10 }}>
                        <Unorderedlist><Text>Trust your instincts. If you feel uneasy around something or someone, remove yourself from that situation</Text></Unorderedlist>
                        
                    </View>
                    <Text style={{
                        fontWeight: 'bold',
                        margin: 10
                    }}>How to Communicate with a Loved One:</Text>
                    <View style={{ margin: 10 }}>
                        <Unorderedlist><Text>"Today I felt sad because I thought about (insert event)"</Text></Unorderedlist>
                        <Unorderedlist><Text>“I am feeling emotions of violation because (insert event) made me feel a sense of invasion”</Text></Unorderedlist>
                        <Unorderedlist><Text>“I do not know how to fully explain my emotions but I feel violated because (insert event)”</Text></Unorderedlist>
                        <Unorderedlist><Text>“Today’s violated feels especially heavy and I would like to talk about (insert event)”</Text></Unorderedlist>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 320, width: 335, borderRadius: 24, padding: 20, marginLeft: 30, marginTop: 20, marginBottom: 20
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            margin: 10
                        }}>Guiding Questions on this grief</Text>
                        <Text>1. What’s the hardest part about violation? </Text>
                        <Text>2. What would make this situation a little better? </Text>
                        <Text>3.What would be one step forward from here?</Text>
                        <Text>4. What else is going on for you that doesn't help?</Text>
                        <Text>5. Is there someone else you would like to talk to about this?</Text>
                        <Text>6. What times of day are the hardest for you? Is there anytimes you feel better about this?</Text>
                        <Text>7. What things trigger feelings of violation for you?</Text>
                        <Text>8. If you could change anything about this event, what would you change?</Text>
                    </View>
                </View>
                
            </ScrollView>
            <View style={{
                    height: 80,
                    width: 400,
                    borderRadius: 24,
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}>
                    <TouchableOpacity
                    onPress={() => alert("Don't forget to save your emotion")}>
                        <Image source={require('../../assets/images/navbar/home-nav-inactive.png')} /></TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => alert("Don't forget to save your emotion")}
                    ><Image source={require('../../assets/images/navbar/readme-nav-active.png')} /></TouchableOpacity>
                    <TouchableOpacity
                    ><Image source={require('../../assets/images/navbar/dictionary-nav-inactive.png')} /></TouchableOpacity>

                </View>
        </LinearGradient>
    </Container>

);
export default ResultPage;