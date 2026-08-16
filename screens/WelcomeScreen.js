// WelcomeScreen.js
// Screen 1: Welcome / Value Proposition

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>UA</Text>
        </View>

        <Text style={styles.title}>See all your money.{"\n"}One app.</Text>

        <Text style={styles.subtitle}>
          Connect your bank accounts and wallets to view everything in one place.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ConnectAccounts')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2E4D3C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111111',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 48,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2E4D3C',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

