import profiles from "../assets/profile.jpg";

const Profile = () => {
  return (
    <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
      <img className="w-72 h-full ml-48" src={profiles} alt="profile" />
    </div>
  );
};

export default Profile;
