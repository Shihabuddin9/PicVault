import PrivateRoutes from "@/component/PrivateRoutes/PrivateRoutes";
import MyProfile from "@/component/ui/MyProfile/MyProfile";


const Profile = () => {

    return (

        <PrivateRoutes>
            <MyProfile />
        </PrivateRoutes>

    );
};

export default Profile;

