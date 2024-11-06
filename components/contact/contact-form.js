import { useEffect, useState } from 'react';
import classes from './contact-form.module.css';
import { Notification } from '../ui/notification';

const sendContactData = async contactDetails => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong');
	}
};

export const ContactForm = () => {
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [message, setMessage] = useState();
	const [requestStatus, setRequestStatus] = useState();
	const [reqError, setReqError] = useState();

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setReqError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	const sendMessageHandler = async e => {
		e.preventDefault();

		setRequestStatus('pending');
		try {
			await sendContactData({
				email,
				name,
				message,
			});
			setRequestStatus('success');
			setEmail('');
			setMessage('');
			setName('');
		} catch (error) {
			setRequestStatus('error');
			setReqError(error.message);
		}
	};

	let notification;

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			message: 'sending message',
			title: 'sending...',
		};
	}
	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			message: 'success message',
			title: 'sending success',
		};
	}
	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			message: reqError,
			title: 'error',
		};
	}

	return (
		<section className={classes.contact}>
			<h1>How can I help you</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="name"
							htmlFor="name"
							required
							value={name}
							onChange={e => {
								setName(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						htmlFor="message"
						rows="5"
						value={message}
						onChange={e => {
							setMessage(e.target.value);
						}}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
};
