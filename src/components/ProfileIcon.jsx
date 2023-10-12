import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/profile-200x200.jpg";


const ProfileIcon = () => {
    return <div className="flex gap-2">
            <span className="h-10 w-10  flex items-center justify-center
             rounded-full cursor-pointer
             hover:bg-black/[0.05]
             ">
                <TbGridDots size={20} color="#5f6368"></TbGridDots>
             </span>
             <span className="h-10 w-10 relative
             flex justify-center items-center">
                  <img className="absolute rounded-full"  src="data:image/jpeg;base64,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"/>
                  <span className="h-8 w-8 rounded-full overflow-hidden">
                  <img className="h-full w-full object-cover" src={Profile}/>
                  </span>
             </span>
    </div>;
};

export default ProfileIcon;
