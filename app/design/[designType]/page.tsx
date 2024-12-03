import { designData } from "@/components/home/data";

type Params = {
  params: {
    designType: string;
  };
};

const DesignPage = ({ params }: Params) => {
  const { designType } = params;

  console.log(designType);

  return (
    <section className="design-page">
      {Object.entries(designData).map(([key, items]) => (
        <div key={key}>
          <h2>{key}</h2>
          <div>
            {items.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
                <h3>{item.header}</h3>
                <p>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DesignPage;
