import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home Page입니다.</div>
      <Link to={`/detail/1`}>Detail Page로 이동하기</Link>
    </>
  );
};

export default Home;
