import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import "../../styles/postsList.css";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section className="post-container">
      <h1 className="heading">posts</h1>
      {renderPosts}
    </section>
  );
};

export default PostsList;
