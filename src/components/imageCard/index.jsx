import Image from "../image";
import Heading from "../heading";
import Text from "../text";
import "./index.css";
import Button from "../button";

const ImageCard = ({ image, heading, text, link }) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image" />
      <div className="imageCard__content">
        <div>
          <Heading level={3}>{heading}</Heading>
          <Text size='12px' className="imageCard__text"> {text} </Text>
        </div>
        {/* <a href={link} className='imageCard__link'>Read More</a> */}
        <Button use="text" href={link} color="secondary" size="small">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;
