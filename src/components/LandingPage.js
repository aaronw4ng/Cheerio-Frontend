import React from 'react';
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
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

    button: {
        width: 195,
        height: 49,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1.2,
        backgroundColor: 'rgba(246, 246, 246, 0.1)',
        marginTop: 30

    }


});

const ResultPage = () => (
    <Container>

        <LinearGradient
            colors={['#A9CDEB', '#B9B6E5', '#FFC38F', '#FF6E90']}
            start={[0.1, 0.1]}
            style={styles.linearGradient}>

            <Text style={{
                fontSize: 50,
                margin: 15
            }}>Hi, Max!</Text>
            <Text style={{ fontSize: 20 }}>Current Streak</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 15 }}>21 Days</Text>
            <Button style={styles.button}><Text style={{
                fontSize: 18,
                paddingLeft: 25
            }}>Let's get started!</Text></Button>


        </LinearGradient>
    </Container>
);
export default ResultPage;