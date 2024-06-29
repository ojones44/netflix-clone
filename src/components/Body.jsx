import bodyContent from "../data/bodyContent";
import { FeatureCardWrapper } from "../wrappers/FeatureCard";

function Body() {
  return bodyContent.map((card) => {
    return (
      <FeatureCardWrapper>
        <div className="container">
          <div>
            <h2 className="heading">{card.heading}</h2>
            <p>{card.content}</p>
          </div>
          <img src={card.image} alt="card-img" />
        </div>
      </FeatureCardWrapper>
    );
  });
}

export default Body;
