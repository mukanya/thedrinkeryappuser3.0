import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_IMAGE = "https://img.freepik.com/free-vector/barman-uniform-pouring-drink-glasses-bartender-making-cocktails-serving-woman-client-talking-drinking-wine-bar-counter-modern-restaurant-interior-flat-horizontal_48369-27997.jpg?w=900";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Store', { id: restaurant.id });
  };
  
  return (
      <Pressable onPress={onPress} style={styles.restaurantContainer}>
        <Image
            source={{
                uri: restaurant.image.startsWith('http') 
                ? restaurant.image 
                : DEFAULT_IMAGE,
            }} 
              style={styles.image}
          />
          <View style={styles.row}>
          <View>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.subname}>
              $ {restaurant.deliveryFee.toFixed(1)} &#8226;
              {restaurant.minDeliveryTime}-
              {restaurant.maxDeliveryTime} minutes
          </Text>
      </View>


          <View style={styles.rating}>
              <Text>{restaurant.rating.toFixed(1)}</Text>
              </View>
          </View>
      </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
      width: '100%',
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 5,
    },
    subname: {
      color: 'grey',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgray',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
  });
  

  