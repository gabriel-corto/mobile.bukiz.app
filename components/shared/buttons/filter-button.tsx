import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface FilterButtonProps extends TouchableOpacityProps {
  item: string;
  filter: string;
}
export function FilterButton({ item, ...props }: FilterButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      className={` px-4 py-2 mr-4 rounded-full ${item === props.filter ? 'bg-zinc-800' : 'bg-zinc-200'}`}
    >
      <Text className={`font-bold text-sm ${item === props.filter ? 'text-white' : 'text-zinc-600'}`}>{item}</Text>
    </TouchableOpacity>
  );
}
