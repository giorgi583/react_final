import React from 'react'

const Comments = () => {
  return (
    <div className="comment-section">
          <h3>Comments <i className='fa-solid fa-angle-down'></i></h3>
          <div className='comments'>
            <div className="com-input">
<input className='com-inp' type="text" placeholder='Add a comment'/>
<button>Add</button>
</div>
<div className='comment-list'></div>

          </div>
        </div>
  )
}

export default Comments