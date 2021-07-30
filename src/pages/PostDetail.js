import React, { useEffect } from 'react';
import { Grid } from '../elements';
import Permit from '../shared/Permit';
import { CommentList, CommentWrite, Post } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post'


const PostDetail = (props) => {

  const { match, history } = props;
  const dispatch = useDispatch()
  const user_info = useSelector((state) => state.user?.user);
  const post_list = useSelector((state) => state.post?.list);
  const post_id = match.params?.post_id;
  const post = post_id ? post_list.find((post) => post.id === post_id) : null

  useEffect(() => {
    dispatch(postActions.getOnePostFB(post_id))
    if (post_id) {
      try {
        dispatch(postActions.getOnePostFB(post_id))
      } catch {
        history.replace('/'); return;
      }
    } else {
      history.replace('/'); return;
    }
    // eslint-disable-next-line
  }, [dispatch])

  return (
    <React.Fragment>
      <Grid >
        <Post {...props} {...post} editable={post?.user_info.user_uid === user_info?.uid} />
        <CommentList post_id={post_id} {...props} {...post} />
        <Permit>
          <CommentWrite post_id={post_id} {...props} {...post} />
        </Permit>
      </Grid>
    </React.Fragment>
  )
}

export default PostDetail;