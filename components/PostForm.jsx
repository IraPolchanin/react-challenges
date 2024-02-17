import React from 'react'
export const PostForm = ({ handleSubmit, comment, setComment }) => {

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setComment(prevComment => ({
      ...prevComment,
      [name]: type === 'checkbox' ? checked : value.trimStart()
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        name="userName"
        value={comment.userName}
        placeholder="Enter username."
        onChange={handleChange}
        required
      />

      <textarea
        name="commentText"
        value={comment.commentText}
        placeholder="What do you think?"
        onChange={handleChange}
        required
      />
      <label>
        <input
          className="checkbox"
          name="isAnonymous"
          checked={comment.isAnonymous}
          type="checkbox"
          onChange={handleChange}
        />
        Post anonymously?
      </label>
      <button>Send</button>
    </form>
  )
}
