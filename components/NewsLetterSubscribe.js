import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";


const NewsLetterSubscribe = () => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <NewsLetterForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
}
export default NewsLetterSubscribe;