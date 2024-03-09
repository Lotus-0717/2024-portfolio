"use client";

import data from "../../../data.json";
import { X, SquareArrowOutUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@components/Button";
import { useState } from "react";
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
  const [isVideo, setIsVideo] = useState(true);
  const clickHandler = (bool: boolean) => {
    setIsVideo(bool);
  };
  return (
    <div className="fixed z-10 h-screen w-full bg-black/30 backdrop-blur">
      <div className="h-screen w-full overflow-auto">
        <div className=" min-h-screen bg-white/80 p-5 md:ml-[50%] md:w-1/2">
          <div className="flex justify-end md:justify-start">
            <X
              className=" cursor-pointer"
              size={36}
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
          <article className="mt-1">
            {!caseinfo.video || (caseinfo.video && !isVideo) ? (
              <Slider {...settings} className="work-slider">
                {caseinfo.img.map((item, index) => (
                  <div key={index} className="w-full">
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="m-auto block"
                      src={`/case-img/${caseinfo.name}/${item}.png`}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              ""
            )}

            {caseinfo.video && isVideo ? (
              <div>
                <video
                  className="m-auto"
                  muted={true}
                  autoPlay={true}
                  loop={true}
                >
                  <source
                    src={`/case-img/${caseinfo.name}/video.mp4`}
                    type="video/mp4"
                  />
                </video>
              </div>
            ) : (
              ""
            )}
            {caseinfo.link ? (
              <div className="flex justify-end">
                <a
                  className="relative mt-2 flex w-fit items-center justify-end gap-1 transition-colors hover:before:absolute hover:before:-bottom-1 hover:before:h-px hover:before:w-full hover:before:bg-black hover:before:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:h-px hover:after:w-full hover:after:bg-black hover:after:content-['']"
                  href={caseinfo.link}
                  target="_blank"
                >
                  <p className="text-xl">前往作品網站</p>
                  <SquareArrowOutUpRight size={24} />
                </a>
              </div>
            ) : (
              ""
            )}
            <div className="mt-10">
              <h3 className="text-3xl font-bold uppercase italic md:text-5xl">
                <p>{caseinfo["project-name"]}</p>
              </h3>
            </div>
            <div className="mt-5 flex gap-4">
              {caseinfo.video ? (
                <>
                  <Button
                    isActive={isVideo}
                    clickHandler={() => {
                      clickHandler(true);
                    }}
                    className={`${isVideo ? "-active" : ""}`}
                  >
                    影片展示
                  </Button>
                  <Button
                    isActive={!isVideo}
                    clickHandler={() => {
                      clickHandler(false);
                    }}
                    className={`${!isVideo ? "-active" : ""}`}
                  >
                    圖片展示
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
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
