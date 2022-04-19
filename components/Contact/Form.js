import Image from "next/image";

const Form = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col lg:flex-row h-max ">
      <div className="w-1/3 hidden lg:block">
        <Image
          src="/img/contact.jpeg"
          width="500"
          height="800"
          className=""
          layout="responsive"
        />
      </div>
      <div className="lg:xl:w-2/3 w-full p-10">
        <form className="space-y-8 flex flex-col" onSubmit={submit}>
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-4 w-1/2">
              <label className="font-ibm text-xl font-extrabold tracking-tight ">
                First Name
              </label>
              <input
                type="text"
                name="first"
                placeholder="First Name"
                className="input"
              />
            </div>
            <div className="flex flex-col space-y-4 w-1/2">
              <label className="font-ibm text-xl font-extrabold tracking-tight">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="input"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <label className="font-ibm text-xl font-extrabold tracking-tight">
              E-mail
            </label>
            <input type="email" className="input" placeholder="Email" />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="font-ibm text-xl font-extrabold tracking-tight">
              Your Message{" "}
            </label>
            <textarea
              className="input"
              type="text"
              placeholder="Your Message"
            />
          </div>
          <button className="bg-[#FF6363] p-2 text-xl text-white rounded-md hover:bg-red-500 transition duration-200">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
