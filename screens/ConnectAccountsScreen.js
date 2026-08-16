// ConnectAccountsScreen.js
// Screen 2: Connect Accounts (the trust moment)

import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView,
} from 'react-native';

const PROVIDERS = [
  { id: 'gtbank', name: 'GTBank' },
  { id: 'opay', name: 'OPay' },
  { id: 'kuda', name: 'Kuda' },
  { id: 'access', name: 'Access Bank' },
];

export default function ConnectAccountsScreen({ navigation }) {
  const [connected, setConnected] = useState([]);

  const toggleConnect = (id) => {
    // MVP note: replace this with the real provider's linking
    // widget (e.g. Mono Connect) when moving off mock data.
    setConnected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Connect accounts</Text>
        <Text style={styles.subheading}>
          Choose the banks and wallets you'd like to see in one place.
        </Text>

        <View style={styles.grid}>
          {PROVIDERS.map((provider) => {
            const isConnected = connected.includes(provider.id);
            return (
              <TouchableOpacity
                key={provider.id}
                style={[styles.tile, isConnected && styles.tileConnected]}
                onPress={() => toggleConnect(provider.id)}
              >
                <Text
                  style={[
                    styles.tileText,
                    isConnected && styles.tileTextConnected,
                  ]}
                >
                  {provider.name}
                </Text>
                {isConnected && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.trustBox}>
          <Text style={styles.trustText}>
            🔒 We only see your balance. We can't move your money without
            asking you first.
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            connected.length === 0 && styles.continueButtonDisabled,
          ]}
          disabled={connected.length === 0}
          onPress={() => navigation.navigate('Dashboard', { connected })}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 24, paddingTop: 32 },
  heading: { fontSize: 22, fontWeight: '600', color: '#111111', marginBottom: 8 },
  subheading: { fontSize: 14, color: '#666666', marginBottom: 24, lineHeight: 20 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tile: {
    width: '48%',
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F7F7F7',
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tileConnected: {
    borderColor: '#2E4D3C',
    backgroundColor: '#EAF1EE',
  },
  tileText: { fontSize: 14, color: '#333333', fontWeight: '500' },
  tileTextConnected: { color: '#2E4D3C' },
  checkmark: { color: '#2E4D3C', fontWeight: '700' },
  trustBox: {
    flexDirection: 'row',
    backgroundColor: '#F0F4F2',
    borderRadius: 10,
    padding: 14,
    marginBottom: 32,
  },
  trustText: { fontSize: 13, color: '#555555', lineHeight: 19, flex: 1 },
  continueButton: {
    backgroundColor: '#2E4D3C',
    paddingVertical: 16,
    borderRadius: 12,
  },
  continueButtonDisabled: { backgroundColor: '#CCCCCC' },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

