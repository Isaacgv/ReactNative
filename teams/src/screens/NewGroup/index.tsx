import { Container, Content, Icon } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {

  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group: 'New Group' })
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