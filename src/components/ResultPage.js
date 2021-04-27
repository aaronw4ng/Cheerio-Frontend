import React from 'react';
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
import { Container, TabContainer, TabHeading, Content, Button, H1, H2, H3 } from 'native-base';
import Spacer from './UI/Spacer';
import { LinearGradient } from "expo-linear-gradient";
import Unorderedlist from 'react-native-unordered-list';


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
        margin: 15

    }

});

const ResultPage = () => (
    <Container>

        <LinearGradient
            colors={['#64B3F4', '#B9B6E5']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>
            <View style={{ padding: 30 }}>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center'
                }}>Analysis</Text>

                <Image source={{ uri: '' }} style={{ height: 200, resizeMode: 'stretch', margin: 5 }} />

                <H2 style={{
                    fontSize: 30,
                    marginTop: 15,
                    fontWeight: 'bold'
                }}>Grief</H2>
                <H3 style={{
                    fontSize: 17,
                    color: '#5E99CB'
                }}> Grief is a reaction to loss. It is usually very deep and bring distress and suffering</H3>
                <View style={styles.button}>
                    <Text style={{
                        textAlign: 'center',
                        paddingTop: 20
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
                </View>
            </View>
        </LinearGradient>
    </Container>
);
export default ResultPage;