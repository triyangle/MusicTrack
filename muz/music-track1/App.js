import React, {Component} from 'react';
import { 
  Dimensions,
  Font, 
  Image,
  ScrollView,
  SectionList,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import {LinearGradient} from 'expo';
import {Button, SearchBar} from 'react-native-elements';

let { height, width } = Dimensions.get('window');

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['skyblue', 'steelblue', 'powderblue']}
          style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
        >
          <Text style={styles.headingLandingPage}>Welcome to MusicTrack!</Text>
          <Button
            large
            onPress={() => navigate('Tracks')}
            color= '#000080'
            icon={{name: 'music', type: 'font-awesome'}}
            style={{borderWidth: 3, borderColor: '#deb887'}}
            title='GET STARTED' />
          <Text style={styles.footerLandingPage}> 🦆TapTheDuck Inc. </Text>
        </LinearGradient>        
      </View>
    );
  }
}

class TrackScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Tracks',
  };
  render() {
    return (
      <View>
        <SearchBar lightTheme onChangeText={() => {}} placeholder='Type Here...' />
        <Button
          color="#7fffd4"
          icon={{name: 'plus', type: 'font-awesome'}}
          style={{borderWidth: 3, borderColor: '#5f9ea0'}}
          title='ADD TRACK' 
        />
        <Button
        color="#7fffd4"
          icon={{name: 'minus', type: 'font-awesome'}}
          style={{borderWidth: 3, borderColor: '#5f9ea0'}}
          title='DELETE TRACK' 
        /> 
        <LinearGradient
          colors={['skyblue', 'steelblue', 'powderblue']}
          style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
        >
        </LinearGradient>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <OurApp/>;
  }
}

const OurApp = StackNavigator({
  Home: { screen: HomeScreen },
  Tracks: { screen: TrackScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingLandingPage: {
    position: 'absolute',
    fontSize: 35,
    color: '#191970',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    top: 40
  },
  footerLandingPage: {
    position: 'absolute',
    fontSize: 15,
    bottom: 75
  },
  searchBarStyle: {
    top: 7.5
  }
});