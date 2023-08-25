import React from "react";
import styles from "./work.module.css";
import projects from "./projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const swiper = new Swiper(".swiper", {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
export default function Work() {
  return (
    <div className={styles.container}>
      <h1>
        My <strong style={{ color: "burlywood" }}>projects</strong>
      </h1>
      <div className={styles.projectsContainer}>
        <div className={styles.swiperContainer}>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay]}
            // autoplay={{
            //   delay: 4000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              el: "#pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00":{
                slidesPerView: 1,
                spaceBetween: 25
              },
              "@0.50":{
                slidesPerView: 1,
                spaceBetween: 25
              },
              "@1.00":{
                slidesPerView: 2,
                spaceBetween: 20
              },
              "@1.25":{
                slidesPerView: 2,
                spaceBetween: 20
              },
              "@1.50":{
                slidesPerView: 3,
                spaceBetween: 10
              },
              "@1.75":{
                slidesPerView: 3,
                spaceBetween: 15
              },
              "@2.00":{
                slidesPerView: 4,
                spaceBetween: 10
              },

              // 576: {
              //  // width: 576,
              //   slidesPerView: 1,
              //   spaceBetween: 100
              // },
              // 768: {
              //   width: 768,
              //   slidesPerView: 2,
              //   spaceBetween: 25
              // },
            }}
            //spaceBetween={50}

            // pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            //onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            {/* <div className={styles.projects}> */}
              {projects?.map((project) => (
                <SwiperSlide key={project.name}>
                  {" "}
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    github={project.github}
                    deploy={project.deploy}
                    image={project.image}
                  />
                </SwiperSlide>
              ))}
            {/* </div>{" "} */}
          </Swiper>
        </div>{" "}
        {/* {console.log(projects)} */}
        <div className={styles.pagination} id="pagination"></div>
      </div>
    </div>
  );
}
