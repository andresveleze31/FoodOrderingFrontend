import { toast } from "sonner";
import { Button } from "./ui/button";

const FormMessage = () => {

    const messageSend = () => {
        toast.success("Message Send")
    }

  return (
    <div>
      <h3 className="text-center font-semibold mt-[5rem] ">
        If You Got Any Questions. <br />
        Please Do Not Hesitate to Send us a Message.
      </h3>

      <form className="flex flex-col gap-[3rem] ">
        <input
          placeholder="Your Name"
          className="w-full py-[1.3rem] px-[2rem] border rounded-xl bg-slate-100 "
          type="text"
        />
        <input
          placeholder="Your Email"
          className="w-full py-[1.3rem] px-[2rem] border rounded-xl bg-slate-100 "
          type="text"
        />
        <input
          placeholder="Subject"
          className="w-full py-[1.3rem] px-[2rem] border rounded-xl bg-slate-100 "
          type="text"
        />
        <textarea
          placeholder="Message"
          className="w-full py-[1.3rem] px-[2rem] border rounded-xl bg-slate-100 "
          rows={5}
        />
      </form>

      <Button onClick={() => messageSend()} className="py-[2.4rem] mt-[2rem] px-[2rem]  ">Send Message</Button>
    </div>
  );
};

export default FormMessage;
