import axios from 'axios';
import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TheatreView from './TheatreView';
import styles from './AppStyles';
class Theatre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.navigation.getParam('id'),
            name: this.props.navigation.getParam('name'),
            address: this.props.navigation.getParam('address'),
            date: this.props.navigation.getParam('date'),
            showtimes: null,
            loading: false
        }
        console.log(this.state)
    }

    getShowTimes = () => {
        this.setState({
            loading: true
        })
        axios.get("https://api-gate2.movieglu.com/cinemaShowTimes/?" + "cinema_id=" + this.state.id + "&date=" + this.state.date, {
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
                        showtimes: response.data.films
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
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>{data.item.film_name}</Text>
            </TouchableOpacity>
        )
    
      }

    componentDidMount() {
        this.getShowTimes();
    }

    render() {
        const {name, showtimes, loading} = this.state
        return(
            <TheatreView 
            name = {name}
            showtimes = {showtimes}
            renderItem = {this.renderItem}
            loading = {loading}
            FlatListSeparator = {this.FlatListSeparator}
            />
        )
    }
}

export default Theatre;