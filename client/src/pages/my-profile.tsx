import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Profile, Loader } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userId,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Loader path="My Profile" />;
  if (isError) return <Loader path="My Profile" isError={true} />;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
