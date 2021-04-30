import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';

import AppButton from '../UI/AppButton';
import NavBar from '../NavBar';

const styles = StyleSheet.create({
  H1Style: {
    fontFamily: 'NunitoRegular',
    fontSize: 26,
    marginTop: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  H2Style: {
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 22,
    paddingBottom: 20,
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
      startColor: '#FDA085',
      endColor: '#F6D365',
      currEmotion: 'Happy',
      carouselItems: [
        {
          title: 'Happy',
          illustration: 'https://i.imgur.com/3Al9joX.png',
        },
        {
          title: 'Sad',
          illustration: 'https://imgur.com/6TYotq1.png',
        },
        {
          title: 'Surprised',
          illustration: 'https://imgur.com/o2GaMvK.png',
        },
        {
          title: 'Fear',
          illustration: 'https://i.imgur.com/vxGdhgJ.png',
        },
        {
          title: 'Disgusted',
          illustration: 'https://imgur.com/w6EgPiK.png',
        },
        {
          title: 'Anger',
          illustration: 'https://imgur.com/R2Nelcw.png',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 15,
          height: 380,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
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
        style={styles.linearGradient}
      >
        <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
          <H1 style={styles.H1Style}>Read Me</H1>

          <Progress.Bar
            progress={0.14}
            width={370}
            height={8}
            unfilledColor="rgba(246, 246, 246, 0.1)"
            borderColor="white"
            color="white"
            style={{ marginLeft: 'auto', marginRight: 'auto', margin: 20 }}
          />

          <H2 style={styles.H2Style}>How are you feeling?</H2>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              removeClippedSubviews="false"
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={380}
              itemWidth={250}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
              onScrollEndDrag={() => {
                if (this.state.currEmotion === 'Happy') {
                  this.state.startColor = '#A9CDEB';
                  this.state.endColor = '#B9B6E5';
                  this.state.currEmotion = 'Sad';
                } else if (this.state.currEmotion === 'Sad') {
                  this.state.startColor = '#FFC796';
                  this.state.endColor = '#FF6D93';
                  this.state.currEmotion = 'Surprised';
                } else if (this.state.currEmotion === 'Surprised') {
                  this.state.startColor = '#D3C6FE';
                  this.state.endColor = '#FAACA8';
                  this.state.currEmotion = 'Fear';
                } else if (this.state.currEmotion === 'Fear') {
                  this.state.startColor = '#ACD0AF';
                  this.state.endColor = '#FBED96';
                  this.state.currEmotion = 'Disgusted';
                } else if (this.state.currEmotion === 'Disgusted') {
                  this.state.startColor = '#F9748F';
                  this.state.endColor = '#FE9A8B';
                  this.state.currEmotion = 'Anger';
                }
              }}
            />
          </View>
          <AppButton onPress={() => Actions.Question2()} title="Next Question" />
        </SafeAreaView>
        <NavBar />
      </LinearGradient>
    );
  }
}
