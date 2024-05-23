import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  console.log("params>>>>", params);

  return (
    <>
      <div>Detail Page입니다.</div>
      <div>path: /detail/{params.id}</div>
      <Link to={`/`}>Home Page로 이동하기</Link>
    </>
  );
};

export default Detail;
