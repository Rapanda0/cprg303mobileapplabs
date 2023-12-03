import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, Button } from 'react-native';

function DumbAnimeShit() {
  const apiURL = 'https://api.waifu.im/search';

  const [isNsfw, setIsNsfw] = useState(false);
  const [animepic, setAnimepic] = useState('');

  const handleChangeImage = () => {
    fetchData();
  };

  const toggleNsfw = () => {
    setIsNsfw((prevIsNsfw) => !prevIsNsfw);
  };

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams({ is_nsfw: isNsfw });
      const requestUrl = `${apiURL}?${queryParams}`;

      const response = await fetch(requestUrl);
      const data = await response.json();

      setAnimepic(data.images[0].url);
      console.log('Image URL:', data.images[0].url);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [isNsfw]); 

  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>lmao im sorry idk what else to use</Text>
      <View style={styles.buttonContainer}>
        <Button title={`Toggle NSFW: ${isNsfw ? 'ON' : 'OFF'}`} onPress={toggleNsfw} />
        <Button title="Change Image" onPress={handleChangeImage} />
      </View>
      {animepic ? (
        <Image source={{ uri: animepic }} style={styles.image} />
      ) : (
        <Text style={styles.loadingText}>Image Not Found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DumbAnimeShit;
