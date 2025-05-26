import { Conversation } from '@/type/type';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  item: Conversation;
}

export default function ConversationRender({ item }: Props) {
  return (
    <TouchableOpacity style={styles.item}>
        {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
        ) : (
            <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarInitials}>
                {item.name.charAt(0)}
            </Text>
            </View>
        )}

        <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>{item.lastMessage}</Text>
        </View>

        <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 12 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarInitials: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginLeft: 8,
  },
});