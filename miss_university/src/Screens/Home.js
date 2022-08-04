import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goSecond = () => {
    navigate("/second");
  };

  return (
    <div>
      <div>
        HELLO WORLD
        <button onClick={goSecond}>ddd</button>
      </div>
    </div>
  );
}
export default Home;
