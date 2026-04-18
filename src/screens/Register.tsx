import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Register() {
  async function handleRegister() {}

  const [password, setPassword] = useState(false);
  return (
    <View className="flex-1 items-center justify-between bg-[#0a0a0f] p-3">
      <View className="w-full pt-4">
        <View className="gap-y-2">
          <Text className="text-white">E-mail</Text>
          <TextInput
            className="h-13 mb-3 w-full rounded-2xl border border-[#2a2a3a] bg-[#141420] px-4 text-base text-[#f0ece4]"
            placeholder="seu@email.com"
            placeholderTextColor="#444458"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View className="gap-y-2">
          <Text className="text-white">Senha</Text>
          <View className="flex-row items-center">
            <TextInput
              className="h-13 mb-3 w-full rounded-2xl border border-[#2a2a3a] bg-[#141420] px-4 text-base text-[#f0ece4]"
              placeholder="******"
              placeholderTextColor="#444458"
              autoCapitalize="none"
              secureTextEntry={!password}
            />
            <TouchableOpacity className="bottom-1 right-14" onPress={() => setPassword((p) => !p)}>
              <Text className="text-sm text-[#666680]">{password ? 'Ocultar' : 'Ver'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="mb-20 h-14 w-full items-center justify-center rounded-2xl bg-red-800"
        activeOpacity={0.85}>
        <Text className="text-base font-semibold tracking-wide text-[#f0ece4]">Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
