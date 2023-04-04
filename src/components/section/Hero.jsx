"use client";
import Image from "next/image";
import React from "react";
import IconButton from "../buttons/RiButton";
import RiButton from "../buttons/RiButton";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  function gotoSignup() {
    router.push("/donors/signup");
  }
  return (
    <section className="rounded-ss-full bg-gray-200 pt-24 md:pt-0">
      <div className="min-h-screen container md:flex items-center gap-4 h-full ">
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-6xl">
            Donate blood, <br />
            save life!
          </h1>
          <em>
            "Many people owe their lives to selfless blood donors," said WHO
            Regional Director for the Western Pacific, Dr Shin Young-soo.
            "Voluntary blood donors come from all walks of life, but they share
            a common concern for the welfare of others. We thank them for their
            admirable generosity and concern for those in need."
          </em>

          <RiButton text="Donate Now" onClick={gotoSignup} />
        </div>

        <div className="flex-1 mt-10 md:mt-0">
          <div className="w-full h-[400px] bg-red-500 rounded-full rounded-es-none overflow-hidden">
            <Image
              src="/img/blood_donation.jpg"
              alt="blood donation"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className=" mt-20 md:mt-0 bg-red-500 rounded-se-full relative overflow-hidden">
        <div className="w-80 h-80 rounded-full bg-red-400/50 absolute top-5 left-5" />

        <div className="relative container py-10 md:flex justify-between items-center gap-10">
          <div className="text-white">
            <h2 className="text-xl md:text-2xl">
              We are helping people from 10 years
            </h2>
            <p className="text-sm mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              Animi magnam autem consectetur dolor. In laudantium corporis
              fugiat est sint officiis.
            </p>
          </div>
          <RiButton
            text="Donate Now"
            onClick={gotoSignup}
            className="mr-20 mt-5 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
