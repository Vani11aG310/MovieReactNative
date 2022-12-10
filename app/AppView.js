import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './AppStyles';
const AppView = (props) => {
    const { goForAxios, fromAxios, renderItem, FlatListItemSeparator, axiosData, loading } = props
    return (
        
        <View style={styles.parentContainer}>
            <View>
                <Text style={styles.textStyle}>Ready to watch a movie tonight?</Text>
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Find cinemas near you ->'}
                    onPress={goForAxios}
                    color='green'
                />
            </View>


            {fromAxios ?
                <FlatList
                data={axiosData}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.cinema_id}
                onEndReachedThreshold={0.2}
            /> : null
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Theatres...</Text>
                </View>
            }
        </View>
    )
}
export default AppView;