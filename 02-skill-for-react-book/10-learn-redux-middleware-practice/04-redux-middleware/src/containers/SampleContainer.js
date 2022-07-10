import React, {
  useEffect,
} from "react";
import { getPost, getPhotos } from "@modules/sample";
import { connect } from "react-redux";
import Sample from "@components/Sample";

const SampleContainer = ({
  post,
  photos,
  getPost,
  getPhotos,
}) => {
  useEffect(() => {
    getPost(2);
    getPhotos();
  }, [getPost, getPhotos]);
  
  return (
    <Sample
      post={post}
      photos={photos}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    photos: sample.photos,
  }),

  dispatch => ({
    getPost: id => dispatch(getPost(id)),
    getPhotos: id => dispatch(getPhotos(id)),
  }),
)(SampleContainer);