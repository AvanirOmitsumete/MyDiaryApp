import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  readonly title: string;
  readonly subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#0f172a',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  title: { fontSize: 20, fontWeight: 'bold', color: '#ffffff' },
  subtitle: { fontSize: 14, color: '#94a3b8', marginTop: 2 },
});