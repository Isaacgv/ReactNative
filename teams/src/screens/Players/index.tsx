import { useState } from 'react';
import { FlatList } from 'react-native'

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Group Name"
        subtitle="add the guys and separate the teams"
      />
      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
        />
      </Form>

      <Filter 
        title="Time A"
        isActive
      />

    <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
    </HeaderList>

    </Container>
  )
}