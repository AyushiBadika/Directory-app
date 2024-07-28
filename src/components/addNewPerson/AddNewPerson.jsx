import { useState } from "react";

export default function AddNewPerson() {
  const [age, setAge] = useState(0);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const handleAge = (e) => {
    const dateFilled = e.target.value;
    const dateFromFilledDate = new Date(dateFilled);

    const currentYear = new Date();
    setAge(currentYear.getFullYear() - dateFromFilledDate.getFullYear());
  };

  const handleLocalStorage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, mobile, aadhar, date, age } = formData;
    console.log(name, date, aadhar, mobile);
    // const dataFromLocalStorage = localStorage.getItem("data") || {};
  };

  return (
    <div className="mx-8 border p-8 h-[70vh]  relative">
      <div>
        <h2 className="text-xl absolute top-0 left-0 border-r border-b p-4">
          Add New Person
        </h2>
        {/* table */}
        {/* form */}
        {open && (
          <div className="mt-12 flex flex-col justify-center items-center p-8 bg-blue-500 rounded text-white">
            <h3 className="text-lg mb-4">Fill Below form for New Entry</h3>
            <form action="" className="flex w-full ">
              <input
                type="text"
                placeholder="Name"
                className="border py-2 px-4  text-black grow"
                name="name"
              />
              <input
                type="date"
                onChange={handleAge}
                className="border py-2 px-4  text-black grow"
                name="date"
              />
              <input
                type="number"
                placeholder="Aadhar Number"
                className="border py-2 px-4  text-black grow"
                name="aadhar "
              />
              <input
                type="number"
                placeholder="Mobile Number"
                className="border py-2 px-4  text-black grow"
                name="mobile "
              />
              <input
                className="border py-2 px-4  text-black grow bg-white "
                value={age}
                name="age"
              />

              <button
                className="border py-2 px-4  text-black grow bg-white"
                onClick={(e) => handleLocalStorage(e)}
              >
                Save
              </button>
            </form>
          </div>
        )}

        <button
          className="bg-blue-500 text-white px-8 py-4 rounded absolute bottom-8 right-8"
          onClick={() => setOpen(!open)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
