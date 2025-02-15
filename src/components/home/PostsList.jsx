import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function PostsList({ postsData }) {
  const navigate = useNavigate();

  return (
    <ListSection>
      {postsData.map((post) => (
        <PostListBox key={post.id} onClick={() => navigate(`detail/${post.id}`)}>
          <h2>{post.title}</h2>
          <h3>{post.content}</h3>
          <HashtagList>
            {post.hashtag.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </HashtagList>
        </PostListBox>
      ))}
    </ListSection>
  );
}

const ListSection = styled.section`
  height: 280px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: scroll;
`;

const PostListBox = styled.div`
  width: 400px;
  height: 120px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  cursor: pointer;

  /* border: 1px solid #c70000; */
  border-radius: 20px;
  box-shadow: 2px 2px 5px 2px #e0c3aea2;

  & h2 {
    height: 30px;
    padding: 10px;

    font-size: 18px;
    font-family: 'SunBatang-Medium';
    color: #784b31;
  }

  & h3 {
    padding: 10px;
    color: #b6856a;
  }
`;

const HashtagList = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin: 5px 0;

  & p {
    padding: 2px 10px;

    color: #b6856a;
    background-color: #fff9f3;
    /* border: 1px solid #e0c3ae7f; */
    border-radius: 20px;
    font-size: 12px;
  }
`;
