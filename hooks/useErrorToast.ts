import Toast, { ToastProps } from 'react-native-toast-message';

interface Props extends ToastProps {
  title: string;
  subtitle?: string;
}

export const useErrorToast = ({ title, subtitle }: Props) => {
  return Toast.show({
    type: 'error',
    text1: title,
    text2: subtitle,
  });
};
