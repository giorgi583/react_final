import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import user from "../images/icon-7797704_640.png"
import axios from 'axios';
const Comments = () => {
  const {id} = useParams()
  const {t} = useTranslation();
  const token = localStorage.getItem("token")
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('');
  async function handleAddComment() {
    if(!comment) {
      return alert(t("please_enter_a_comment"));
    }
    try {
      setLoading(true)
      const response = await axios.post(`https://warrior.ge/api/movies/${id}/comments`, {
        "content": comment
      },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );
      alert(t("comment_added_successfully"));
      setComment('');
      getComments();
    } catch (error) {
      alert(error.response.data.message);
    }
    finally {
      setLoading(false)
    }
  }
  async function getComments() {
    setLoading(true)
   try { const response = await axios.get(`https://warrior.ge/api/movies/${id}/comments`);
    console.log(response.data);
    setComments(response.data) }
    catch(err) {
      alert(err)
    }
    finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    getComments();
  }, []);
  if (!token) {
    return (<div className='comment-section'>
      <h2>{t("please_login_to_see_comments")}</h2>
    </div>)
  }
  return (
    <div className="comment-section">
          <h3>{t("comments")} <i className='fa-solid fa-angle-down'></i></h3>
          <div className='comments'>
            <div className="com-input">
<input className='com-inp' type="text" placeholder={t("add_a_comment")} value={comment} onChange={(e) => setComment(e.target.value)}/>
<button onClick={handleAddComment}>{t("add")}</button>
</div>
<div className='comment-list'>
{loading ? <div className='loader'></div> : null}
  {comments.length > 0 ? comments.map((com, i) => <div className='comment' key={i}><div className='com-user'><div className='useravatar'><img src={user} alt="" /></div>
  <h4>{com.user.name}</h4></div>
  <p>{com.content}</p>
  <div className='comment-actions'>
  <i class="fa-solid fa-thumbs-up"></i>
  <i class="fa-solid fa-reply"></i>
  <i class="fa-solid fa-share-nodes"></i>
  </div>
  </div>) : <h2 className='no-comments'>{t("nothing_to_show")}</h2>}
  
  </div>
       </div>
    </div>
  );
};

export default Comments;