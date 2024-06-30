import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = {};

const CustomTextEditor = (props: Props) => {
  const toolbarOptions = [
    ["bold", "italic"],
    ["link", "image"],
  ];
  const modules = {
    toolbar: [
      [{ header: [] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  const [value, setValue] = useState("");
  console.log(value);

  return (
    <>
      <h1 className="text-center text-3xl text-orange-500">CustomTextEditor</h1>
      <div>
        <ReactQuill modules={modules} formats={formats} value={value} onChange={setValue} />
      </div>
    </>
  );
};

export default CustomTextEditor;
