import React from "react"

export default function Comment(props) {
console.log(props)
    return (
        <div 
        className={`individual-comment-container ${props.isCurUser && "currentUser"}`}
        >
            <p><a className="bold">@{props.isAnonymous ? "AnonymousUser" : props.userName}:</a></p>
            <p>{props.commentText}</p>
        </div>
    )
}