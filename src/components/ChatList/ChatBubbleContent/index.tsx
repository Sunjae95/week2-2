import React from 'react';
import { dateFormat, getImgFromPublic } from 'utils/utils';
import ChatReplyBuble from '../ChstReplyBubble';
import { Message } from '../mockData';
import * as S from './styled';

interface ChatBubbleContentProp {
  message: Message;
  mine: boolean;
}

function ChatBubbleContent({ message, mine }: ChatBubbleContentProp) {
  const date = new Date(message.date);
  const formattedDate = dateFormat(date);
  return (
    <div>
      {message.reply && <ChatReplyBuble reply={message.reply} mine={mine} />}
      <div>
        <S.ChatBubbleProfileBox>
          <S.ProfileImgBox>
            <S.ProfileImg
              src={getImgFromPublic(message.user.profileImage)}
              alt="*"
            />
          </S.ProfileImgBox>
          <S.ChatBubbleProfileName>
            <span>{message.user.userName}</span>
            <span>{mine && '*'}</span>
          </S.ChatBubbleProfileName>
          <S.ChatBubbleProfileTime>
            <span>{formattedDate}</span>
          </S.ChatBubbleProfileTime>
        </S.ChatBubbleProfileBox>
        <S.ChatBubbleContentStyled>
          <S.ContentPre>{message.content}</S.ContentPre>
        </S.ChatBubbleContentStyled>
      </div>
    </div>
  );
}

export default ChatBubbleContent;
