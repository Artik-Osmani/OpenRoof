import React, { useState } from 'react';
import MessageCard from '../molecules/MessageCard';
import './MessagesSection.css';

const MessagesSection = ({ messages, onDeleteMessage }) => {
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleReply = (message) => {
    setReplyingTo(message.id);
    setReplyText('');
  };

  const handleSendReply = (messageId) => {
    if (replyText.trim()) {
      // Here you would typically send the reply to your backend
      console.log(`Reply to message ${messageId}: ${replyText}`);
      setReplyingTo(null);
      setReplyText('');
      alert('Reply sent successfully!');
    }
  };

  const handleCancelReply = () => {
    setReplyingTo(null);
    setReplyText('');
  };

  return (
    <div className="messages-section">
      <h2>My Messages</h2>

      {messages.length === 0 ? (
        <div className="messages-section__empty">
          <p>No messages yet. When companies message you, they will appear here.</p>
        </div>
      ) : (
        <div className="messages-section__list">
          {messages.map((message) => (
            <div key={message.id}>
              <MessageCard
                message={message}
                onDelete={onDeleteMessage}
                onReply={handleReply}
              />

              {replyingTo === message.id && (
                <div className="reply-form">
                  <textarea
                    className="reply-form__textarea"
                    placeholder="Write your reply here..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows="4"
                  />
                  <div className="reply-form__actions">
                    <button
                      className="reply-form__btn reply-form__btn--send"
                      onClick={() => handleSendReply(message.id)}
                    >
                      Send Reply
                    </button>
                    <button
                      className="reply-form__btn reply-form__btn--cancel"
                      onClick={handleCancelReply}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagesSection;
