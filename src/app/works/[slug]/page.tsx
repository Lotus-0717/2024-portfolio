"use client";

import Image from "next/image";
import data from "../../../data.json";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

register();
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default function Post({ params }: any) {
  const index = params.slug;
  const caseinfo = data[index];
  const router = useRouter();
  const swiperElRef = useRef(null);

  return (
    <div className="fixed h-screen w-full bg-black/30 backdrop-blur">
      <div className="h-screen w-full overflow-auto px-5 py-10">
        <div className="m-auto max-w-screen-lg rounded-xl bg-white/80 p-5">
          <div className="flex justify-end">
            <X
              className=" cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <article className="mt-1">
            <swiper-container
              ref={swiperElRef}
              slides-per-view="1"
              pagination={{ clickable: true }}
            >
              {caseinfo.img.map((item, index) => (
                <swiper-slide key={index}>
                  <Image
                    className="m-auto"
                    src={`/case-img/${caseinfo.name}/${item}.jpg`}
                    alt=""
                    width={600}
                    height={600}
                  ></Image>
                </swiper-slide>
              ))}
            </swiper-container>
            <h3 className="mt-10 text-center text-3xl font-bold uppercase">
              {caseinfo.link ? (
                <a href={caseinfo.link} target="_blank" className=" underline">
                  {caseinfo.name}
                </a>
              ) : (
                <p>{caseinfo.name}</p>
              )}
            </h3>
            <div className="mt-5 pl-5 text-xl">
              {Array.isArray(caseinfo.description) ? (
                <ul>
                  {caseinfo.description.map((item, index) => (
                    <li
                      className=" relative mb-2 before:absolute before:-left-4 before:top-3 before:block before:h-1 before:w-2 before:bg-black before:font-bold before:content-['']"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{caseinfo.description}</p>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
