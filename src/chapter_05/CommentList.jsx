import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : '류건희',
        comment : '안녕하세요, 반갑습니다.',
    },
    {
        name : 'Leo',
        comment : 'Hi, Nice to meet you.',
    },
    {
        name : '양동근',
        comment : '리액트 재미있어요.',
    },
]

function CommentList(props){
    return(
        <div>
            {comments.map((comment) =>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;