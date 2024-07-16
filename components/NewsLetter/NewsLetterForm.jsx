import { useState } from "react";
//import { sanitize } from '../../../utils/miscellaneous';
//import Loading from '../../loading';
import { Button } from "@/components/ui/button";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleSubmit();
    }
  }

  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  };

  return (
    <div>
      <h5 className="mb-4 font-bold">Newsletter</h5>
      <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          type="email"
          placeholder="Enter Your Email Here"
          className=" rounded-md pl-4 pr-6 h-11 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          onKeyUp={(event) => handleInputKeyEvent(event)}
        />

        <Button
          className="w-full md:w-auto bg-orange-700 hover:bg-orange-600"
          onClick={handleSubmit}
        >
          Subscribe
        </Button>
      </div>
      <div className="min-h-42px">
        { 'sending' === status ? <div>Sending...</div> : null }
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-200 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: message }}
          />

        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
