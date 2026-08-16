// AliasCodeScreen.js
// Screen 5: Your Code (personal alias identifier)

import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Share, Clipboard,
} from 'react-native';

// MVP note: this code is a static mock for now. In a later phase,
// generate and store a unique alias per user in your backend, and
// use it for in-app requests before enabling real transfers.
const MOCK_ALIAS_CODE = '4562';

export default function AliasCodeScreen() {
  const handleCopy = () => {
    Clipboard.setString(MOCK_ALIAS_CODE);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Send me money using my code: ${MOCK_ALIAS_CODE}`,
      });
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Your code</Text>

        <View style={styles.card}>
          <Text style={styles.helperText}>
            Share this code so people can send you money in-app
          </Text>
          <Text style={styles.code}>{MOCK_ALIAS_CODE}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton} onPress={handleCopy}>
              <Text style={styles.actionButtonText}>Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 24, paddingTop: 32 },
  heading: { fontSize: 22, fontWeight: '600', color: '#111111', marginBottom: 16 },
  card: {
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
  },
  helperText: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 12,
    textAlign: 'center',
  },
  code: {
    fontSize: 34,
    fontWeight: '600',
    color: '#111111',
    letterSpacing: 2,
    marginBottom: 20,
  },
  buttonRow: { flexDirection: 'row', width: '100%' },
  actionButton: {
    flex: 1,
    backgroundColor: '#2E4D3C',
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

