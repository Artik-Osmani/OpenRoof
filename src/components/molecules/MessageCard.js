import React from 'react';
import './MessageCard.css';

const MessageCard = ({ message, onDelete, onReply }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message-card ${message.read ? '' : 'message-card--unread'}`}>
      <div className="message-card__header">
        <h4 className="message-card__sender">{message.senderName}</h4>
        <span className="message-card__date">{formatDate(message.date)}</span>
      </div>

      <p className="message-card__subject">
        <strong>Subject:</strong> {message.subject}
      </p>

      <div className="message-card__content">{message.content}</div>

      <div className="message-card__footer">
        <button
          className="message-card__btn message-card__btn--reply"
          onClick={() => onReply(message)}
        >
          Reply
        </button>
        <button
          className="message-card__btn message-card__btn--delete"
          onClick={() => onDelete(message.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
