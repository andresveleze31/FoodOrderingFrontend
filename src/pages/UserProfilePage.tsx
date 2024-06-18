import { useGetMyUser, useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const {currentUser, isLoading: isGetLoading} = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if(isGetLoading){
    return <span>Loading...</span>
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>

  }

  return (
    <div className="contenedor pb-[5rem] ">
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  );
};

export default UserProfilePage;
