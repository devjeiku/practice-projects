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
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setshowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleshowAddFriend() {
        setshowAddFriend((showAddFriend) => !showAddFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setshowAddFriend(false);
    }

    function handleSelection(friend) {
        setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
        setshowAddFriend(false);
    }

    // const isOpen = num === currentOpen;

    // function handleToggle() {
    //     onOpen(isOpen ? null : num);
    // }

    return (
        <div className='app'>
            <div className='sidebar'>
                <FriendsList
                    friends={friends}
                    selectedFriend={selectedFriend}
                    onSelection={handleSelection}
                />

                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleshowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add Friend'}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    friends={friends}
                    onSetFriends={setFriends}
                />
            )}
        </div>
    );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}

function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? 'selected' : ''}>
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

            <Button onClick={() => onSelection(friend)}>
                {isSelected ? 'Close' : 'Select'}
            </Button>
        </li>
    );
}

function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            name,
            image: `${image}?=${id}`,
            balance: 0,
            id,
        };

        onAddFriend(newFriend);

        setName('');
        setImage('https://i.pravatar.cc/48');
    }

    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label>🧑‍🤝‍👩Friend name</label>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>🌇 Image URL</label>
            <input
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

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

function FormSplitBill({ selectedFriend, onSetFriends, friends }) {
    const [bill, setBill] = useState('');
    const [myExpense, setMyExpense] = useState('');
    const [payor, setPayor] = useState('user');

    // const friendExpense = bill - myExpense;

    // const friendExpense = bill <= myExpense ? '' : bill - myExpense;

    // const friendExpense =
    //     bill !== '' || myExpense !== ''
    //         ? Math.max(0, Number(bill) - Number(myExpense))
    //         : '';

    const friendExpense =
        bill === '' || bill === 0 // nothing typed in the bill box yet?
            ? '' // → keep the friend box blank
            : Number(bill) - Number(myExpense || 0);

    // function handleChange(e) {
    //     const value = e.target.value;

    //     if (value === '') {
    //         setBill('');
    //         return;
    //     }

    //     const number = Number(value);

    //     if (!isNaN(number)) {
    //         setBill(number);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();

        const billNum = Number(bill);
        const myExpenseNum = Number(myExpense);

        if (!billNum || !myExpenseNum) {
            console.log('Invalid Input');
            setBill('');
            setMyExpense('');
            return;
        }

        // friends.map((friend) =>
        //     friend.id === selectedFriend.id
        //         ? { ...friend, balance: friend.balance + friendExpense }
        //         : friend
        // );
        let expense = payor === 'user' ? friendExpense : -myExpense;

        onSetFriends((prev) =>
            prev.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + expense }
                    : friend
            )
        );

        // if user pays, add to the balance
        // if friend pays, subtract to the balance

        setBill('');
        setMyExpense('');
    }

    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label>💵 Bill value</label>
            <input
                type='text'
                inputMode='numeric'
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>🧑‍🦰 Your expense</label>
            <input
                type='text'
                inputMode='numeric'
                value={myExpense}
                onChange={(e) =>
                    Number(e.target.value) <= bill &&
                    setMyExpense(Number(e.target.value))
                }
            />

            <label>🧑‍🤝‍👩 {selectedFriend.name}'s expense:</label>
            <input
                type='text'
                disabled
                // value={bill && myExpense ? friendExpense : ''}
                value={friendExpense}
            />

            <label>🤑 Who is paying the bill?</label>
            <select value={payor} onChange={(e) => setPayor(e.target.value)}>
                <option value='user'>You</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>

            <Button>Split bill</Button>
        </form>
    );
}
