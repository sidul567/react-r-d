import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type Props = {};

interface FormValues {
  username: string;
  email: string;
  channel: string;
}

const ReactHookForm = (props: Props) => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onsubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <DevTool control={control} placement="top-left" />;
      <div className="max-w-[780px] mx-auto mt-32">
        <form onSubmit={handleSubmit(onsubmit)} noValidate>
          <div className="text-sm flex flex-col gap-2 mb-3">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              className="px-2 py-1 outline-none border"
              {...register("username", {
                required: {
                  value: true,
                  message: "Please enter an username",
                },
              })}
            />
            <p
              className={`${
                errors.username?.message
                  ? "text-xs text-red-600 font-normal"
                  : "hidden"
              }`}
            >
              {errors.username?.message}
            </p>
          </div>
          <div className="text-sm flex flex-col gap-2 mb-3">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              className="px-2 py-1 outline-none border"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter an email",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
                validate: {
                  notAdmin: (fieldValue)=>{
                    return fieldValue !== "admin@example.com" || "Use different email"
                  },
                  notBlacklisted: (fieldValue)=>{
                    return !fieldValue.endsWith("baddomain.com") || "Invalid Domain!"
                  }
                }
              })}
            />
            <p
              className={`${
                errors.email?.message
                  ? "text-xs text-red-600 font-normal"
                  : "hidden"
              }`}
            >
              {errors.email?.message}
            </p>
          </div>
          <div className="text-sm flex flex-col gap-2 mb-3">
            <label htmlFor="channel" className="font-semibold">
              Channel
            </label>
            <input
              type="text"
              id="channel"
              placeholder="Enter Channel"
              className="px-2 py-1 outline-none border"
              {...register("channel", {
                required: {
                  value: true,
                  message: "Please enter an channel",
                },
                minLength: {
                  value: 6,
                  message: "Enter at least 6 character",
                },
              })}
            />
            <p
              className={`${
                errors.channel?.message
                  ? "text-xs text-red-600 font-normal"
                  : "hidden"
              }`}
            >
              {errors.channel?.message}
            </p>
          </div>
          <input
            type="submit"
            value="Submit"
            className="py-2.5 font-semibold bg-slate-900 text-white flex items-center justify-center w-full rounded-lg"
          />
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
