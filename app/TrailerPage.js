import axios from 'axios';
import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TrailerView from './TrailerView';
import styles from './AppStyles';
import Video from 'react-native-video';
class Trailer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            film_id: this.props.navigation.getParam('film_id'),
            film_name: this.props.navigation.getParam('film_name'),
            trailer: "no trailers",
            loading: false
        }
    }

    getTrailer = () => {
        this.setState({
            loading: true
        })
        axios.get("https://api-gate2.movieglu.com/trailers/?" + "film_id=" + this.state.film_id, {
            headers: {
                'Content-type': 'application/json',
                'api-version': 'v200',
                'Authorization': 'Basic QlJJVF9YWDpQWFZiSk83c2NKMUU=',
                'Geolocation': '-22.0;14.0',
                'client': 'BRIT_0',
                'x-api-key': 'hMel9FnKzP9kWlBZs4bEn7V0uw9XvZ5P88RIMq48',
                'device-datetime': '2023-04-02T11:25:00.007Z',
                'territory': 'XX'
            }
        })
            .then(response => {
                setTimeout(() => {
                    if (response.data.trailers == null){
                        this.setState({
                            loading: false,
                            trailer: null
                        })
                        return;
                        
                    } else if (response.data.trailers != null){
                        this.setState({
                            loading: false,
                            trailer: response.data.trailers.high[0].film_trailer
                        })
                    }
                    console.log(response.data)
                }, 2000)
            })
            .catch(error => {
                console.log(error)
        });
        console.log(this.state)
    }

    componentDidMount() {
        this.getTrailer();
    }

    render() {
        const {trailer, loading, film_name} = this.state
        return(
            <TrailerView 
            trailer = {trailer}
            loading = {loading}
            film_name = {film_name}/>
        )
    }
}

export default Trailer;