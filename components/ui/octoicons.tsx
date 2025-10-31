import { Octicons } from '@expo/vector-icons';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

export function OcticonsIcon({
  name,
  size = 24,
  color = '#000',
  style,
}: {
  name: keyof typeof Octicons.glyphMap;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  return <Octicons name={name} size={size} color={color} style={style} />;
}