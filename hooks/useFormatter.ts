import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

export const useDateFormatter = () => {
  const formatDateToNow = (date: string) => {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
      locale: pt,
      includeSeconds: false,
    });
  };

  return {
    formatDateToNow,
  };
};
