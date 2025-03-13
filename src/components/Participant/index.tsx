import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";

export interface ParticipantProps {
  name: string;
  onRemove: () => void;
}

export const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button title="-" type="secondary" onPress={() => onRemove()} />
    </View>
  );
};
