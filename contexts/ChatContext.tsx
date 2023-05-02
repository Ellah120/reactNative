import { createContext, useState } from "react";

interface User {
  name: string;
  pic: any;
  text: string;
  time: string;
};

export interface ChatContextType {
  selectedUser: User | null;
  selectUser: (item: User) => void;
};

const initialChatContextValue: ChatContextType = {
  selectedUser: null,
  selectUser: () => {},
};

export const ChatContext = createContext<ChatContextType>(initialChatContextValue);

function ChatProvider ({ children }: any) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = (item: User) => {
    setSelectedUser(item);
  };

  const chatContextValue = {
    selectedUser,
    selectUser,
  };

  return (
    <ChatContext.Provider value={chatContextValue}>
      {children}
    </ChatContext.Provider>
  );
};


export default ChatProvider