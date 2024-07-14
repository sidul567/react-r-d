import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Resumable from "resumablejs";
import Button from "./Button";

type Props = {};

const RefRender: React.FC<Props> = (props: Props) => {
  const [select, setSelect] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [testData, setTestData] = useState("");
  const [drag, setDrag] = useState(false);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumable, setResumable] = useState<any>();
  const [fileName, setFileName] = useState("");
  const ref = useRef<HTMLButtonElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    const resumable = new Resumable({
      target: "http://localhost:8000/video-upload",
      fileType: ["mp4"],
      chunkSize: 20 * 1024 * 1024,
      headers: {
        Accept: "application/json",
      },
      testChunks: false,
    });
    setResumable(resumable);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (select === "1" && ref.current) {
        resumable.assignBrowse(ref.current, false);
        if (ref2.current) {
          resumable.assignDrop(ref2.current);
        }
        ("");
        resumable.on("fileAdded", function (file) {
          console.log(file);
          setFileName(file.fileName);
          // setLoading(true);
          // resumable.upload();
        });

        resumable.on("fileProgress", function (file) {
          setLoading(true);
          setProgress(file.progress(true) * 100);
        });

        resumable.on("fileSuccess", function (file, response) {
          setLoading(false);
          const result = JSON.parse(response);
          setLink(result.link);
        });

        resumable.on("fileError", function (file, response) {
          setLoading(false);
          console.log(response);
        });
      }
    };

    fetchData();
  }, [select]);

  const handleTest = async () => {
    const result = await fetch("http://localhost:8000/test");
    const data = await result.json();
    setTestData(data.message);
  };
  return (
    <div className="flex flex-col gap-12 justify-start items-start m-5">
      <select name="" id="" onChange={handleChangeSelect}>
        <option value="">Select one</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>

      {select === "1" && (
        <>
          <div
            className={`bg-orange-100 h-[300px] w-[300px] rounded-lg border border-transparent ${
              drag && "border border-dashed border-blue-500"
            }`}
            ref={ref2}
            onDragEnter={() => {
              setDrag(true);
            }}
            onDragLeave={() => {
              setDrag(false);
            }}
          >
            <Button getRef={ref} loading={loading} />
          </div>

          <p className="text-green-500 text-xl font-semibold">{fileName}</p>

          <button
            onClick={() => {
              setLoading(true);
              resumable.upload();
            }}
            className="bg-orange-500 text-white text-lg px-4 py-2 rounded-md hover:bg-orange-600 duration-300"
          >
            Upload File
          </button>

          <button
            onClick={handleTest}
            className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600 duration-300"
          >
            Button2
          </button>

          {Math.round(progress) > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-4 relative">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
              <p className="text-green-300 text-2xl font-bold text-center">
                {Math.round(progress)}%
              </p>
            </div>
          )}

          {Math.round(progress) === 100 && link && (
            <video width="400" controls>
              <source src={link} type="video/mp4" />
            </video>
          )}
        </>
      )}
    </div>
  );
};

export default RefRender;
