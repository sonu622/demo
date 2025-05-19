import React from "react";
import { Row, Col } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

function Footer() {
  return (
    <>
      <div className="h-screen w-full  flex items-center">
        <video
          className="h-8xl w-7xl m-62 border rounded-2xl  "
          src="assets//20250424_183114_Wild animals for kids - Vocabulary for kids.mp4"
          controls
        ></video>
      </div>

      <div className="bg-white h-1/2  ">
        <h1 className="text-5xl font-medium flex justify-center ">
          What Our{" "}
          <span className="italic font-extrabold text-red-600">
            Founder says
          </span>
        </h1>
      </div>
      <div className="bg-red-100  flex  top-10 ">
        <div className="flex  left-20">
          <div className="h-100 w-100 shadow-red-700 my-8 shadow border-2 border-red-700 mt-10 ml-40  border-red rounded-2xl">
            <img
              className="h-100 w-100 shadow-red-700   shadow border-2 border-red-700   border-red rounded-2xl relative  bottom-6 right-6 "
              src="https://dhhe9v901cvhb.cloudfront.net/FOUNDER_PROFILE_PIC/20250424_170337_Prince2.jpeg"
              alt="not loaded"
            />
          </div>
        </div>
        <div className=" ml-40 h-36 w-full">
          <h1 className="text-xl pt-20">"Lord Anime"</h1>
          <h1 className="text-2xl font-bold pt-60">Anime</h1>
          <h2 className="text-xl ">Founder</h2>
        </div>
      </div>

      <div className="3rd page h-96 border-1  w-full mt-50 flex-row justify-center   bg-[url(https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] -mask-linear-90">
        <div className="h-30 mt-20">
          <h1 className="text-white text-5xl flex justify-center items-center ">
            Join Our{" "}
            <span className="text-red-600 font-extrabold italic flex justify-center items-center">
              Newsletter
            </span>
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-white text-xl text-center ">
              Join our community of passionate car lovers and never miss a beat.
              Get the latest updates on Stunning supercar <br /> features and
              Community spotlights
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <textarea
            className="bg-white w-120 flex items-center  rounded-2xl"
            type="Email"
            name=""
            id=""
            placeholder="Email"
          ></textarea>
        </div>

        <div className="flex justify-center items-center mt-5">
          <button className="bg-red-600 border w-60 h-12 text-white text-xl font-bold rounded-2xl flex justify-center items-center  hover:bg-white hover:text-red-400">
            Subscribe
          </button>
        </div>
      </div>

      <div className="4th page mt-20 border-0 bg-red-100 ">
        <Row>
          <Col span={12} className=" h-160 flex justify-center p-28 pt-55 ">
            <h1 className="text-5xl ">
              Download{" "}
              <span className="text-red-600 italic font-extrabold">
                the App Now
              </span>
            </h1>
            <p className="font-medium text-xl pt-10">
              Get the Supercar Connect app now and join a global community of
              car enthusiasts anytime, anywhere
            </p>
            <div className="flex items-center gap-3 pt-10">
              <img
                className="h-20 w-60 "
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                className="h-20 w-60"
                src="https://dev.supercar-connect.com/static/media/playStore.5e89594b3f3b7b4767b0.png"
                alt=""
              />
            </div>
          </Col>

          <Col span={12} className=" h-160 pt-0 pl-20">
            <img className="h-160 w-170" src="src/assets/mobile.png" alt="" />
          </Col>
        </Row>
      </div>

      <div className="5th page h-150 mt-20 bg-red-100 w-full  ">
        <Row>
          <Col span={11} className=" h-150 ">
            <div className="flex justify-center items-center h-120 border-amber-200 m-20">
              <Col>
                <img
                  src="https://dev.supercar-connect.com/static/media/Red%20Car.21003df44d2b5d42dcd2.gif"
                  alt=""
                />{" "}
              </Col>
            </div>
          </Col>
          <Col span={13} className=" h-150 ">
          <div className="mt-20 ml-15">
             <div>
              <h1 className="text-black text-5xl ">
                Contact <span className="font-extrabold text-red-600">Us</span>
              </h1>
              <p className="text-xl">We're here to help!</p>
              <p className="text-xl">We look forward to hearing from you.</p>
            </div>

            <Form.Item
              className="w-150  "
              label=""
              placeholder="Name"
              name="username"
              rules={[{ required: true, message: "Name" }]}
            >
              <Input placeholder="Name" className="font-semibold text-black h-15" />
            </Form.Item>

            <Form.Item
              className="w-150  "
              label=""
              name="username"
              rules={[{ required: true, message: "Name" }]}
            >
              <Input className="h-15" placeholder="Email" />
            </Form.Item>

            <Form.Item
              className="w-150 "
              label=""
              placeholder="Name"
              name="username"
              rules={[{ required: true, message: "Name" }]}
            >
              <Input placeholder="Message" className="h-40" />
            </Form.Item>

            <Form.Item label={null} className="h-20">
              <Button className="w-50" type="primary" htmlType="send">
                Send
              </Button>
            </Form.Item>
          </div>
           

            {/* <div>
              
            <div className="flex-col border-2 h-60">
              <label htmlFor="">
                <input type="text" placeholder="Name*" />
              </label>

              <label htmlFor="">
                <input type="Email" placeholder="Email*" />
              </label>

              <label htmlFor="">
                <input type="text" placeholder="Message*" />
              </label>
            </div> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
