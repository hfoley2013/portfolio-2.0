'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfo } from '@/typings'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import sendEmail from '@/email.js/sendEmail'

type Props = {
  pageInfo?: PageInfo
}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const { toast } = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {

    const templateParams: Inputs = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    const response = await sendEmail(templateParams);

    if (response != 'OK') {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again" onSubmit={handleSubmit(onSubmit)}> Try again</ ToastAction >,
      });
    } else {
      toast({
        title: `Thank you ${formData.name}!`,
        description: (
          <div className="flex flex-wrap p-4 mt-2 rounded-md bg-slate-950">
            <code className="font-bold text-white">I have received your message and will be with you soon.</code>
          </div>),
      });

      reset();
    }

  };

  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">

      <h3 className="sectionHeader">
        Contact
      </h3>

      <div className="max-h-[340px] sm:max-h-[400px] md:max-h-none">
        <div className="flex flex-col space-y-1 sm:mt-5 md:mt-3 lg:mt-0 sm:space-y-2 md:space-y-3">
          <h4 className="text-lg font-semibold text-center sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            Got a project in mind?{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              <a href={`mailto:${pageInfo?.email}`} className='hover:opacity-50'>
                Let&apos;s Talk.
              </a>
            </span>
          </h4>


          <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
            <a href={`tel:${pageInfo?.phoneNumber}`} className="flex items-center justify-center space-x-5 hover:opacity-50">
              <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl">{pageInfo?.phoneNumber}</p>
            </a>
            <a href={`mailto:${pageInfo?.email}`} className="flex items-center justify-center space-x-5 hover:opacity-50">
              <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
              <p className="sm:text-lg md:text-xl 2xl:text-2xl">{pageInfo?.email}</p>
            </a>

            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
              <p className="sm:text-lg md:text-xl lg:text-2xl">{pageInfo?.address}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mx-auto space-y-2 max-w-[350px] sm:max-w-[500px] md:max-w-none pt-5"
          >
            <div className="flex space-x-2">
              <input {...register('name')} placeholder="Name" className="contactInput max-w-[49%] sm:max-w-none" type="text" />
              <input  {...register('email')} placeholder="Email" className="contactInput max-w-[49%] sm:max-w-none" type="email" />
            </div>
            <input  {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

            <textarea {...register('message')} placeholder="Message" className="h-28 sm:h-36 md:h-44 lg:h-52 contactInput"></textarea>
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe