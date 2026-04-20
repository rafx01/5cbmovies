import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-gesture-handler';
import Navigation from '@/navigation';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const colorScheme = useColorScheme();
  const theme = useMemo(() => (colorScheme === 'dark' ? DarkTheme : DefaultTheme), [colorScheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigation theme={theme} />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
