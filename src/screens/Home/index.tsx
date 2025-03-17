import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
  TextInputProps,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { Button } from "../../components/Button";
import { useState } from "react";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>(["João"]);
  const [participantName, setParticipantsName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        `Participante ${participantName} existe`,
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantsName("");
  }

  function handleParticipantRemove(id: string) {
    Alert.alert("Remover", `Remover o participante ${id}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) => {
            return prevState.filter((participant) => participant !== id);
          });
          Alert.alert("Deletado");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={setParticipantsName}
          value={participantName}
        />

        <Button title="+" onPress={handleParticipantAdd} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};

// ==== OBS ====
/* Podemos usar o FlatList para renderizar uma lista de itens */
/* Podemos usar o ScrollView para renderizar uma lista de itens */
