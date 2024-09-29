"use client";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "81fa153d-b439-4be5-9d0c-e975419788ff",
        ...formData,
      }),
    });

    if (res.ok) {
      toast({
        title: "Status",
        description: "Message sent successfully",
      });
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    } else {
      toast({
        title: "Status",
        description: "Error sending message. Please try again later.",
      });
      setLoading(false);
    }
  };

  return (
    <section>
      <h3 className="mb-2 text-center text-3xl font-bold text-neutral-900 dark:text-white">
        Get in Touch
      </h3>
      <p className="mt-1 text-center text-neutral-600 dark:text-neutral-400">
        Shoot me an email
      </p>

      <div className="mt-5 flex items-center justify-center pb-10">
        <Drawer>
          <DrawerTrigger>
            <Image src={"/email.png"} width={75} height={75} alt="email" />
          </DrawerTrigger>
          <DrawerContent className="border-t-1 w-full border-l-0 border-r-0 border-gray-500 bg-white p-6 backdrop-blur-3xl dark:bg-black">
            <div className="mx-auto w-full dark:bg-black md:max-w-xl">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-lg p-4 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-1 text-gray-600 dark:text-zinc-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg bg-gray-100 p-3 text-black placeholder-gray-500 focus:outline-none dark:bg-neutral-900 dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-1 text-gray-600 dark:text-zinc-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg bg-gray-100 p-3 text-black placeholder-gray-500 focus:outline-none dark:bg-neutral-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1 text-gray-600 dark:text-zinc-400"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-32 rounded-lg bg-gray-100 p-3 text-black placeholder-gray-500 focus:outline-none dark:bg-neutral-900 dark:text-white"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <Button
                  className="w-full rounded-lg bg-neutral-950 py-3 font-semibold text-white transition-colors duration-300 focus:outline-none dark:bg-neutral-100 dark:text-black"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}

export default Contact;
