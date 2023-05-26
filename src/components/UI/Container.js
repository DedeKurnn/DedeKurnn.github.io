const Container = (props) => {
  return (
    <section
      id={props.id}
      className={`bg-white dark:bg-container-dark mx-auto rounded-xl p-8 md:p-16 font-plusJakarta ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default Container;
