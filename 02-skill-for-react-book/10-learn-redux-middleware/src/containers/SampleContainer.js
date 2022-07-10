import React, {
  useEffect,
} from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  loadingPost,
  loadingUsers,
  getPost,
  getUsers,
  post,
  users,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  
  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS,
    post: sample.post,
    users: sample.users,
  }),
  dispatch => ({
    getPost: id => dispatch(getPost(id)),
    getUsers: id => dispatch(getUsers(id)),
  }),
)(SampleContainer);