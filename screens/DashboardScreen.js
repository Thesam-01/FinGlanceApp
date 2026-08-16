// DashboardScreen.js
// Screen 3: Dashboard (combined balance view)

import React from 'react';
import {
  View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,
} from 'react-native';

// Mock data — replace with real balances from your open banking
// provider (e.g. Mono) once the backend integration is ready.
const MOCK_ACCOUNTS = [
  { id: 'gtbank', name: 'GTBank', balance: 210500 },
  { id: 'opay', name: 'OPay', balance: 158900 },
  { id: 'kuda', name: 'Kuda', balance: 112900 },
];

function formatNaira(amount) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export default function DashboardScreen({ navigation }) {
  const total = MOCK_ACCOUNTS.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Total balance</Text>
        <Text style={styles.total}>{formatNaira(total)}</Text>

        <View style={styles.accountsCard}>
          {MOCK_ACCOUNTS.map((account) => (
            <View key={account.id} style={styles.accountRow}>
              <View style={styles.accountLeft}>
                <View style={styles.iconCircle}>
                  <Text style={styles.iconText}>
                    {account.name.charAt(0)}
                  </Text>
                </View>
                <Text style={styles.accountName}>{account.name}</Text>
              </View>
              <Text style={styles.accountBalance}>
                {formatNaira(account.balance)}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => navigation.navigate('Transactions')}
        >
          <Text style={styles.linkText}>View all transactions</Text>
          <Text style={styles.linkArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => navigation.navigate('AliasCode')}
        >
          <Text style={styles.linkText}>Your code</Text>
          <Text style={styles.linkArrow}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 24, paddingTop: 32 },
  label: { fontSize: 13, color: '#666666', marginBottom: 4 },
  total: { fontSize: 32, fontWeight: '600', color: '#111111', marginBottom: 24 },
  accountsCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  accountLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DCE8E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: { color: '#2E4D3C', fontWeight: '600', fontSize: 13 },
  accountName: { fontSize: 14, color: '#333333' },
  accountBalance: { fontSize: 14, fontWeight: '600', color: '#111111' },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  linkText: { fontSize: 15, color: '#111111', fontWeight: '500' },
  linkArrow: { fontSize: 15, color: '#999999' },
});

