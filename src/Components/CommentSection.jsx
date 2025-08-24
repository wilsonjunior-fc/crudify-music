import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Comentários</h3>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Adicione um comentário..."
          className="flex-1 bg-zinc-800 p-2 rounded"
        />
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-zinc-800 p-3 rounded">
            <p>{comment}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-zinc-400">Nenhum comentário ainda.</p>
        )}
      </div>
    </div>
  );
}
