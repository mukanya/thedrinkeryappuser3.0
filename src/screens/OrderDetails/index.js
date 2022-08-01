import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import DishListItem from '../../components/DishListItem';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';

const order = orders[0];

const OrderDetailsHeader = () => {
    return (
        <View>
            
            <View style={styles.page}>
            <Image source={{uri: order.Restaurant.image}} style={styles.image} />

            <View style={styles.container}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            <Text style={styles.subname}>{order.status}  &#8226; 2 days ago</Text>

            <Text style={styles.menuTitle}>Your Orders</Text>
            </View>
        </View>
        </View>
    );
};

const OrderDetails = () => {
    return (
        <FlatList
            ListHeaderComponent={OrderDetailsHeader}
            data={restaurants[0].dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
     />
    );
};

export default OrderDetails;




const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    },

    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7,
    },

    subname: {
        fontSize: 15,
        color: '#525252',
    },
    container: {
        margin: 10,
    },

});