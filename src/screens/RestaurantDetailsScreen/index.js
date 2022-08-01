import { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Pressable, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Store, Product } from '../../models';


const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState();
  const [dishes, setDishes] = useState();

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  useEffect(() => {
    if (!id) {
      return;
    }
    //fetch the store with the id
    DataStore.query(Store, id).then(setRestaurant);
    DataStore.query(Product, (dish) => dish.storeID("eq", id)).then(setDishes);
      }, [id]);

  if (!restaurant) {
    return (<ActivityIndicator size={'large'} color='gray' />)
  }
  console.log(restaurant);


    return (   
        <View style={styles.page}>
          <FlatList
            ListHeaderComponent={() => <Header restaurant={restaurant} />} 
            data={dishes}
            renderItem={({ item }) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}       
          />          
            <Ionicons
            onPress={() => navigation.goBack()}
            name="arrow-back-circle"
            size={45}
            color='white'
            style={styles.iconContainer}
          />
          </View>

    );
};



export default RestaurantDetailsScreen;