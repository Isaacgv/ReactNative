import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
   
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap='$4'>
        <UserPhoto source={{ uri: 'https://github.com/isaacgv.png'}} w='$16' h='$16' alt='Users Image' />    
        <VStack>
            <Text color="$gray100" fontSize="$sm">
            Hello
            </Text>
            <Heading color="$gray100" fontSize="$md">
            Isaac
            </Heading>
        </VStack>
    </HStack>
  )
}