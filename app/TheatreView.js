import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './AppStyles';
const TheatreView = (props) => {
    const { name, renderItem, FlatListItemSeparator, showtimes, loading } = props
    return (
        
        <View style={styles.parentContainer}>
            <View>
                <Text style={styles.textStyle}>Movies playing at {name} </Text>
            </View>
            


            
            <FlatList
            data={showtimes}
            ItemSeparatorComponent={FlatListItemSeparator}
            renderItem={item => renderItem(item)}
            keyExtractor={item => item.film_id}
            onEndReachedThreshold={0.2} />
        
            
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Showtimes...</Text>
                </View>
            }
        </View>
    )
}
export default TheatreView;