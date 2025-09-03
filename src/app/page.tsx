import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="text-4xl text-center">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        {/* ✅ Using Next.js <Image /> instead of <img> */}
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/modern-ecommerce-interface.png"
          alt="Ecommerce Interface"
          width={384}
          height={512}
          priority
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            {/* ✅ Escaped quotes so no ESLint error */}
            <p className="text-lg font-medium">
              &quot;Making my Next.js project.&quot;
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Ayesha Irfan</div>
            <div className="text-slate-700 dark:text-slate-500">
              PIAB, Student
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;