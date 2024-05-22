import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div>Detail Page입니다.</div>
      <div>path: /detail/{id}</div>
      <Link to={`/`}>Home Page로 이동하기</Link>
    </>
  );
};

export default Detail;
