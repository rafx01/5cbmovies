import { Image } from 'expo-image';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GoogleSignin, User, isSuccessResponse } from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Zod from 'zod';
import { loginSchema } from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePostLogin } from '@/hooks/auth/usePostLogin';

GoogleSignin.configure({});

export function Signin() {
  const [auth, setAuth] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const localImageSource = require('../../assets/file.jpg');

  async function handleGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      if (isSuccessResponse(result)) {
        setAuth(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const {
    control,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<Zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const login = usePostLogin();

  return (
    <View className="flex-1 bg-[#0a0a0f]">
      <View className="flex-1 items-center px-8 pt-20">
        <View className="mb-7 h-28 w-24 items-center justify-center rounded-2xl border border-red-900/30 bg-[#141420]">
          <Image style={{ width: 60, height: 70 }} source={localImageSource} contentFit="fill" />
        </View>

        <Text className="mb-2 text-4xl font-bold -tracking-wide text-[#f0ece4]">5CBMovies</Text>
        <TouchableOpacity
          className="mb-4 h-14 w-full items-center justify-center rounded-2xl bg-[#f0ece4]"
          onPress={handleGoogleSignin}
          activeOpacity={0.85}>
          <Text className="text-base font-semibold text-[#1a1a2e]">Entrar com o Google</Text>
        </TouchableOpacity>
        <View className="mb-4 w-full flex-row items-center gap-3">
          <View className="h-px flex-1 bg-[#2a2a3a]" />
          <Text className="text-xs tracking-widest text-[#444458]">OU</Text>
          <View className="h-px flex-1 bg-[#2a2a3a]" />
        </View>
        <TextInput
          className="h-13 mb-3 w-full rounded-2xl border border-[#2a2a3a] bg-[#141420] px-4 text-base text-[#f0ece4]"
          placeholder="seu@email.com"
          placeholderTextColor="#444458"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <View className="h-13 mb-5 w-full flex-row items-center rounded-2xl border border-[#2a2a3a] bg-[#141420] px-4">
          <TextInput
            className="flex-1 text-base text-[#f0ece4]"
            placeholder="••••••••"
            placeholderTextColor="#444458"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword((p) => !p)}>
            <Text className="text-sm text-[#666680]">{showPassword ? 'Ocultar' : 'Ver'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mb-5 h-14 w-full items-center justify-center rounded-2xl bg-red-800"
          activeOpacity={0.85}>
          <Text className="text-base font-semibold tracking-wide text-[#f0ece4]">Entrar</Text>
        </TouchableOpacity>

        <View className="flex-row items-center">
          <Text className="text-sm text-[#444458]">Não tem conta? </Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-red-800">Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
