import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostDetail from './PostDetail'
import { actionCreators as postActions }  from '../redux/modules/post'


const PostList = (props) => {

  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list)

  useEffect(()=> {
    if (post_list.length === 0){
      dispatch(postActions.getPostFB())
    }
  // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
      { post_list.map((post) => {
        return <PostDetail key={post.id} {...post} />
      })}
    </React.Fragment>
  )
}

export default PostList;