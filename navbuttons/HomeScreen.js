import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import healthJournal from '../assets/healthJournal.png';
import StepCounter from '../assets/StepCounter.png';
import WaterReminder from '../assets/WaterReminder.png';
import HeartRate from '../assets/HeartRate.png';
import SleepTracker from '../assets/SleepTracker.png';
import SetAlarm from '../assets/SetAlarm.png';
import UserIcon from '../assets/userIcon.png';
import Menu from '../assets/Menu.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent} />
        <Text style={styles.Good}>Good Morning, Aaron!</Text>
        <Image source={UserIcon} style={styles.UserI} />
        <Image source={Menu} style={styles.Menu} />
      </View>
      <View style={styles.fillOut}>
      <Image source={healthJournal} style={styles.healthJ} />
      <Image source={StepCounter} style={styles.StepC} />
      <Image source={WaterReminder} style={styles.WaterR} />
      <Image source={HeartRate} style={styles.HeartR} />
      <Image source={SleepTracker} style={styles.SleepT} />
      <Image source={SetAlarm} style={styles.SetA} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: '70%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#0B3954', 
  },
  fillOut: {
    flex: 1,
    position: 'absolute', 
    top: '20%', 
    bottom: '15%',
    left: '7%',
    right: '7%',
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 30,

  },
  healthJ: {
    width: 136,
    height: 20,
    left: '27%' 
  },
  StepC: {
    width: 150,
    height: 175,
    right: "1%",
    top: "45%"
    
  },
  WaterR: {
    width: 150,
    height: 175,
    left: "52%",
    bottom: "28.7%",    
  },
  HeartR: {
    width: 150,
    height: 175,
    left: "52%",
    bottom: "26.4%",
    
  },
  SleepT: {
    width: 150,
    height: 175,
    right: "1%",
    bottom:"100%",
  },
  SetA: {
    width: 140,
    height: 40,
    bottom: "60%",
    left: "25%"
  },
  UserI: {
    width: 66,
    height: 66,
    left: "78%",
    top: "5%"
  },
  Menu: {
    width: 27,
    height: 27,
    bottom: "3%",
    left: "5%"
  },
  Good: {
    left: "9%",
    top: "15%",
    color: 'white',
    fontSize: 20
  }

});

export default HomeScreen;
