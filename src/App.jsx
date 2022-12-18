import axios from "axios";
import React from "react";
// crud crud API~データを取得
const baseURL = "https://crudcrud.com/api/4bab0478026149119ffb6c723436f0d3/unicorns";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response);
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <ul>
        {
          post.map((e) => (
            <li key={e.id}>
              <li>{e.name}</li>
              <li>{e.age}</li>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
