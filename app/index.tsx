
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, Switch } from 'react-native';
import React, { useState } from 'react';

const quotes = [
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
];

export default function QuoteGenerator() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const generateQuote = () => {
    setQuoteIndex(Math.floor(Math.random() * quotes.length));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    },
    quoteText: {
      fontSize: 28,
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'serif',
      fontStyle: 'italic',
      color: isDarkMode ? '#fff' : '#333',
    },
    authorText: {
      fontSize: 18,
      textAlign: 'right',
      marginBottom: 40,
      fontFamily: 'sans-serif',
      color: isDarkMode ? '#ccc' : '#555',
    },
    button: {
      backgroundColor: isDarkMode ? '#28a745' : '#007BFF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    switchContainer: {
      position: 'absolute',
      top: 50,
      right: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    switchText: {
      color: isDarkMode ? '#fff' : '#333',
      marginRight: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <Text style={styles.quoteText}>
        "{quotes[quoteIndex].quote}"
      </Text>
      <Text style={styles.authorText}>
        - {quotes[quoteIndex].author}
      </Text>
      <TouchableOpacity style={styles.button} onPress={generateQuote}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </View>
  );
}
