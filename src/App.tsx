import { useRef, useState } from "react";
import "./App.css";
import BuiltForPeople from "./components/BuiltForPeople/BuiltForPeople";
import Parent from "./components/Caching/Parent";
import Counter from "./components/Counter/Counter";
import CustomTextEditor from "./components/CustomTextEditor/CustomTextEditor";
import Customer from "./components/Customer/Customer";
import DriveImpact from "./components/DriveImpact/DriveImpact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ImageUploadByReactHookForm from "./components/ImageUploadByReactHookForm/ImageUploadByReactHookForm";
import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import PowerfulExpert from "./components/PowerfulExpert/PowerfulExpert";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import Resources from "./components/Resources/Resources";
import Solution from "./components/Solution/Solution";
import WinningPlatform from "./components/WinningPlatform/WinningPlatform";
import CustomDatePicker from "./components/datepicker/CustomDatePicker";
import RefRender from "./components/RefRender/RefRender";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [photoId, setPhotoId] = useState("");
  function handleSubmit(photoId:string) {
    console.log(photoId);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }
  return (
    <div className="font-sans">
      {/* <Navbar />
      <Hero />
      <Customer />
      <BuiltForPeople />
      <WinningPlatform />
      <PowerfulExpert />
      <DriveImpact />
      <Solution />
      <Resources />
      <Footer /> */}
      {/* <Counter />
      <Posts /> */}
      {/* <ReactHookForm /> */}
      {/* <Parent /> */}
      {/* <CustomDatePicker /> */}
      {/* <CustomTextEditor /> */}
      {/* <ImageUploadByReactHookForm /> */}
      {/* <InfinityScroll
        scrollRef={scrollRef}
        setPhotoId={setPhotoId}
        handleSubmit={handleSubmit}
      />
      <button
        onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
          }
        }}
      >
        click me
      </button> */}
      <RefRender />
    </div>
  );
}

export default App;
