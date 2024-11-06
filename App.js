import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [age, setAge] = useState('');

  const handleCalculateAge = () => {
    const [birthYear, birthMonth, birthDay] = birthDate.split('-');
    const [birthHour, birthMinute] = birthTime.split(':');
    
    const birthDateTime = new Date(
      birthYear,
      birthMonth - 1,
      birthDay,
      birthHour,
      birthMinute
    );

    const now = new Date();
    const ageInMillis = now - birthDateTime;

    const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));
    const ageInMonths = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 30));
    const ageInDays = Math.floor(ageInMillis / (1000 * 60 * 60 * 24));
    const ageInHours = Math.floor(ageInMillis / (1000 * 60 * 60));
    const ageInMinutes = Math.floor(ageInMillis / (1000 * 60));

    setAge(
      `Age: ${ageInYears} years, ${ageInMonths % 12} months, ${ageInDays % 30} days, ${ageInHours % 24} hours, and ${ageInMinutes % 60} minutes.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your birth date and time</Text>
      
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
        value={birthDate}
        onChangeText={setBirthDate}
      />
      
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        keyboardType="numeric"
        value={birthTime}
        onChangeText={setBirthTime}
      />

      <Button title="Calculate Age" onPress={handleCalculateAge} />
      
      {age && <Text style={styles.result}>{age}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
