import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';

import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';
import NavBar from '../NavBar';

const styles = StyleSheet.create({
  H1Style: {
    fontFamily: 'NunitoRegular',
    fontSize: 26,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  H2Style: {
    fontFamily: 'NunitoBold',
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
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
      startColor: '#A9CDEB',
      endColor: '#B9B6E5',
      currEmotion: 'how',
      carouselItems: [
        {
          title: 'How could you have done this to me?',
          illustration: 'https://imgur.com/Ei8euk6.png',
        },
        {
          title: 'Why did you do that?',
          illustration: 'https://imgur.com/suhdV8J.png',
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          borderRadius: 15,
          height: 460,
        }}
      >
        <Image
          style={{
            width: '93%',
            height: '85%',
            overflow: 'hidden',
            marginLeft: 10,
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
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
          <H1 style={styles.H1Style}>Read Me</H1>

          <Progress.Bar
            progress={0.7}
            width={370}
            height={8}
            unfilledColor="rgba(246, 246, 246, 0.1)"
            borderColor="white"
            color="white"
            style={{ marginLeft: 'auto', marginRight: 'auto', margin: 20 }}
          />

          <H2 style={styles.H2Style}>Which would you more likely ask them?</H2>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Carousel
              removeClippedSubviews="false"
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={380}
              itemWidth={280}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
              onScrollEndDrag={() => {
                if (this.state.currEmotion === 'how') {
                  this.state.startColor = '#FFC796';
                  this.state.endColor = '#FF6D93';
                  this.state.currEmotion = 'why';
                } else if (this.state.currEmotion === 'why') {
                  this.state.startColor = '#A9CDEB';
                  this.state.endColor = '#B9B6E5';
                  this.state.currEmotion = 'how';
                }
              }}
            />
          </View>
          <AppButton onPress={() => Actions.GriefResultPage()} title="Next Question" />
        </SafeAreaView>
        <NavBar />
      </LinearGradient>
    );
  }
}
