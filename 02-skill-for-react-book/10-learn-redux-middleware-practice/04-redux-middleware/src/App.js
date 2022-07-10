import React from "react";
import CounterContainer from "@containers/CounterContainer";
// import Sample from "@components/Sample";
import SampleContainer from "@containers/SampleContainer";

// const mockPost = {
//   userId: 1,
//   id: 1,
//   title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
// };

// const mockPhotos = [
//   {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952"
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796"
//   },
//   {
//     albumId: 1,
//     id: 3,
//     title: "officia porro iure quia iusto qui ipsa ut modi",
//     url: "https://via.placeholder.com/600/24f355",
//     thumbnailUrl: "https://via.placeholder.com/150/24f355"
//   },
// ];

const App = () => {
  return (
    <div className="App">
      <h1>Hello App</h1>
      <CounterContainer />
      <SampleContainer />
      {/* <Sample post={mockPost} photos={mockPhotos} /> */}
    </div>
  );
};

export default App;