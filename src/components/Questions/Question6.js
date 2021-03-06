import React from 'react';

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
    paddingBottom: 80,
    width: 320,
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
      currEmotion: 'powerless',
      carouselItems: [
        {
          title: 'How could you have done this to me?',
          subtitle: 'Text 1',
          illustration: 'https://imgur.com/lfaxNrK.png',
        },
        {
          title: 'Why did you do that?',
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
        style={styles.linearGradient}
      >
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
          <H1 style={styles.H1Style}>Read Me</H1>

          <Progress.Bar
            progress={0.84}
            width={370}
            height={8}
            unfilledColor="rgba(246, 246, 246, 0.1)"
            borderColor="white"
            color="white"
            style={{ marginLeft: 'auto', marginRight: 'auto', margin: 20 }}
          />

          <H2 style={styles.H2Style}>Do you feel more powerless or victimized?</H2>

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
                if (this.state.currEmotion === 'powerless') {
                  this.state.startColor = '#F9748F';
                  this.state.endColor = '#FE9A8B';
                  this.state.currEmotion = 'victimized';
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
