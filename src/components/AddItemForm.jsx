import { useCallback, useState } from "react";

export const AddItemForm = ({ items, setItems }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = useCallback(() => {
    setItems([...items, { title: title, content: content }]);
    setTitle("");
    setContent("");
  }, [items, setItems, content, title]);

  return (
    <div className="addItemForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Item title"
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Item content"
      />
      <button onClick={onSubmit}>Add item!</button>
    </div>
  );
};
