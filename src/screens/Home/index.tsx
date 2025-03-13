import { FlatList, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";
import { useState } from "react";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([
    "Josileudo",
    "Lucas",
    "Luiz Marcelo",
  ]);

  function handleParticipantAdd() {
    console.log("Clicado");
  }

  function handleParticipantRemove(id: string) {
    console.log("Removed " + id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.eventInput}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <Button title="+" onPress={handleParticipantAdd} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participants: string) => (
          <Participant
            key={participants}
            name={participants}
            onRemove={() => handleParticipantRemove(participants)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
