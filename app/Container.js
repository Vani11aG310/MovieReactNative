import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import axios from 'axios';
import styles from './AppStyles';
import AppView from './AppView';

const date = '2022-12-13';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          fromAxios: false,
          axiosData: null
        };
      }
    
      goForAxios = () => {
        this.setState({
            fromAxios: true,
            loading: true,
    
        })
        axios.get("https://api-gate2.movieglu.com/cinemasNearby/?n=5  ", {
          headers: {
            'Content-type': 'application/json',
            'api-version': 'v200',
            'Authorization': 'Basic QlJJVF9YWDpQWFZiSk83c2NKMUU=',
            'Geolocation': '-22.0;14.0',
            'client': 'BRIT',
            'x-api-key': 'hMel9FnKzP9kWlBZs4bEn7V0uw9XvZ5P88RIMq48',
            'device-datetime': '2022-12-05T11:25:00.007Z',
            'territory': 'XX'
          }
        })
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        axiosData: response.data.cinemas
                    })
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            });
        }
      
      FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
      }
      renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list} onPress={() => 
                this.props.navigation.navigate('Details', {
                    id: data.item.cinema_id,
                    name: data.item.cinema_name,
                    address: data.item.address,
                    date: date
                })}>
                <Text style={styles.lightText}>{data.item.cinema_name}</Text>
                <Text style={styles.lightText}>{data.item.address}</Text>
                <Text style={styles.lightText}>{data.item.city}</Text>
                <Text style={styles.lightText}>{data.item.state}</Text>
            </TouchableOpacity>
        )
    
      }
    
      render() {
        const { fromAxios, axiosData, loading } = this.state
        return(
          <AppView
          goForAxios={this.goForAxios}
          axiosData={axiosData}
          loading={loading}
          fromAxios={fromAxios}
          FlatListSeparator={this.FlatListSeparator}
          renderItem={this.renderItem}
           />
        );
      }
}

export default Container;