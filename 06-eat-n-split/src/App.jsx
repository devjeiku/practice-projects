import { useState } from 'react';

const initialFriends = [
    {
        id: 118836,
        name: 'Clark',
        image: 'https://i.pravatar.cc/48?u=118836',
        balance: -7,
    },
    {
        id: 933372,
        name: 'Sarah',
        image: 'https://i.pravatar.cc/48?u=933372',
        balance: 20,
    },
    {
        id: 499476,
        name: 'Anthony',
        image: 'https://i.pravatar.cc/48?u=499476',
        balance: 0,
    },
];

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList />

                {!isOpen && <Button onClick={handleOpen}>Add Friend</Button>}

                {isOpen && (
                    <>
                        <FormAddFriend />
                        <Button onClick={handleOpen}>Close</Button>
                    </>
                )}
            </div>
        </div>
    );
}

function FriendsList() {
    const friends = initialFriends;

    return (
        <ul>
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}

function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className='red'>
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}

            {friend.balance > 0 && (
                <p className='green'>
                    {friend.name} owes you ${Math.abs(friend.balance)}
                </p>
            )}

            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button>Select</Button>
        </li>
    );
}

function FormAddFriend() {
    return (
        <form className='form-add-friend'>
            <label>🧑‍🤝‍👩Friend name</label>
            <input type='text' />

            <label>🌇 Image URL</label>
            <input type='text' />

            <Button>Add</Button>
        </form>
    );
}

function Button({ children, onClick }) {
    return (
        <button className='button' onClick={onClick}>
            {children}
        </button>
    );
}
