import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Business Messaging App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-96">
          <ScrollArea className="flex-1 p-4 border-b">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </ScrollArea>
          <div className="flex p-2 space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message"
              className="flex-1"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;