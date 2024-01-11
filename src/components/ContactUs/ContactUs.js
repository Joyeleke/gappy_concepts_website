export default function ContactUs() {
  return (
    <section className="grid grid-cols-2 bg-primary px-16 py-16 items-center">
      <article>
        <h1 className="text-3xl font-bold my-8">Contact Us</h1>
        <p className="text-base font-semibold">
          Need to get in touch with us?{" "}
        </p>
        <p className="text-base font-semibold">
          Fill out the from with your enqiry and we would get back to you!
        </p>
      </article>
      <form className=" grid grid-cols-3 gap-x-4">
        <div>
          <label htmlFor="first_name" className="block text-md mb-2">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="border-2 border-black w-full px-4 py-2 focus:outline-none focus:border-black mb-4"
            required
          />
        </div>

        <div>
          <label htmlFor="last_name" className="block text-md mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="border-2 border-black w-full px-4 py-2 focus:outline-none focus:border-black mb-4"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-md mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black w-full px-4 py-2 focus:outline-none focus:border-black mb-4"
            required
          />
        </div>

        <div className="col-span-3">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className=" w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mb-4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
