import { Text, View } from 'react-native';

export function ViewsTitle({ title, goBack }: { title?: string; goBack?: boolean }) {
  return (
    <View className={'item-center w-full flex-row justify-center py-4'}>
      {/* {goBack && <GoBackButton />} */}
      <View className="flex-1 flex-row items-center justify-center pr-6">
        <Text className={`text-neutral-low-dark self-center text-xl font-bold`}>{title}</Text>
      </View>
    </View>
  );
}
