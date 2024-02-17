import React, { useState } from "react"
import { nanoid } from 'nanoid'
import PostComments from "./PostComments"
import PostContent from "./PostContent"
import { PostForm } from "./PostForm"
import postData from "../postData"

export default function DebatePost() {

  /* Challenge 
  
  The form doesn't work. Your task is to make it a controlled form that adds a comment to the post when the user clicks "Send."
  
      1. The comment should appear on the bottom of the comment thread, with the inputted 
         username and comment text displayed just like the previous comments. 
         
      2. The comment should be added to the array that contains the data for the previous 
         comments. 
      
      3. The inputted username should be recorded, but it should show up as "AnonymousUser" if 
         the user checks the checkbox.
      
      4. The user should have to input text into the text input element and comment box element to 
         submit the form, and the elements and the checkbox should clear out after the user submits a comment. They should be empty on page load as well.   
          
      5. Your code can live entirely inside this file, although you are welcome to move things around 
         if you'd like. 
  */

  const [comments, setComments] = useState(postData.comments)
  const initialComment = {
    id: nanoid(),
    userName: "",
    isAnonymous: false,
    isCurUser:true,
    commentText: ""
  }

  const [comment, setComment] = useState(initialComment)
  const clearFormFields = () => setComment(initialComment)

  const handleSubmit = e => {
    e.preventDefault();
    setComments(prevComments => ([...prevComments, comment]))
    clearFormFields()
  }

  return (
    <div className="post-container">
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <PostForm handleSubmit={handleSubmit} comment={comment} setComment={setComment}/>
    </div>
  )
}