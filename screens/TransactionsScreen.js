// TransactionsScreen.js
// Screen 4: Combined Transaction Feed

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

// Mock data — replace with real transaction history pulled from
// your open banking provider (e.g. Mono) once connected.
const MOCK_TRANSACTIONS = [
  {
    id: '1',
    description: 'Jumia checkout',
    source: 'GTBank',
    date: 'Today',
    amount: -14200,
  },
  {
    id: '2',
    description: 'Airtime top-up',
    source: 'OPay',
    date: 'Yesterday',
    amount: -2000,
  },
  {
    id: '3',
    description: 'Salary credit',
    source: 'Kuda',
    date: '3 days ago',
    amount: 180000,
  },
  {
    id: '4',
    description: 'POS withdrawal',
    source: 'GTBank',
    date: '4 days ago',
    amount: -5000,
  },
];

function formatNaira(amount) {
  const sign = amount < 0 ? '-' : '+';
  return `${sign}₦${Math.abs(amount).toLocaleString('en-NG')}`;
}

function TransactionRow({ item }) {
  const isCredit = item.amount > 0;
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.meta}>
          {item.source} · {item.date}
        </Text>
      </View>
      <Text style={[styles.amount, isCredit && styles.amountCredit]}>
        {formatNaira(item.amount)}
      </Text>
    </View>
  );
}

export default function TransactionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Transactions</Text>
      <FlatList
        data={MOCK_TRANSACTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionRow item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 24 },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111111',
    marginTop: 24,
    marginBottom: 16,
  },
  listContent: { paddingBottom: 24 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  description: { fontSize: 14, color: '#111111', marginBottom: 2 },
  meta: { fontSize: 12, color: '#999999' },
  amount: { fontSize: 14, fontWeight: '600', color: '#111111' },
  amountCredit: { color: '#2E8B57' },
  separator: { height: 1, backgroundColor: '#EEEEEE' },
});

