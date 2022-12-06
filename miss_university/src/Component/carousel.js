import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Container = styled.div`
//   overflow: hidden;
// `;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-slide img {
    height: 500px;
  }
`;

const ImageContainer = styled.div`
  margin: 0 8px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const imgUrl1 = require("../Assets/images/modal/01.jpg");
const imgUrl2 = require("../Assets/images/modal/02.jpg");
const imgUrl3 = require("../Assets/images/modal/03.jpg");
const imgUrl4 = require("../Assets/images/modal/04.jpg");
const imgUrl5 = require("../Assets/images/modal/05.jpg");
const imgUrl6 = require("../Assets/images/modal/06.jpg");

const items = [
  { id: 1, url: imgUrl1 },
  { id: 2, url: imgUrl2 },
  { id: 3, url: imgUrl3 },
  { id: 4, url: imgUrl4 },
  { id: 5, url: imgUrl5 },
  { id: 6, url: imgUrl6 },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <Image src={item.url} />
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
    </div>
  );
};

export default Carousel;
