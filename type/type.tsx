export interface Conversation {
  id: string;
  name: string;
  avatar?: string; // facultatif
  lastMessage: string;
  time: string;
}