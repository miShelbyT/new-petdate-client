import styled from "styled-components";

function PetDateItem({ meetup, petName }) {
  

  const friends = meetup.pets.filter((pet) => pet.name !== petName);
  const renderFriends = friends.map((friend) => friend.name);
  
  return (
    <div className="petdate">
      <h3>📍 Where: {meetup.location}</h3>
      <h4>📆 When: {meetup.formatted_time}</h4>
      <h4>🕜 Duration: 45 minutes</h4>
      {renderFriends.length > 1 ? "Friend: " : "Friends: "}
      {renderFriends.join(", ")}
    </div>
  );
}

export default PetDateItem;
