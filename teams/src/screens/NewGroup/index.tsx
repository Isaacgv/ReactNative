import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { Alert } from "react-native";

import { AppError } from "@utils/AppError";

import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew() {
    try {

      if(group.trim().length === 0) {
        return Alert.alert('New Group', 'Enter the name of the class.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });

    } catch (error) {
        if(error instanceof AppError) {
          Alert.alert('New Group', error.message);
        } else {
          Alert.alert('New Groupo', 'Unable to create a new group.');
          console.log(error);
        }
    }
  }
  
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="New Group"
          subtitle="create the class to add people"
        />
        <Input 
            placeholder="Group name"
            onChangeText={setGroup}
        />

        <Button 
          title="Create"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}