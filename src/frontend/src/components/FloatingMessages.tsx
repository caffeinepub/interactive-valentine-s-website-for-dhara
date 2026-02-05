import { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
  top: number;
  delay: number;
  duration: number;
}

const loveMessages = [
  "You make my heart smile 💕",
  "Forever and always 💖",
  "You're my everything 💗",
  "Love you to the moon and back 🌙",
  "My heart belongs to you 💝",
  "You're my sunshine ☀️",
  "Together is my favorite place 💑",
  "You complete me 💞",
  "My one and only 💓",
  "You're my dream come true ✨",
];

export default function FloatingMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const newMessages: Message[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      text: loveMessages[i % loveMessages.length],
      top: 10 + (i * 10),
      delay: i * 2,
      duration: 15 + Math.random() * 5,
    }));
    setMessages(newMessages);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {messages.map((message) => (
        <div
          key={message.id}
          className="absolute animate-float-across opacity-40"
          style={{
            top: `${message.top}%`,
            animationDelay: `${message.delay}s`,
            animationDuration: `${message.duration}s`,
            left: '-300px',
          }}
        >
          <span className="text-rose-500 font-cursive text-lg md:text-xl whitespace-nowrap">
            {message.text}
          </span>
        </div>
      ))}
    </div>
  );
}
