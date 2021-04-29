import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from "expo-linear-gradient";

import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
  H1Style: { fontFamily: 'Bungee_Regular', fontSize: 26, marginTop: 40 },
  H2Style: {
    fontFamily: 'Arial_Round',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 80,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      startColor: '#F9748F',
      endColor: '#FE9A8B',
      currEmotion: 'aggression',
      carouselItems: [
        {
          title: 'Aggression',
          subtitle: 'Text 1',
          illustration: 'https://imgur.com/lfaxNrK.png',
        },
        {
          title: 'Despair',
          subtitle: 'Text 2',
          illustration: 'https://imgur.com/2EK0yOs.png',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: '#FCEAB8',
          borderRadius: 15,
          borderColor: 'black',
          borderWidth: 1.5,
          height: 300,
          marginLeft: 25,
          marginRight: 25,
          shadowColor: 'black',
          shadowOffset: { height: 8 },
          shadowOpacity: 0.2,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 15,
          }}
          source={{ uri: item.illustration }}
        />
        {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
        {/* <Text>{item.subtitle}</Text> */}
      </View>
    );
  }

  render() {
    return (
      <LinearGradient
        colors={[this.state.startColor, this.state.endColor]}
        start={[0.1, 0.1]}
        style={styles.linearGradient}>
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
          <H1 style={styles.H1Style}>Read Me</H1>

          <Progress.Bar
            progress={0.7}
            width={332}
            height={8}
            unfilledColor='rgba(246, 246, 246, 0.1)'
            borderColor="white"
            color="white"
            style={{ marginLeft: 'auto', marginRight: 'auto', margin: 20 }}
          />

          <H2 style={styles.H2Style}>Is your first reaction aggression or despair?</H2>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={280}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
              onScrollEndDrag={() => {
                if (this.state.currEmotion === 'aggression') {
                  this.state.startColor = '#A9CDEB';
                  this.state.endColor = '#B9B6E5';
                  this.state.currEmotion = 'despair';
                }
              }}
            />
          </View>
          <AppButton onPress={() => alert('Next question')} title="Next Question" />

        </SafeAreaView>
        <View style={{
          height: 80,
          width: 410,
          borderRadius: 24,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/home-nav-inactive.png')} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/readme-nav-active.png')} /></TouchableOpacity>
          <TouchableOpacity><Image source={require('../../../assets/images/navbar/dictionary-nav-inactive.png')} /></TouchableOpacity>

        </View>
      </LinearGradient>
    );
  }
}
