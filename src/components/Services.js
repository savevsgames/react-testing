import Title from "./Title";
import { titles, services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={titles[1].title} subtitle={titles[1].subtitle} />
      <div className="section-center services-center">
      {services.map((service) => {
        return <Service key={service.id} icon={service.icon} title={service.title} text={service.text} />
      })}
       
      </div>
    </section>
  );
};
export default Services;
