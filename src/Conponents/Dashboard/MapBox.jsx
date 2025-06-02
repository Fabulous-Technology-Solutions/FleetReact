import React from "react";

export default function MapBox() {
  return (
    <div className="border border-main p-4 rounded-[16px] bg-sidebar flex flex-col justify-between h-full">
      <div className="flex items-center gap-x-4 gap-y-2 justify-between flex-wrap">
        <p className="c-primary text-sm font-semibold">Live Fleet Map</p>
      </div>
      <div className="h-[250px] mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3366.18302727438!2d74.51262507524432!3d32.467795973794416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI4JzA0LjEiTiA3NMKwMzAnNTQuNyJF!5e0!3m2!1sen!2s!4v1748848088452!5m2!1sen!2s"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
