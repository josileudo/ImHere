import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
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
    if (participants.includes("Josileudo")) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }
    console.log("Clicado");
  }

  function handleParticipantRemove(id: string) {
    Alert.alert("Remover", `Remover o participante ${id}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
        // setParticipants((prevState) =>
        //   prevState.filter((participant) => participant !== id)
        // ),
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
