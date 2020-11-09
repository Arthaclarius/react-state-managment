import { toLower, juxt } from "ramda";
import faker from "faker";
import React, { FC, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import Row from "~components/Row";
import { InputText } from "~components/InputText";

const InputChatContainer = styled(Row)`
  background-color: #36393f;
  height: 75px;
  padding: 20px;
  box-sizing: border-box;
`;

interface IInputChatProps {
  friendName?: string;
  onSend?: (message: string) => any;
}

const InputChat: FC<IInputChatProps> = ({ friendName, onSend }) => {
  const [message, setMessage] = useState<string>("");
  const onEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (toLower(e.key) === "enter") {
        onSend?.(message);
        setMessage("");
      }
    },
    [message]
  );

  const onTab = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (toLower(e.key) === "tab") {
      e.preventDefault();
      setMessage(faker.lorem.sentence());
    }
  }, []);

  const onKeyDown = useMemo(() => juxt([onEnter, onTab]), [onEnter, onTab]);

  const onInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  }, []);

  return (
    <InputChatContainer>
      <InputText
        placeholder={
          friendName ? `Send a message to @${friendName}` : "Send a message"
        }
        value={message}
        onChange={onInput}
        onKeyDown={onKeyDown}
      />
    </InputChatContainer>
  );
};

export default InputChat;
