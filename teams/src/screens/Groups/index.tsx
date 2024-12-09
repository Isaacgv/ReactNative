import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight 
        title="Group"
        subtitle="Play with them"
      />
       <GroupCard 
        title="Galery" />
    </Container>
  );
}