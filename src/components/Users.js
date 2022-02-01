import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Users() {
  const [newUserName, setNewName] = useState("");
  const [newMobile, setNewMobile] = useState(0);
  const [newEmail, setNewEmail] = useState("");
  const [newAddr, setNewAddr] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newUserName,
      mobile: newMobile,
      email: newEmail,
      addr: newAddr,
    });

    alert("Saved");
    window.location.reload(false);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <div className="result p-14 space-y-7">
        <div className="bg-neutral-200 flex flex-col justify-center items-center p-7">
          <h1>Tab 1</h1>

          <input
            type="text"
            placeholder="Username"
            className="m-2 w-60 rounded-sm py-1 px-2"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="m-2 w-60 rounded-sm py-1 px-2"
            onChange={(event) => {
              setNewMobile(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            className="m-2 w-60 rounded-sm py-1 px-2"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Address"
            className="m-2 rounded-sm w-60 py-1 px-2"
            onChange={(event) => {
              setNewAddr(event.target.value);
            }}
          />
          <button
            className="bg-blue-500 px-9 py-1 mt-3 text-white text-xl pb-2 rounded"
            onClick={createUser}
          >
            Submit
          </button>
        </div>

        <div className="bg-neutral-200 flex flex-col items-center">
          <h1>Tab 2</h1>

          <div className="result ">
            <div className="flex flex-row space-x-40">
              <h1> User Name</h1>
              <h1>Mobile No</h1>
              <h1> Email Address</h1>
              <h1>Address</h1>
            </div>

            {users.map((items) => {
              return (
                <div className="flex flex-row space-x-40 items-start">
                  <h1> {items.name} </h1>
                  <h1> {items.mobile} </h1>
                  <h1> {items.email} </h1>
                  <h1> {items.addr} </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
