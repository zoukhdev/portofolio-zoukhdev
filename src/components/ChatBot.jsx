import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm ZoukhDev's assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Bot responses based on keywords
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Handoff triggers - transfer to human
    const handoffKeywords = [
      'hire', 'price', 'cost', 'quote', 'budget', 'payment',
      'custom', 'complex', 'urgent', 'meeting', 'call', 'phone'
    ];
    
    if (handoffKeywords.some(keyword => message.includes(keyword))) {
      return {
        text: "I'd love to discuss this with you personally! Let me connect you with ZoukhDev directly. You can reach him at:",
        isHandoff: true,
        contactInfo: {
          email: "ekizulfarrachman@gmail.com",
          phone: "+1 (555) 123-4567" // Replace with your actual phone
        }
      };
    }
    
    // Service-related responses
    if (message.includes('service') || message.includes('what do you do')) {
      return {
        text: "ZoukhDev specializes in:\n• Web Development (React, Vue.js)\n• Mobile App Development (Flutter)\n• UI/UX Design\n• E-commerce Solutions\n• 3D Web Experiences\n\nWould you like to know more about any specific service?"
      };
    }
    
    if (message.includes('portfolio') || message.includes('projects')) {
      return {
        text: "Check out my latest projects in the Portfolio section! I've built:\n• Photography Agency websites\n• E-commerce platforms\n• Gaming interfaces\n• Tourism websites\n\nAll with modern animations and 3D elements!"
      };
    }
    
    if (message.includes('experience') || message.includes('years')) {
      return {
        text: "I have extensive experience in full-stack development with expertise in React, Vue.js, Flutter, and modern web technologies. I've completed numerous projects for clients worldwide."
      };
    }
    
    if (message.includes('contact') || message.includes('reach')) {
      return {
        text: "You can reach me through:\n• Email: ekizulfarrachman@gmail.com\n• This contact form\n• Social media links in the footer\n\nI typically respond within 24 hours!"
      };
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! 👋 Welcome to my portfolio! I'm here to help you learn more about my services and projects. What would you like to know?"
      };
    }
    
    // Default response
    return {
      text: "That's interesting! Could you tell me more about what you're looking for? I can help you understand my services or connect you directly with ZoukhDev for personalized assistance."
    };
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse.text,
        isHandoff: botResponse.isHandoff,
        contactInfo: botResponse.contactInfo,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold">1</span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">ZoukhDev Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.isHandoff && message.contactInfo && (
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <div className="flex items-center gap-2 text-xs">
                        <Mail className="w-4 h-4" />
                        <span>{message.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs mt-1">
                        <Phone className="w-4 h-4" />
                        <span>{message.contactInfo.phone}</span>
                      </div>
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                maxLength={200}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white p-2 rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
