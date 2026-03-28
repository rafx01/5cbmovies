import { ViewsTitle } from '@/components/ViewsTitle';
import { classNames } from '@/utils/classnames';
import { ReactNode } from 'react';
import { View } from 'react-native';

export type HeaderTemplateProps = {
  children: ReactNode;
  pageName?: string;
  goBack?: boolean;
  addPadding?: boolean;
};

export function HeaderTemplate({ children, addPadding, goBack, pageName }: HeaderTemplateProps) {
  return (
    <View className=" relative flex-1 pt-5">
      <View className={classNames('px-5 pb-5')}>
        {pageName && <ViewsTitle goBack={goBack} title={pageName} />}
      </View>
      <View className={classNames(addPadding ? 'px-5' : '', 'flex-1')}>{children}</View>
    </View>
  );
}
