const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center underline my-10">Contact Us</h1>

      <div className="text-2xl max-w-xl mx-auto">
        <p>
          <span className="font-bold">Address:- </span>Springdale Public School,
          123 Education Lane, Cityville, State, ZIP Code.
        </p>
        <p>
          <span className="font-bold">Phone:-</span>
          +1 (123) 456-7890
        </p>
        <p>
          <span className="font-bold">Email:-</span>
          info@springdale.edu.
        </p>
        <div>
        <h1 className="text-4xl underline my-5">Send message :-</h1>

            <form className="flex gap-3 flex-col">
                <input className="p-3 rounded border border-orange-400" type="text" placeholder="Name" name="name" id="name" />
                <input className="p-3 rounded border border-orange-400" type="text" placeholder="Email" name="email" id="email" />
                <textarea className="border border-orange-400" name="message" id="message"></textarea>
                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
