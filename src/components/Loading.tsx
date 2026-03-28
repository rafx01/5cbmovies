import { ActivityIndicator } from 'react-native';

export function Loading() {
  return <ActivityIndicator color="#0000ff" size={'small'} testID="loading" />;
}
