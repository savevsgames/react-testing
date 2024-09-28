import { titles } from "../data";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={titles[2].title} subtitle={titles[2].subtitle} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
