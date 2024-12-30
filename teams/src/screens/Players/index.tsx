import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Group Name"
        subtitle="add the guys and separate the teams"
      />
    </Container>
  )
}