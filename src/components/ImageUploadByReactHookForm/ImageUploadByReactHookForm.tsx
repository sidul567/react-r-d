import React, { useRef } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const FILE_SIZE = 1024 * 1024 * 2; // 2MB

const validationSchema = Yup.object().shape({
  image: Yup.mixed()
    .required("An image file is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});

type Props = {};

const ImageUploadByReactHookForm = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const inputRef = useRef(null);

  const onSubmit = (data:any) => {
    console.log(data.image);
    // Handle the file upload logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <Controller
            name="image"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={(e) => field.onChange(e.target.files[0])}
              />
            )}
          />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() => {
          inputRef.current.click();
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default ImageUploadByReactHookForm;
