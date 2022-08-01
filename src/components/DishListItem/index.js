import {View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({ dish }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Products', {id: dish.id})}
            style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.unitType}>{dish.unitType}</Text>
                <Text style={styles.unitVolume}>{dish.unitVolume}</Text>
                <Text style={styles.price}>{dish.price}</Text>
                </View>
                {dish.image && (<Image source={{uri: dish.image}} style={styles.image} />
                )}
                
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: 'lightgray',
        paddingBottom: 5,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.5,
    },
    description: {
        color: 'gray',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    unitType: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gray',
        marginVertical: 2,
    },
    unitVolume: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gray',
        marginVertical: 2,
    },
    image: {
        height: 100,
        aspectRatio: 1,

    }

});

export default DishListItem;