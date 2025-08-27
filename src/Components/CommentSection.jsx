import { Component } from 'react';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
      initialComments: this.props.initialComments
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newComment.trim()) {
      this.props.onAddComment(this.state.newComment);
      this.setState({initialComments: [...this.state.initialComments, this.state.newComment], newComment: ''});
    }
  }

  render() {
    const { initialComments } = this.state;
    const { newComment } = this.state;
    return (
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Comments</h3>
        <form onSubmit={this.handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => this.setState({ newComment: e.target.value })}
            placeholder="Add your comment..."
            className="flex-1 bg-zinc-800 p-2 rounded"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </form>
        <div className="space-y-4">
          {initialComments && initialComments.map((comment, index) => (
            <div key={index} className="bg-zinc-800 p-3 rounded">
              <p>{comment}</p>
            </div>
          ))}
          {(!initialComments || initialComments.length === 0) && (
            <p className="text-zinc-400">Still dont have comments, be the first!</p>
          )}
        </div>
      </div>
    );
  }
}
