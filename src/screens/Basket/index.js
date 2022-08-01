import { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import restaurants from '../../../assets/data/restaurants.json';

const restaurant = restaurants[0];

const BasketDishItem = ( {basketDish} ) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={{ fontWeight: '600' }}>{basketDish.name}</Text>
            <Text style={{ marginLeft: 'auto' }}>${basketDish.price}</Text>
        </View>
    );
};

const Basket = () => {
	const [quantity, setQuantity] = useState(1);
	
	return (
	    <View style={styles.page}>
        <Text style={styles.name}>{restaurant.name}</Text>

        <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 16 }}>Your Items</Text>
        
        <FlatList
            data={restaurant.dishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} /> }
         />
        
        <View style={styles.seperator} />
        
        <View style={styles.button}>
            <Text style={styles.buttonText}>Create Order</Text>
        </View>
        </View>
	);
};

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
      paddingHorizontal: 10,
    },
  
    quantityContainer: {
      backgroundColor: "lightgray",
      paddingHorizontal: 5,
      paddingVertical: 2,
      marginRight: 10,
      borderRadius: 3,
    },
        page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40, //temp fix
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    seperator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
  });


export default Basket;



// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         width: '100%',
//         paddingVertical: 40, //temp fix
//         padding: 10,
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: '600',
//         marginVertical: 10,
//     },
//     description: {
//         color: 'gray',
//     },
    // seperator: {
    //     height: 1,
    //     backgroundColor: 'lightgrey',
    //     marginVertical: 10,
    // },
//     row: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 15,
//     },
//     quantity: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         marginHorizontal: 20,
//     },
    // button: {
    //     backgroundColor: 'black',
    //     marginTop: 'auto',
    //     padding: 20,
    //     alignItems: 'center',
    // },
    // buttonText: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: 18,
    // },
//     quantityContainer: {
//         backgroundColor: 'lightgrey',
//         paddingHorizontal: 5,
//         paddingVertical: 2,
//         marginRight: 10,
//         borderRadius: 3,
//     },
// });


