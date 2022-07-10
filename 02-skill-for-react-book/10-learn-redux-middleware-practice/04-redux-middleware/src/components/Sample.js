import React from "react";

const Sample = ({
  post,
  photos,
  loadingPost,
  loadingPhotos,
}) => {
  return (
    <div className="Sample">
      <div className="post">
        <h3>Title: {post?.title}</h3>
        <p>{post?.body}</p>
      </div>

      <ul className="photos">
        {photos?.map(photo => (
          <div
            className="photo"
            key={photo.id}
          >
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl} alt="썸네일" />
            <a href={photo.url} target="_blank" rel="noreferrer">{photo.url}</a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sample;