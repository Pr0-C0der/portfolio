import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("mlderjpq"); // Replace with your Formspree form ID
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (e) => {
    const waitDuration = 10000;

    e.preventDefault();
    const result = await handleSubmit(e);
    if (result.ok) {
      toast({
        title: "Message Sent!",
        description: "Thanks for your message. We'll get back to you soon.",
        duration: waitDuration,
      });
      setShowSuccess(true);
      e.target.reset(); // Reset the form
      setTimeout(() => setShowSuccess(false), waitDuration); // Hide success message after 10 seconds
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg p-6 h-full">
            <h3 className="text-lg leading-6 font-medium mb-4">Get in touch</h3>
            <p className="mb-6">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology and research. Feel free to reach out through any of the following methods:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:112115115@cse.iiitp.ac.in" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">112115115@cse.iiitp.ac.in</a>
              </li>
              <li className="flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                <a href="https://www.linkedin.com/in/prathamesh-gadekar-b7352b245/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Prathamesh Gadekar</a>
              </li>
              <li className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                <a href="https://github.com/Pr0-C0der" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">Pr0-C0der</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Indian Institute of Information Technology, Pune</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 7499101586</span>
              </li>
            </ul>
            <p className="mt-6">
              I'm particularly interested in opportunities related to AI, Machine Learning, and Computer Vision research. Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all duration-300 ease-in-out p-6 h-full">
            <h3 className="text-lg leading-6 font-medium mb-4">Contact Form</h3>
            {showSuccess && (
              <Alert className="mb-4 bg-green-100 border-green-400 text-green-700">
                <AlertDescription>
                  Sent Successfully! Thank you for your message.
                </AlertDescription>
              </Alert>
            )}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-100"
                  >
                    {state.submitting ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        Successfully Sent! 🎉
                      </motion.span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
