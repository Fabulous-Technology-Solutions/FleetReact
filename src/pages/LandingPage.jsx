import React from "react";
import fleet from "../assets/images/fleet.png";
import {
  FaMapMarkerAlt,
  FaUserCog,
  FaUsers,
  FaTools,
  FaRoute,
  FaChartBar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { BiSolidTachometer } from "react-icons/bi";
import { useTheme } from "../theme/ThemeContext";
import dashboardLight from "../assets/images/dashboard.png";
import dashboardDark from "../assets/images/DashboardDark.png";
import about from "../assets/images/about.png";
import Noor from "../assets/images/Noor.png";
import { FaCircleCheck } from "react-icons/fa6";
import ToggleSwitch from "../components/settings/ToggleSwitch";
import { RiHeartsFill } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { BsLightningChargeFill } from "react-icons/bs";
import Slider from "react-slick";
import { Avatar, Rating } from "@mui/material";

const LandingPage = () => {
  const { theme } = useTheme();
  const features = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Real-Time Live Tracking",
      description:
        "Monitor vehicle locations, routes, and statuses instantly with GPS-powered live tracking.",
    },
    {
      icon: <BiSolidTachometer size={20} />,
      title: "All-in-One Admin Dashboard",
      description:
        "Manage your entire fleet from a central dashboard — vehicles, users, documents, and operations.",
    },
    {
      icon: <FaUsers size={20} />,
      title: "Driver Management",
      description:
        "Onboard, assign, and monitor drivers with detailed profiles, compliance status, and activity tracking.",
    },
    {
      icon: <FaUsers size={20} />,
      title: "Customer Management",
      description:
        "Create and manage customer accounts, link routes and services, and view historical activity.",
    },
    {
      icon: <FaTools size={20} />,
      title: "Mechanic & Maintenance Management",
      description:
        "Assign maintenance tasks, view vehicle health, and track service history for better uptime.",
    },
    {
      icon: <FaRoute size={20} />,
      title: "Route Planning & Optimization",
      description:
        "Build and assign routes with estimated arrival times, delays, and performance tracking.",
    },
    {
      icon: <FaChartBar size={20} />,
      title: "Performance Analytics & Reports",
      description:
        "Visualize fleet health, route efficiency, and driver performance over timeframes.",
    },
  ];
  const diffirences = [
    `Live GPS Tracking: Monitor your entire fleet in real time for smarter routing and faster decisions.`,
    `All-in-One Platform: Manage customers, drivers, mechanics, routes, documents, and performance — all in one place.`,
    ` Admin-Level Control: Powerful tools for assigning roles, managing teams, and maintaining full operational visibility.`,
    `Automated Compliance Alerts: Stay audit-ready with document status tracking and real-time notifications.`,
  ];
  const plans = [
    {
      name: "Free",
      price: "$0",
      badge: null,
      description: "Perfect plan to get started",
      subtitle:
        "A free plan grants you access to some cool features of Spend.In.",
      features: [
        { label: "Sync accross device", included: true },
        { label: "5 workspace", included: true },
        { label: "Collaborate with 5 user", included: true },
        { label: "Sharing permission", included: false },
        { label: "Admin tools", included: false },
        { label: "100+ integrations", included: false },
      ],
      buttonText: "Get Your Free Plan",
    },
    {
      name: "Pro",
      price: "$12",
      badge: "Popular",
      description: "Perfect plan for professionals!",
      subtitle:
        "For professional only! Start arranging your expenses with our best templates.",
      features: [
        { label: "Everything in Free Plan", included: true },
        { label: "Unlimited workspace", included: true },
        { label: "Collaborative workspace", included: true },
        { label: "Sharing permission", included: true },
        { label: "Admin tools", included: true },
        { label: "100+ integrations", included: true },
      ],
      buttonText: "Get Started",
    },
    {
      name: "Ultimate",
      price: "$33",
      badge: null,
      description: "Best suits for great company!",
      subtitle:
        "If you a finance manager at big company, this plan is a perfect match.",
      features: [
        { label: "Everything in Pro Plan", included: true },
        { label: "Daily performance reports", included: true },
        { label: "Dedicated assistant", included: true },
        { label: "Artificial intelligence", included: true },
        { label: "Marketing tools & automations", included: true },
        { label: "Advanced security", included: true },
      ],
      buttonText: "Get Started",
    },
  ];
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="bg_light c-primary mt-[73px]">
      <section className="flex flex-col items-center pt-20">
        <h1 className="max-w-[550px] font-semibold text-4xl text-center m-2">
          Smarter Fleet Management with Real-Time Live Tracking
        </h1>
        <p className="c-secondary max-w-[550px] text-center font-medium m-2">
          Track vehicles, manage drivers and mechanics, and optimize routes —
          all in one powerful platform.
        </p>
        <img src={fleet} alt="" className="w-full" />
      </section>
      <section className="py-18">
        <p className="text-center text-blue font-bold">Features</p>
        <h2 className="font-semibold text-4xl text-center m-2 my-6">
          Powerful Features, One Unified Platform
        </h2>
        <div className="flex justify-center">
          <p className="c-secondary max-w-[660px] text-center font-medium m-2">
            Track live locations, manage people and vehicles, and automate
            compliance — all from a centralized SaaS dashboard.
          </p>
        </div>
        <div className="flex my-[80px]">
          {/* Left Panel */}
          <div className="w-full lg:w-1/2 p-8 space-y-6 xl:px-[120px] sm:px-[60px]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 mb-10">
                <div className="bg-navlink text-white p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-3">
                    {feature.title}
                  </h3>
                  <p className="c-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Panel */}
          <div className="w-full lg:w-1/2 lg:block hidden">
            <img
              src={theme === "dark" ? dashboardDark : dashboardLight}
              alt="Dashboard Preview"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="xl:px-[120px] sm:px-[60px]">
        <div className="flex lg:flex-row flex-col">
          {/* Right Image Panel */}
          <div className="w-full lg:w-1/2">
            <img src={about} alt="About Preview" className="w-full" />
          </div>
          {/* Left Panel */}
          <div className="w-full lg:w-1/2 p-8 space-y-6 ">
            <p className="text-blue font-bold">About</p>
            <h2 className="font-semibold text-4xl my-6 xl:pe-18">
              Built for Fleets. Backed by Innovation.{" "}
            </h2>
            <p className="c-secondary max-w-[660px] font-medium my-2">
              We’re a technology-first company on a mission to simplify and
              streamline fleet operations with powerful, real-time tools.
            </p>
            <h2 className="font-semibold text-2xl my-6">What Sets Us Apart</h2>
            {diffirences.map((e, i) => (
              <div className="flex gap-3" key={i}>
                <span className="mt-1">
                  <FaCircleCheck className="text-[var(--csuccess)] text-xl" />
                </span>
                <p className="c-secondary font-medium m-2 mt-0">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="xl:px-[120px] sm:px-[60px]">
        <h2 className="font-semibold text-4xl text-center m-2 my-6">
          Ready to Get Started?
        </h2>
        <p className="c-secondary text-center font-medium m-2">
          Choose a plan that suits your business needs
        </p>
        <div className="flex justify-center items-center gap-3 my-6">
          <p className="font-semibold">Monthly</p>
          <div className="flex items-center" style={{ zoom: "2" }}>
            <ToggleSwitch />
          </div>
          <p className="font-semibold">Yearly</p>
        </div>
        <div className="flex justify-center mt-3">
          <span className="rounded-full text-black px-2 bg-[#C5D6F3]">
            Save 65%
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto mt-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-cardcontainer rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-semibold flex items-center gap-2">
                    {plan.name === "Free" && (
                      <RiHeartsFill className="text-blue" />
                    )}
                    {plan.name === "Pro" && (
                      <PiCrownSimpleFill className="text-blue" />
                    )}
                    {plan.name === "Ultimate" && (
                      <BsLightningChargeFill className="text-blue" />
                    )}
                    {plan.name}
                  </h2>
                  {plan.badge && (
                    <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm c-secondary">{plan.description}</p>
                <div className="text-4xl font-bold mt-4">
                  {plan.price}
                  <span className="text-base font-medium c-secondary">
                    {" "}
                    /month
                  </span>
                </div>
                <p className="text-sm c-secondary mt-2">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 text-sm `}
                  >
                    {feature.included ? (
                      <FaCheckCircle className="text-[var(--csuccess)] text-lg" />
                    ) : (
                      <FaTimesCircle className="text-[#596780] text-lg" />
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 font-semibold bg-navlink c-inverted py-2 px-4 rounded-md">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="xl:ps-[120px] md:ps-[60px] mt-32 mb-8">
        <h2 className="font-semibold text-4xl my-6 text-center">
          What Our Users Say
        </h2>
        <div className="overflow-hidden">
          <div className="">
            <Slider {...settings}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="p-3 py-8">
                    <div
                      className="bg-cardcontainer p-12 rounded-2xl  relative"
                      style={{ boxShadow: "0 0 10px 5px rgba(0,0,0,0.1)" }}
                    >
                      <span className="absolute top-0 left-20 transform -translate-x-1/2 -translate-y-1/2">
                        <Avatar src={Noor} sx={{ width: 64, height: 64 }} />
                      </span>
                      <p>
                        Although this is well intentioned and the goal certainly
                        is to reduce the quantity of these bothersome thoughts,
                        the technique is{" "}
                      </p>
                      <div className="flex justify-between items-center gap-3 mt-5">
                        <div className="mt-3">
                          <h3 className="font-2xl c-primary">Robert Fox</h3>
                          <p className="c-secondary max-w-[660px] text-center font-medium ">
                            Ceo Google Inc
                          </p>
                        </div>
                        <Rating defaultValue={5} readOnly />
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="xl:px-[120px] sm:px-[60px] py-16 px-4">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-blue font-bold">Contact</p>
            <h2 className="font-semibold text-4xl my-6 max-w-[500px]">
              Let’s Talk Fleet Management — Fast Support
            </h2>
            <p className="c-secondary font-medium max-w-[500px]">
              Have questions, need a demo, or want to see live tracking in
              action? Our team is here to help — anytime
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 rounded-md c-primary border border-main bg-cardcontainer"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 rounded-md c-primary border border-main bg-cardcontainer"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md c-primary border border-main bg-cardcontainer"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-md c-primary border border-main bg-cardcontainer"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md c-primary border border-main bg-cardcontainer resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full font-semibold bg-navlink c-inverted py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
