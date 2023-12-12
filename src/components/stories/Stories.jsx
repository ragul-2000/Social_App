import React, { useContext } from 'react';
import "./stories.scss";
import { AuthContext } from '../../context/authContext';
const Stories = () => {
 
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "John Carter",
            img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/9072218/pexels-photo-9072218.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            name: "Bob Smith",
            img: "https://images.pexels.com/photos/13470171/pexels-photo-13470171.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            name: "Alice Johnson",
            img: "https://images.pexels.com/photos/1033116/pexels-photo-1033116.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    return (
        <div className="stories">
                <div className="story ">
                    <img src={currentUser.profilePic} alt='' />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt={story.name} />
                    <span>{story.name}</span>
                </div>
            )
            )}
        </div>
    )
}

export default Stories;
