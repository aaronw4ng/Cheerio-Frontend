import React from 'react';

import GallerySwiper from 'react-native-gallery-swiper';
import * as Progress from 'react-native-progress';
import { Container, Content, H1, H2 } from 'native-base';
import { Alert, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AppButton from '../UI/AppButton';
import Spacer from '../UI/Spacer';

const styles = StyleSheet.create({
    H1Style: { fontFamily: 'Bungee_Regular', fontSize: 26 },
    H2Style: {
        fontFamily: 'Arial_Round',
        textAlign: 'center',
        fontSize: 20,
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


constructor(props){
    super(props);
    this.state = {
        activeIndex: 0,
        carouselItems: [
            {
                uri: '../../../assets/images/anger1',
                title: "Item 1",
                text: "Text 1",
            },
            {
                title: "Item 2",
                text: "Text 2",
            },
            {
                title: "Item 3",
                text: "Text 3",
            },
            {
                title: "Item 4",
                text: "Text 4",
            },
            {
                title: "Item 5",
                text: "Text 5",
            },
        ]
    }
}

_renderItem({ item, index }){
    return (
        <View style={{
            backgroundColor: 'floralwhite',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
        }}>

            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>

    )
}

render() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeIndex: index })} />
            </View>
        </SafeAreaView>
    );
}
}

