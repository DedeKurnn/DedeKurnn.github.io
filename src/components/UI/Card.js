const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="rounded-3xl border-2 shadow-lg overflow-hidden group relative">
        <div className="absolute top-0 left-0 -translate-x-full w-full h-full bg-gradient-to-r from-transparent via-white to-transparent group-hover:translate-x-full mix-blend-overlay transition-all duration-1000"></div>
        <img
          src={props.img}
          alt={props.alt}
          className="aspect-[4/3] object-cover"
        />
      </div>
      <div className="mt-4 px-2">
        <span className="block text-xl font-semibold dark:text-white">{props.title}</span>
        <a href={props.link} className="font-semibold opacity-60 hover:opacity-100 hover:text-primary-darker underline">Read more</a>
      </div>
    </div>
  );
};

export default Card;
