import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h1>This is landing page</h1>
      <div>
        <Link href="/about-us">
        <button className="px-3 py-2 bg-white text-black">
            Go to About Us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
