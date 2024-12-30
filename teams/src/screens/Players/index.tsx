import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form } from "./styles";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
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
      
    </Container>
  )
}