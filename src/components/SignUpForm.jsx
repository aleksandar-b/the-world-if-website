import { useState } from 'react';
import { useId } from 'react';

import { Button } from '@/components/Button';

export function SignUpForm() {
    let id = useId();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Submit the form using AJAX or any other method without refreshing the page
        const formData = new FormData(event.target);
        fetch('https://formspree.io/f/mknagend', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                // Handle the response if needed
                console.log(response);
                setSubmitted(true); // Set submitted state to true
                setEmail(''); // Clear the email input field
            })
            .catch((error) => {
                // Handle errors if any
                setSubmitted(true); // Set submitted state to true
                setEmail(''); // Clear the email input field
                console.error(error);
            });
    };

    return (
        <div>
            <form className="relative isolate mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
                <label htmlFor={id} className="sr-only">
                    Email address
                </label>
                <input
                    required
                    type="email"
                    autoComplete="email"
                    name="email"
                    id={id}
                    placeholder="Email address"
                    value={email} // Bind the value of the input field to the email state
                    onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
                    className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
                />
                <Button type="submit" arrow>
                    Join Waitlist
                </Button>
                <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
                <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
            </form>
            <div className="py-2 text-xs text-gray-600">
                {submitted && <p>Thank you for signing up!</p>}
            </div>
        </div>
    );
}
