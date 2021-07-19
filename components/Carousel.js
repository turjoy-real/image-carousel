import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class Carousel extends React.Component {

  scrollRef = React.createRef();

  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active && this.state.active >= this.props.images.length - 1) {
      this.setState({ active: slide });
    }
  }

  // Auto slideshow
  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          active:
            prev.active === (this.props.images.length - 1)
              ? 0
              : prev.active + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: width * this.state.active
          });

        })
    }, 5000)
  };
  
  render() {
    return <View style={style.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onMomentumScrollEnd={this.change}
        ref={this.scrollRef}
        showsHorizontalScrollIndicator={false}
        style={style.container}>
        {
          this.props.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={style.image} />
          ))}

      </ScrollView>
      <View style={style.pagination}>
        {
          this.props.images.map((i, k) => (
            <Text key={i} style={k == this.state.active ? style.pagingActiveText : style.pagingText}>⬤</Text>
          ))
        }

      </View>
    </View>
  }
}

const style = StyleSheet.create({
  container: { width, height },
  scroll: { width, height },
  image: { width, height, resizeMode: 'cover' },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
  pagingText: { fontSize: width / 30, color: '#888', margin: 3 },
  pagingActiveText: { fontSize: width / 30, color: '#fff', margin: 3 }
})
