import ConversationRender from '@/components/Conversation';
import { Conversation } from '@/type/type';
import { FlatList, StyleSheet, View } from 'react-native';

// Données temporaires pour affichage
const mockConversations : Conversation[] = [
  {
    id: '1',
    name: 'Alice Dupont',
    lastMessage: 'À ce soir pour l’événement 🎉',
    time: '14:32',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Groupe de Projet',
    lastMessage: 'OK pour la réunion demain ?',
    time: '13:12',
  },
  {
    id: '3',
    name: 'Lucas Martin',
    lastMessage: 'Yes merci 👍',
    time: '10:05',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Quentin Moutté',
    lastMessage: 'Connard',
    time: '666:666',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Conversation }) => (
          <ConversationRender item={item} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 12 },
});
