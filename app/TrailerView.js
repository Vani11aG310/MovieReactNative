import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './AppStyles';
import Video from 'react-native-video';
const TrailerView = (props) => {
    const { trailer, loading, film_name} = props
    console.log(trailer)
    return (
        <View style={styles.parentContainer}>
            <View style={{paddingBottom:50}}>
                <Text style={styles.textStyle}>Trailer for {film_name} </Text>
            </View>
            {trailer == null && 
            <View style={{paddingBottom:50}}>
            <Text style={styles.textStyle}>There are no trailers for this film TvT</Text>
            </View>
            }
            {!loading && trailer != null &&
            <View style={{paddingLeft:20}}>
                <Video 
                source={{uri: trailer}}
                style={{ width: 400, height: 300}}
                resizeMode=''
                volume={100.0}
                rate={1.0}
                />
            </View>
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading trailer...</Text>
                </View> 
            }
            
        </View>
    )
}

export default TrailerView;