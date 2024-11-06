import Head from 'next/head';
import { ContactForm } from '../components/contact/contact-form';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact me</title>
				<meta name="description" content="send me your messages" />
			</Head>
			<ContactForm />
		</>
	);
};

export default ContactPage;
