import Toast, { ToastProps } from 'react-native-toast-message';

interface Props extends ToastProps {
  title: string;
  subtitle?: string;
}

export const useSuccessToast = ({ title, subtitle }: Props) => {
  return Toast.show({
    type: 'success',
    text1: title,
    text2: subtitle,
  });
};
