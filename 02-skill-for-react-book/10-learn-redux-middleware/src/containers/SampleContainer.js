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
  state => ({
    loadingPost: state.sample.loading.GET_POST,
    loadingUsers: state.sample.loading.GET_USERS,
    post: state.sample.post,
    users: state.sample.users,
  }),
  dispatch => ({
    getPost: id => getPost(id)(dispatch),
    getUsers: id => getUsers(id)(dispatch),
  }),
)(SampleContainer);