import {View, Text, Image } from 'react-native';
import styles from './styles';

const DEFAULT_IMAGE = "https://img.freepik.com/free-vector/barman-uniform-pouring-drink-glasses-bartender-making-cocktails-serving-woman-client-talking-drinking-wine-bar-counter-modern-restaurant-interior-flat-horizontal_48369-27997.jpg?w=900";

const RestaurantHeader = ({ restaurant }) => {
    return (
        <View style={styles.page}>
            <Image source={{
                uri: restaurant.image.startsWith('http') 
                ? restaurant.image 
                : DEFAULT_IMAGE, }}
            style={styles.image} />

            <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subname}>
              $ {restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-
              {restaurant.maxDeliveryTime} minutes
            </Text>
            <Text style={styles.menuTitle}>Products</Text>


            </View>
        </View>
    );
};


export default RestaurantHeader;