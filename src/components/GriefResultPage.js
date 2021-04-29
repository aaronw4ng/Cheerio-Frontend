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
            colors={['#64B3F4', '#B9B6E5']}
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
                        <Image source={require('../../assets/images/grief_resultsPage.png')} style={{ height: 121, margin: 5, marginLeft: 15 }} />
                        <View>
                            <H2 style={{
                                fontSize: 38,
                                marginTop: 15,
                                paddingTop: 10,
                                marginLeft: 15,
                                fontWeight: 'bold'
                            }}>Grief</H2>
                            <H3 style={{
                                fontSize: 17,
                                color: '#5E99CB',
                                width: 250,
                                margin: 5
                            }}> Grief is a reaction to loss. It is usually very deep and bring distress and suffering</H3>
                        </View>
                        <View style={{
                            position: 'absolute', right: 0,
                            marginRight: 30,
                            marginTop: 15
                        }}>
                            <TouchableOpacity
                                onPress={() =>
                                    alert('Grief is added to your dictionary')
                                }><Image source={require('../../assets/images/plus.png')} /></TouchableOpacity></View>
                    </View>
                    <View style={styles.button}>
                        <Text style={{
                            textAlign: 'center',
                            paddingTop: 20,

                        }}>Grief is a healthy process of feeling comforted, coming to terms with a loss, and finding ways to adapt.</Text>
                    </View>

                    <Text style={{ margin: 10 }}>Sometimes grief involves a terrible event happening or losing someone you love. It is okay to feel grief. Something really sad happened and it is good to acknowledge it.  When this happens, people cry because they feel sad. It is ok to cry. </Text>

                    <Text style={{
                        fontWeight: 'bold',
                        margin: 10
                    }}>What can I do when I feel grief? </Text>
                    <View style={{ margin: 10 }}>
                        <Unorderedlist><Text>When someone dies we can say, “I am sorry to hear this news.”</Text></Unorderedlist>
                        <Unorderedlist><Text>When I think of sad things I can (insert preferred activities that the child likes to do that will help them feel better). </Text></Unorderedlist>
                        <Unorderedlist><Text>I will feel better after some time goes by.</Text></Unorderedlist>
                        <Unorderedlist><Text>When I feel sad I can think Mommy loves me, Daddy loves me (other people in the family) love me.</Text></Unorderedlist>
                        <Unorderedlist><Text>I am safe because (insert things that help the child feel safe).</Text></Unorderedlist>
                        <Unorderedlist><Text>My teachers and family members help keep me safe by ____.</Text></Unorderedlist>
                    </View>
                    <Text style={{
                        fontWeight: 'bold',
                        margin: 10
                    }}>How to Communicate with a Loved One:</Text>
                    <View style={{ margin: 10 }}>
                        <Unorderedlist><Text>"Today I felt sad because I thought about (insert event)"</Text></Unorderedlist>
                        <Unorderedlist><Text>“I am feeling emotions of grief because (insert event) made me feel a sense of loss”</Text></Unorderedlist>
                        <Unorderedlist><Text>“I do not know how to fully explain my emotions but I feel grief because (insert event)”</Text></Unorderedlist>
                        <Unorderedlist><Text>“Today’s grief feels especially heavy and I would like to talk about (insert event)”</Text></Unorderedlist>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 320, width: 335, borderRadius: 24, padding: 20, marginLeft: 30, marginTop: 20, marginBottom: 20
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            margin: 10
                        }}>Guiding Questions on this grief</Text>
                        <Text>1. What’s the hardest part about grief? </Text>
                        <Text>2. What would make this situation a little better? </Text>
                        <Text>3.What would be one step forward from here?</Text>
                        <Text>4. What else is going on for you that doesn't help?</Text>
                        <Text>5. Is there someone else you would like to talk to about this?</Text>
                        <Text>6. What times of day are the hardest for you? Is there anytimes you feel better about this?</Text>
                        <Text>7. What things trigger feelings of grief for you?</Text>
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