import React from "react";

function Article({ title, date = "January 1, 1970", preview }) {
  // Bonus Feature: 'Minutes to Read'
  const minutesToRead = Math.ceil(preview.split(" ").length / 200); // Assuming 200 words per minute

  const renderReadingTime = () => {
    const emojis = minutesToRead <= 30 ? "☕️" : "🍱";
    const count = minutesToRead <= 30 ? Math.ceil(minutesToRead / 5) : Math.ceil(minutesToRead / 10);
    return Array.from({ length: count }, (_, i) => emojis).join(" ");
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime()} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;