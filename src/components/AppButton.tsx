import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AppButtonProps {
  readonly title: string;
  readonly onPress: () => void;
  readonly iconName?: keyof typeof Ionicons.glyphMap;
  readonly variant?: 'primary' | 'secondary' | 'outline';
}

export default function AppButton({ title, onPress, iconName, variant = 'primary' }: AppButtonProps) {
  const isOutline = variant === 'outline';
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isSecondary && styles.secondaryButton,
        isOutline && styles.outlineButton
      ]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {iconName && (
        <Ionicons 
          name={iconName} 
          size={18} 
          color={isOutline || isSecondary ? '#0284c7' : '#ffffff'} 
          style={styles.icon} 
        />
      )}
      <Text style={[
        styles.text, 
        isSecondary && styles.secondaryText,
        isOutline && styles.outlineText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#0f172a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#0284c7',
  },
  outlineButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#0284c7',
  },
  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#0284c7',
  },
  icon: {
    marginRight: 8,
  },
});