import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { classNames } from '@/utils/classnames';
import { Loading } from './Loading';

type BaseButtonProps = {
  onPress: () => void;
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  theme?: 'primary' | 'outline-primary' | 'danger' | 'outline-danger' | 'disabled';
  icon?: ReactNode;
};

export const BaseButton = forwardRef(
  (
    { onPress, title, loading, theme = 'primary', disabled, icon }: BaseButtonProps,
    ref: ForwardedRef<typeof TouchableHighlight>
  ) => {
    let bgColor = '';
    let underlayColor = '';
    let textColor = '';
    let iconColor = '' as 'primary' | 'danger' | 'black' | 'white' | 'success';
    switch (theme) {
      case 'primary':
        bgColor = 'bg-primary-pure';
        underlayColor = '#619EEA';
        textColor = 'text-white';
        iconColor = 'white';
        break;
      case 'outline-primary':
        bgColor = 'border-primary-pure border-2';
        underlayColor = '#E5E7EB';
        textColor = 'text-primary-pure';
        iconColor = 'primary';
        break;
      case 'disabled':
        bgColor = 'border-high-100 bg-[#E5E7EB] border-2';
        underlayColor = '#E5E7EB';
        textColor = 'text-high-500';
        break;
      case 'danger':
        bgColor = 'bg-danger';
        underlayColor = '#991b1b';
        textColor = 'text-white';
        iconColor = 'white';
        break;
      case 'outline-danger':
        bgColor = 'border-danger border-2';
        underlayColor = '#E5E7EB';
        textColor = 'text-danger';
        iconColor = 'danger';
        break;
    }

    console.log(bgColor, underlayColor, textColor, iconColor);

    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={underlayColor}
        onPress={onPress}
        className={classNames(
          'h-14 w-full items-center justify-center rounded-lg',
          bgColor,
          loading ? 'opacity-80' : ''
        )}
        disabled={disabled || loading}
        testID="baseButton">
        <View className="flex-row items-center space-x-2" style={{ gap: 4 }}>
          <View className="flex-row items-center " style={{ gap: 6 }}>
            <Text className={classNames('text-base font-bold ', textColor)}>{title}</Text>
            {icon}
          </View>
          {loading && <Loading />}
        </View>
      </TouchableHighlight>
    );
  }
);
