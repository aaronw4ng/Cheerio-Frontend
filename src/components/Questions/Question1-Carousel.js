import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

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
});

/*const Question1 = () => (
  <Container>
    <Content padder>
      <Spacer size={15} />
      <H1 style={styles.H1Style}>READ ME</H1>
      <Spacer size={25} />
      <Progress.Bar
        progress={0.1}
        width={335}
        height={10}
        unfilledColor="#fff"
        borderColor="#000"
        color="#FCEAB8"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      />
      <Spacer size={25} />
      <H2 style={styles.H2Style}>How are you feeling?</H2>
      <Spacer size={100} />
      <GallerySwiper
        style={{
          height: 300,
          width: 250,
          marginRight: 'auto',
          marginLeft: 'auto',
          backgroundColor: '#000',
          borderRadius: 25,
          overflow: 'hidden',
        }}
        images={[
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
          {
            uri: 'https://i.imgur.com/c9x0VLe.jpg',
            dimensions: { width: 1080, height: 1920 },
          },
        ]}
      />
      <Spacer size={100} />
      <AppButton onPress={() => alert("button pressed")} title="Next Question" />
    </Content>
  </Container>
);

export default Question1;*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Sad',
          subtitle: 'Text 1',
          illustration: 'https://imgur.com/lfaxNrK.png',
        },
        {
          title: 'Happy',
          subtitle: 'Text 2',
          illustration: 'https://imgur.com/2EK0yOs.png',
        },
        {
          title: 'Surprised',
          subtitle: 'Text 3',
          illustration: 'https://imgur.com/6NDa1fH.png',
        },
        {
          title: 'Disgusted',
          subtitle: 'Text 4',
          illustration: 'https://imgur.com/MbQtosJ.png',
        },
        {
          title: 'Anger',
          subtitle: 'Text 5',
          illustration: 'https://imgur.com/l8OC3IL.png',
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F6F6', paddingTop: 50 }}>
        <H1 style={styles.H1Style}>READ ME</H1>

        <Progress.Bar
          progress={0.1}
          width={335}
          height={10}
          unfilledColor="#fff"
          borderColor="#000"
          color="#FCEAB8"
          style={{ marginLeft: 'auto', marginRight: 'auto', margin: 20 }}
        />

        <H2 style={styles.H2Style}>How are you feeling?</H2>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={280}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
        <AppButton onPress={() => alert('Next question')} title="Next Question" />
      </SafeAreaView>
    );
  }
}
