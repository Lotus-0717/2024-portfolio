"use client";

import data from "../../../data.json";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Post({ params }: any) {
  const index = params.slug;
  const caseinfo = data[index];
  const router = useRouter();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="fixed z-10 h-screen w-full bg-black/30 backdrop-blur">
      <div className="h-screen w-full overflow-auto px-5 py-10">
        <div className="m-auto max-w-screen-lg rounded-xl bg-white/80 p-5">
          <div className="flex justify-end">
            <X
              className=" cursor-pointer"
              size={36}
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <article className="mt-1">
            <Slider {...settings} className="work-slider">
              {caseinfo.video ? (
                <div>
                  <video className="m-auto" muted={true} autoPlay={true}>
                    <source
                      src={`/case-img/${caseinfo.name}/video.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                ""
              )}
              {caseinfo.img.map((item, index) => (
                <div key={index}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/case-img/${caseinfo.name}/${item}.png`}
                    className="m-auto"
                    alt=""
                  />
                </div>
              ))}
            </Slider>
            <h3 className="mt-10 text-5xl font-bold uppercase italic">
              {caseinfo.link ? (
                <a href={caseinfo.link} target="_blank">
                  {caseinfo["project-name"]}
                </a>
              ) : (
                <p>{caseinfo["project-name"]}</p>
              )}
            </h3>
            <div className="mt-5 pl-5 text-xl">
              {Array.isArray(caseinfo.description) ? (
                <ul>
                  {caseinfo.description.map((item, index) => (
                    <li
                      className=" relative mb-2 before:absolute before:-left-4 before:top-[14px] before:block before:h-[3px] before:w-2 before:bg-black before:font-bold before:content-['']"
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
