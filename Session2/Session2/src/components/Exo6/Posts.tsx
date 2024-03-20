import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <div className="p-4 flex">
      <ul className="space-y-4 w-1/2 pr-4 border-r">
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="cursor-pointer hover:underline"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className="ml-8 w-1/2">
          <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
          <p className="mt-4">{selectedPost.body}</p>
        </div>
      )}
    </div>
  );
};

export default Posts;
