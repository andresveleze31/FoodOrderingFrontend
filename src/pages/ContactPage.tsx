import DynamicHero from "@/components/DynamicHero";
import FormMessage from "@/components/FormMessage";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      <DynamicHero
        title="Contact Us"
        subtitle="A Greate Restaurant Website
"
      />

      <div className="bg-slate-100 py-[4rem] ">
        <div className="contenedor rounded-xl bg-white p-[5rem] flex-col items-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7952.176228977538!2d-74.08743946413537!3d4.754712022844099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84522e5287a5%3A0xcad502760d71a50e!2sEl%20Salitre%2C%20Suba%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1719929703616!5m2!1ses-419!2sco"
            width="600"
            className="w-full"
            height="550"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="mt-[4rem] grid grid-cols-1 md:grid-cols-3 gap-[4rem] ">
            <div className="flex md:border-r flex-col items-center gap-[1rem] ">
                <PhoneCall className="text-gray-500 w-[3.5rem] h-[3.5rem] " />
                <p className="uppercase font-bold">Phone</p>
                <p className="text-[1.4rem] text-gray-500 ">Phone 01: (0091) 8547 632521</p>
                <p className="text-[1.4rem] text-gray-500 ">Phone 02: (084) 965 4788</p>
            </div>

            <div className="flex  flex-col items-center gap-[1rem] ">
                <MapPin className="text-gray-500 w-[3.5rem] h-[3.5rem] " />
                <p className="uppercase font-bold">ADDRESS</p>
                <p className="text-[1.4rem] text-gray-500 ">5Tth Floor, AH Building, 756 New St Melbourn</p>
                <p className="text-[1.4rem] text-gray-500 ">Australia</p>
            </div>

            <div className="flex md:border-l flex-col items-center gap-[1rem] ">
                <Mail className="text-gray-500 w-[3.5rem] h-[3.5rem] " />
                <p className="uppercase font-bold">Email</p>
                <p className="text-[1.4rem] text-gray-500 ">foodchow@domain.com</p>
                <p className="text-[1.4rem] text-gray-500 ">foodchow@gmail.com</p>
            </div>
          </div>

          <FormMessage />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
