import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    Button, Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class TimePickerScreen extends Component {
    state = {
        date: new Date('2020-06-12T14:42:42'),
        mode: 'date',
        show: false,
      }
    
      setDate = (event, date) => {
        date = date || this.state.date;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          date,
        });
      }
    
      show = mode => {
        this.setState({
          show: true,
          mode,
        });
      }
      datepicker = () => {
        this.show('date');
      }
    
    
      timepicker = () => {
        this.show('time');
      }
    
    render() {
        const { show, date, mode } = this.state;
        return (
            <View>
            <TouchableOpacity
                onPress={this.timepicker}
                style={[styles.button]}
            >
                <Text style={styles.buttonText} >Enter starting Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.timepicker}
                style={[styles.button]}
            >
                <Text style={styles.buttonText} >Enter ending Time</Text>
            </TouchableOpacity>
           {/*  <TouchableOpacity
                onPress={() => this.props.navigation.navigate('MapScreen')}
                style={[styles.button1]}
            >
                <Text style={styles.buttonText} >Done</Text>
            </TouchableOpacity> */}
           
            { show && <DateTimePicker value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate} 
                        RNDateTimePicker mode="time" />

            }
          </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#000000',
        fontWeight: "900",
        fontSize: '15rem',
    },
    button: {
        paddingTop:'20rem',
        paddingBottom:'20rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '200rem',
        height: '45rem',
        borderRadius: '17rem',
        elevation: 5,
    },
    button1: {
        paddingTop:'20rem',
        paddingBottom:'20rem',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '200rem',
        height: '45rem',
        borderRadius: '17rem',
        elevation: 5,
    },
});

export default TimePickerScreen;
