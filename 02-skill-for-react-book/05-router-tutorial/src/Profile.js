import React from "react";
import {
  useParams,
} from "react-router-dom";

const data = {
  chocobe: {
    name: "김영우",
    description: "리액트 스터디 중인 개발자",
  },
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return (
      <div>존재하지 않는 사용자 입니다.</div>
    );
  }

  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;