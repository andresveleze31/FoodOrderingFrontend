type Props = {
  title: string;
  subtitle: string;
};
const DynamicHero = ({ title, subtitle }: Props) => {
  return (
    <div className="hero-bg w-full block py-[10rem] ">
      <div className="contenedor-second">
        <h1 className="text-center text-white font-bold m-0 text-[4.5rem] ">
          {title}
        </h1>
        <h2 className="text-center text-white font-normal text-[2.2rem] ">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default DynamicHero;
