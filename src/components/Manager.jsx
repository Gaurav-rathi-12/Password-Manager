import React, { useEffect,useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [eye, setEye] = useState(true);
  const [form, setForm] = useState({ url: "", username: "", password: "" });
  const [passwordArray , setPasswordArray ] = useState([])

  const Toggle = (e) => {
    setEye(!eye);
    {!eye ? e.target.type = 'text' : e.target.type = 'password'}
  };

  useEffect(()=>{
    const passwords = localStorage.getItem('passwords')
    if(passwords) setPasswordArray(JSON.parse(passwords))
  },[])

  // const handleUrl = (e) =>{
  //   setForm(...[form] ,form.url = e.target.value )
  // }
  // const handleUsername = (e) =>{
  //   setForm(...[form] ,form.username = e.target.value )
  // }
  // const handlePassword = (e) =>{
  //   setForm(...[form] ,form.password = e.target.value )
  // }
  const addSubmit = () => {
    console.log(form);

    setPasswordArray([...passwordArray , {...form } ])
    localStorage.setItem('passwords', JSON.stringify([...passwordArray , {...form } ]))
    console.log([...passwordArray , {...form } ]);
    setForm({ url: "", username: "", password: "" })
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex flex-col  items-center mt-[40px] ">
        <div className="text-2xl myContainer font-bold">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        <p>Your own password Manager</p>
        <div className="  sm:min-w-1/2 mt-3 mx-3">
          <input
            onChange={handleChange}
            value={form.url}
            name="url"
            type="text"
            placeholder="Enter website URL"
            className="w-full rounded-2xl border mb-6 border-green-400 px-4 py-1"
          />
          <div className="flex gap-3">
            <input
              onChange={handleChange}
              value={form.username}
              name="username"
              type="text"
              placeholder="Enter Username"
              className="w-full rounded-2xl border mb-6 border-green-400 px-4 py-1"
            />
            <div className="relative  max-w-1/3 ">
              <input
                onChange={handleChange}
                value={form.password}
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full rounded-2xl  border mb-6 border-green-400 pl-4 pr-8 py-1"
              />
              <span
                onClick={Toggle}
                className="absolute top-2 right-3 cursor-pointer"
              >
                {eye ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={addSubmit}
          className="flex gap-1 items-center border cursor-pointer border-green-500 px-3 py-1 rounded-2xl bg-green-400  hover:bg-green-300"
        >
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="loop"
            delay="2000"
            className="w-[20px] h-[20px]"
          ></lord-icon>
          Add Password
        </button>
        <div className="passwords px-5 sm:w-3/4 sm:px-0 lg:max-w-1/2 lg:px-0 ">
          <h2 className="font-bold py-4 text-xl w-full">Your Passwords</h2>
          {passwordArray.length === 0 ? <h3>No passwords to show</h3>: <table className="table-fixed w-full rounded-md overflow-hidden">
            <thead className="bg-green-600">
              <tr>
                <th className="py-1 text-white">Site</th>
                <th className="py-1 text-white">Username</th>
                <th className="py-1 text-white">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item,index)=>{
              return <tr key={index}>
                <td className="text-center py-1 w-12"> <a href={item.url} target="_blank" >{item.url}</a> </td>
                <td className="text-center py-1 w-12">{item.username}</td>
                <td className="text-center py-1 w-12">{item.password}</td>
              </tr>

              })}

            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
