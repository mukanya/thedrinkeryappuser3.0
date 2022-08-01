import { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Store } from '../../models';


export default function HomeScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // const results = await DataStore.query(Store)
    // setRestaurants(results);
    // DataStore.query(Store).then((results) => setRestaurants(results));
    DataStore.query(Store).then( setRestaurants );
  }, []);

  // useEffect(() => {
  //   fetchRestaurants();
  // }, []);

  return (
    <View styles={styles.page}>
             <FlatList 
              data={restaurants}
              renderItem={({ item }) => <RestaurantItem restaurant={item} />}
              showsVerticalScrollIndicator={false}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});