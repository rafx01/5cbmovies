import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { GoogleSignin, User, isSuccessResponse } from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import { BaseButton } from '@/components/BaseButton';

GoogleSignin.configure({});

export function Signin() {
  const [auth, setAuth] = useState<User | null>(null);
  const localImageSource = require('../../assets/file.jpg');

  async function handleGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices();
      const result = await GoogleSignin.signIn();
      if (isSuccessResponse(result)) {
        setAuth(result.data);
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="h-full w-full px-4 pt-10">
      <View className="h-1/3 w-full items-center justify-center  ">
        <Image
          style={{ width: 120, height: 140 }}
          source={localImageSource}
          contentFit="fill"
          transition={1000}
        />
        <View className="mt-4">
          <Text className=" text-4xl font-semibold text-black">5CBMovies</Text>
        </View>
        <View className="bg-slate-600">
          <BaseButton
            theme="primary"
            title="Faça login com o Google"
            onPress={() => handleGoogleSignin()}
          />
        </View>
      </View>
    </View>
  );
}
