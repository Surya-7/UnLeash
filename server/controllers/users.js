import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    //searching the user by id and returns the entire user details if found.
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//This code block retrieves a user's friends list and sends it as a JSON response to the client.

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    //The user variable holds the found user document, which contains an array of friend IDs in the friends property
        //The Promise.all() method is called on the friends array, which maps each friend ID to a Promise that resolves to the friend document retrieved using the User.findById method.
       
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    //Formatted using map with only certain selected properties.
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id); //gets the current user details
    const friend = await User.findById(friendId);//gets the friemd details

    //If user is already a friend of "friend" then do:
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId); //filter friend from user
      friend.friends = friend.friends.filter((id) => id !== id); //filter user from friends
    } else {
      // Adding friend to user and user to friend
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    //saving the changes made in friend and user to DB
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    //Formatted using map with only certain selected properties.
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
