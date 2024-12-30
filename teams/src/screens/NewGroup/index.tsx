import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
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
        />
      </Content>
    </Container>
  )
}