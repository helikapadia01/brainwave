import SectionSvg from "../../public/assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffSet,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      }
        ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:left-10"></div>

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffSet && crossesOffSet
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffSet={crossesOffSet} />
        </>
      )}
    </div>
  );
};

export default Section;