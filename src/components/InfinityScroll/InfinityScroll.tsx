import { CircularProgress, Dialog, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import _ from "lodash";

type Props = {
  scrollRef: any;
  setPhotoId: (photoId: string) => void;
  handleSubmit: (photoId: string) => void;
};

const InfinityScroll = ({ scrollRef, handleSubmit, setPhotoId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const getPhotos = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=nature&per_page=10&page=${page}`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000010e6ae6bcbc864b4a9a24e613531400e2",
          },
        }
      );
      const data = await res.json();
      setPhotos([...photos, ...data.photos]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMoreData = _.debounce(async () => {
    setPage(page + 1);
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=nature&per_page=10&page=${
          page + 1
        }`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000010e6ae6bcbc864b4a9a24e613531400e2",
          },
        }
      );
      const data = await res.json();
      setPhotos([...photos, ...data.photos]);
    } catch (err) {
      console.log(err);
    }
  }, 1500);
  useEffect(() => {
    getPhotos();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    setSubmittedValue(value);
    setValue("");
    const splittedValue = value.split("\n");
    console.log(splittedValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitForm(e);
    }
  };

  return (
    <div>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button
        className="p-2 bg-green-200 rounded-md font-medium text-lg"
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </button>

      <Dialog open={open} fullWidth onClose={() => setOpen(false)}>
        <button
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
          }}
        >
          click me
        </button>
        {/* <div
          id="scrollableDiv"
          ref={scrollRef}
          style={{
            width: "357px",
            height: "340px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
          className="bg-body-tertiary p-3"
        > */}
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMoreData}
          hasMore={page < 10}
          height={400}
          loader={
            <div className="flex justify-center items-center">
              <CircularProgress color="success" className="w-6" />
            </div>
          }
          // style={{
          //   display: "flex",
          //   flexDirection: "column-reverse",
          //   overflow: "visible",
          // }}
          scrollableTarget="scrollableDiv"
          // inverse={true}
          // scrollThreshold="30%"
          // pullDownToRefreshThreshold={10}
        >
          {photos.map((photo: any, index: number) => (
            // <img
            //   src={photo.src.small}
            //   alt=""
            //   key={index}
            //   className="!w-[100px] !h-[100px] !max-w-[100px]"
            // />
            <div
              className={`!w-[100px] !h-[100px] !max-w-[100px] text-xl font-bold font-sans cursor-pointer ${
                index % 2 ? "bg-green-50 ml-auto" : "bg-red-50"
              }`}
              key={index}
              onClick={() => {
                setPhotoId(photo.id);
                handleSubmit(photo.id);
              }}
            >
              {photo.id}
            </div>
          ))}
        </InfiniteScroll>
        {/* </div> */}
      </Dialog>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmitForm}>
        <TextField
          placeholder="Enter your message"
          label="Enter your message"
          multiline
          maxRows={5}
          // value={value}
          // onChange={handleChange}
          // onKeyDown={handleKeyDown}
        />
        <button type="submit">submit</button>
      </form>
      <br />
      <br />
      <br />
      <div>
        {submittedValue.split("\n").map((item) => (
          <p>
            {item}
            <br />
          </p>
        ))}
      </div>

      <div className="max-h-[400px] h-[400px] bg-red-50 w-[800px] overflow-hidden">
        <div className="bg-green-100 h-[320px] overflow-auto w-full">
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
          <p className="bg-blue-100 px-3 py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi explicabo facilis deserunt voluptas obcaecati possimus reiciendis eos ut? Quas, atque.</p>
        </div>
        <TextField
          placeholder="Enter your message"
          label="Enter your message"
          multiline
          maxRows={5}
          className="w-full"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default InfinityScroll;
