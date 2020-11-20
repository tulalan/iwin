import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
const {width, height} = Dimensions.get('window');

export default function ErrorNetwork() {
  const {isConnected, isInternetReachable} = useNetInfo();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isConnected || !isInternetReachable) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [isConnected, isInternetReachable]);

  if (isError) {
    return (
      <View style={styles.ErrorStyle}>
        <Image
          source={require('../../assets/server.png')}
          style={styles.image}
        />
        <Text style={styles.errorText}>Mất kết nối</Text>
        <Text>Vui lòng kiểm tra lại kết nối internet</Text>
      </View>
    );
  }

  return <></>;
}

const styles = StyleSheet.create({
  ErrorStyle: {
    flex: 1,
    position: 'absolute',
    width,
    height,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 150, resizeMode: 'center'},
  errorText: {
    fontSize: 50,
  },
});
