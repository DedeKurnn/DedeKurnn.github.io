const ProfilePicture = props => {
  return (
    <div className="bg-gradient-to-t from-primary-darker to-primary-lighter rounded-xl md:mt-1 overflow-hidden">
      <img src={props.photo} alt="Dede" className="w-full h-full aspect-square md:aspect-auto object-cover object-top"/>
    </div>
    
  );
};

export default ProfilePicture;
