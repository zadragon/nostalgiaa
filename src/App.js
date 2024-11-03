import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function App() {
  const [showing, setShowing] = useState(false);
  const [showing2, setShowing2] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  const toggleShowing2 = () => setShowing2((prev) => !prev);

  const [album1, setAlbum1] = useState(false);
  const [album2, setAlbum2] = useState(false);
  const toggleAlbum1 = () => setAlbum1((prev) => !prev);
  const toggleAlbum2 = () => setAlbum2((prev) => !prev);

  useEffect(() => {
    const header = document.querySelector(".header");
    header.addEventListener("mousemove", (e) => {
      const xRelativeToHeader = e.clientX / header.clientWidth;
      const yRelativeToHeader = e.clientY / header.clientHeight;

      document.querySelector(".header__title").style.transform = `translate(${xRelativeToHeader * -50}px, ${yRelativeToHeader * -50}px)`;

      document.querySelector("#circle-1").style.transform = `translate(${xRelativeToHeader * -25}px, ${yRelativeToHeader * -25}px)`;
      document.querySelector("#circle-2").style.transform = `translate(${xRelativeToHeader * 25}px, ${yRelativeToHeader * 25}px)`;

      document.querySelector("#cube__image_1").style.transform = `translate(${xRelativeToHeader * -15}px, ${yRelativeToHeader * -15}px)`;
      document.querySelector("#cube__image_2").style.transform = `translate(${xRelativeToHeader * -8}px, ${yRelativeToHeader * -8}px)`;
      document.querySelector("#cube__image_3").style.transform = `translate(${xRelativeToHeader * -20}px, ${yRelativeToHeader * -20}px)`;
      document.querySelector("#cube__image_4").style.transform = `translate(${xRelativeToHeader * 5}px, ${yRelativeToHeader * 5}px)`;
    });
  }, []);

  useEffect(() => {
    const pictures = document.querySelectorAll(".picture");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    pictures.forEach((picture) => observer.observe(picture));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <div>
        <section className="header">
          <span className="circle" id="circle-1"></span>
          <span className="circle" id="circle-2"></span>
          <img id="cube__image_1" src="./images/common/cube.png" alt="cube image1" className="cube__image" />
          <img id="cube__image_2" src="./images/common/cube.png" alt="cube image2" className="cube__image" />
          <img id="cube__image_3" src="./images/common/cube.png" alt="cube image3" className="cube__image" />
          <img id="cube__image_4" src="./images/common/cube.png" alt="cube image4" className="cube__image" />
          <h1 className="header__title">
            <Svg version="1.0" viewBox="0 0 3969.000000 1338.000000">
              <g transform="translate(0.000000,1338.000000) scale(0.100000,-0.100000)" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)">
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    stroke: { duration: 2, ease: "easeInOut" },
                  }}
                  d="M27780 10000 c-242 -31 -434 -182 -512 -402 -19 -53 -22 -84 -23
-203 0 -121 3 -149 23 -207 63 -182 206 -309 417 -370 118 -34 298 -32 410 5
255 84 400 269 412 527 6 129 -12 223 -62 324 -47 94 -100 154 -190 215 -90
60 -155 85 -272 105 -94 17 -116 18 -203 6z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M21250 7290 l0 -2360 540 0 540 0 0 2360 0 2360 -540 0 -540 0 0
-2360z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M15130 9295 c-190 -18 -411 -38 -492 -45 l-148 -13 0 -348 0 -349
-240 0 -240 0 0 -455 0 -455 238 -2 237 -3 5 -855 c5 -759 8 -865 23 -945 57
-291 143 -470 302 -631 163 -163 338 -248 621 -300 147 -27 572 -26 777 3 81
11 151 23 154 27 7 6 -11 598 -24 782 l-5 91 -77 -14 c-42 -7 -139 -14 -216
-14 -118 -1 -151 2 -210 21 -180 56 -265 160 -286 347 -5 51 -8 381 -7 788 l3
700 383 3 382 2 0 455 0 455 -385 0 -385 0 0 395 0 395 -32 -1 c-18 -1 -188
-16 -378 -34z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M7935 8690 c-305 -35 -614 -140 -863 -294 -343 -213 -607 -546 -739
-931 -68 -201 -101 -390 -110 -630 -19 -551 137 -1025 459 -1394 246 -282 635
-501 1039 -585 273 -57 581 -61 842 -12 331 63 659 211 886 400 438 365 663
874 663 1496 0 572 -167 1025 -509 1381 -166 173 -390 325 -617 418 -261 107
-477 151 -771 156 -110 2 -236 0 -280 -5z m490 -1039 c44 -11 121 -41 170 -65
284 -141 434 -404 452 -791 18 -397 -159 -715 -483 -871 -281 -134 -630 -114
-888 53 -246 159 -371 398 -383 731 -12 312 68 537 256 722 126 123 276 204
436 234 115 22 335 15 440 -13z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M11875 8659 c-201 -20 -434 -79 -589 -148 -231 -104 -447 -304 -551
-511 -104 -208 -151 -475 -126 -713 44 -408 273 -687 701 -858 211 -84 509
-142 785 -154 328 -14 454 -64 485 -193 15 -67 2 -109 -50 -156 -88 -79 -194
-110 -385 -110 -142 0 -230 17 -324 60 -109 50 -183 134 -199 225 l-8 44 -533
5 -534 5 7 -103 c31 -472 248 -822 637 -1026 168 -88 352 -141 591 -172 168
-21 590 -15 738 10 271 48 475 123 655 242 241 159 386 376 452 676 22 103 25
418 5 513 -50 230 -136 391 -291 545 -168 167 -385 281 -672 354 -171 43 -317
64 -546 76 -346 18 -446 67 -444 217 0 72 31 124 96 167 93 61 203 80 386 66
136 -11 181 -21 249 -55 83 -42 132 -108 145 -198 l7 -47 510 0 510 0 -7 83
c-17 202 -55 340 -137 498 -147 283 -418 490 -778 593 -214 62 -548 90 -785
65z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M18333 8625 c-137 -16 -338 -65 -458 -113 -553 -217 -912 -704 -1012
-1368 -26 -176 -24 -523 5 -699 54 -335 153 -595 323 -851 94 -141 293 -343
428 -432 182 -122 411 -213 637 -253 143 -26 461 -32 584 -11 260 44 473 148
635 312 64 65 87 82 84 63 -1 -5 -1 -83 0 -175 l1 -168 525 0 525 0 0 1825 0
1825 -525 0 -525 0 -1 -172 c-1 -95 -1 -179 0 -185 3 -22 -5 -16 -76 58 -176
184 -404 302 -663 344 -114 18 -329 18 -487 0z m612 -995 c218 -69 392 -215
498 -420 78 -150 108 -273 108 -443 -1 -334 -179 -631 -466 -777 -112 -57
-200 -80 -330 -87 -349 -17 -651 177 -775 499 -55 142 -73 251 -67 418 6 177
27 264 96 405 104 211 266 349 473 404 109 29 112 30 258 26 106 -2 150 -7
205 -25z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M30555 8633 c-122 -10 -314 -50 -430 -88 -625 -205 -1016 -710 -1117
-1445 -18 -133 -15 -465 6 -615 36 -258 98 -461 207 -680 264 -532 720 -846
1329 -916 121 -14 354 -6 471 15 247 45 453 149 611 309 l78 78 0 -180 0 -181
530 0 530 0 0 1825 0 1825 -530 0 -530 0 0 -187 0 -187 -72 75 c-181 188 -400
301 -668 344 -87 14 -301 18 -415 8z m464 -983 c136 -23 296 -107 413 -218
263 -250 348 -680 201 -1017 -105 -239 -307 -417 -550 -487 -107 -31 -312 -31
-423 0 -161 44 -309 138 -406 260 -62 78 -139 239 -166 347 -33 131 -32 373 1
494 62 233 176 400 345 510 69 46 200 97 279 110 74 12 231 13 306 1z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M34915 8634 c-16 -2 -73 -9 -125 -15 -108 -12 -291 -57 -395 -96
-494 -185 -850 -596 -990 -1141 -118 -461 -85 -998 88 -1427 208 -516 607
-881 1105 -1011 167 -43 292 -58 487 -58 146 0 201 4 291 22 257 51 438 144
602 309 l72 73 0 -180 0 -180 530 0 530 0 0 1825 0 1825 -530 0 -530 0 0 -185
0 -185 -87 88 c-160 161 -350 263 -590 318 -66 15 -389 28 -458 18z m482 -994
c305 -73 546 -320 623 -641 44 -185 35 -364 -30 -540 -41 -113 -96 -202 -181
-293 -199 -213 -464 -301 -754 -251 -268 47 -482 228 -585 497 -51 132 -63
206 -63 378 0 136 3 167 26 253 86 320 301 536 602 602 94 21 266 18 362 -5z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M4175 8623 c-350 -43 -606 -151 -785 -333 l-70 -71 0 181 0 180 -535
0 -535 0 0 -1825 0 -1825 565 0 564 0 3 1073 3 1072 27 76 c50 143 136 266
239 344 171 128 379 182 544 140 208 -53 350 -206 417 -450 l23 -80 3 -1087 3
-1088 540 0 540 0 -4 1173 c-4 1260 -4 1255 -58 1501 -130 596 -463 926 -1019
1011 -86 14 -381 19 -465 8z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M24310 8604 c-567 -80 -989 -377 -1240 -872 -138 -274 -207 -566
-217 -927 -27 -976 462 -1653 1317 -1820 378 -73 734 -52 1004 61 119 50 206
106 294 189 44 41 83 75 87 75 14 0 -4 -283 -24 -375 -84 -401 -344 -628 -756
-660 -218 -17 -474 62 -602 187 -48 47 -88 117 -98 171 l-7 37 -556 0 -555 0
6 -99 c16 -241 114 -480 281 -687 303 -376 845 -619 1431 -641 610 -23 1163
194 1506 590 255 295 399 678 428 1148 7 103 11 801 11 1882 l0 1717 -530 0
-530 0 0 -175 c0 -96 -2 -175 -4 -175 -3 0 -40 35 -83 78 -155 154 -323 238
-573 288 -120 23 -450 28 -590 8z m635 -1024 c284 -88 503 -324 582 -628 20
-77 25 -122 26 -222 1 -148 -16 -225 -74 -348 -93 -194 -286 -342 -529 -406
-101 -27 -298 -32 -400 -12 -303 62 -518 245 -599 511 -66 213 -44 464 58 680
110 232 297 383 541 436 113 25 293 20 395 -11z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M27340 6755 l0 -1825 540 0 540 0 0 1825 0 1825 -540 0 -540 0 0
-1825z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M14098 1654 c-5 -4 -8 -207 -8 -451 l0 -443 65 0 65 0 0 385 0 385
103 0 c56 0 118 -5 137 -10 104 -29 150 -180 78 -257 -37 -41 -79 -53 -178
-53 l-90 0 0 -33 c0 -28 24 -62 160 -225 l160 -192 81 0 81 0 -30 38 c-17 20
-78 93 -136 162 -58 69 -106 128 -106 133 0 4 7 7 15 7 31 0 114 50 144 87 45
54 64 122 59 202 -8 110 -59 188 -154 236 -57 29 -61 29 -249 33 -104 2 -193
1 -197 -4z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M19718 1649 c-66 -15 -160 -69 -214 -123 -220 -221 -158 -594 123
-733 69 -34 85 -38 174 -41 125 -5 210 18 296 82 302 222 223 696 -136 806
-67 21 -176 25 -243 9z m210 -134 c30 -9 75 -34 105 -58 145 -119 163 -330 39
-468 -66 -73 -144 -109 -239 -109 -133 0 -238 64 -300 182 -37 73 -40 197 -5
274 67 149 241 226 400 179z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M21430 1211 l0 -451 60 0 60 0 0 386 0 386 123 -4 c138 -4 172 -16
206 -71 50 -82 29 -182 -48 -225 -32 -18 -55 -22 -135 -22 l-96 0 0 -31 c0
-25 30 -67 161 -225 l161 -194 80 0 c61 0 77 3 72 13 -5 6 -66 81 -137 165
-71 84 -128 154 -126 156 2 1 22 8 44 14 99 28 175 137 175 248 0 127 -54 220
-157 271 -55 27 -63 28 -250 31 l-193 4 0 -451z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M15820 1205 l0 -445 270 0 270 0 0 65 0 65 -205 0 -205 0 0 130 0
130 200 0 200 0 0 65 0 65 -200 0 -200 0 0 125 0 125 205 0 205 0 0 60 0 60
-270 0 -270 0 0 -445z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M17758 1631 c-201 -66 -316 -238 -306 -455 6 -117 42 -200 124 -286
84 -88 160 -123 279 -128 115 -5 179 12 266 71 70 46 135 132 162 211 l16 46
-63 0 -62 0 -17 -39 c-23 -52 -86 -113 -145 -142 -37 -19 -64 -23 -127 -23
-103 -1 -168 27 -230 96 -63 70 -88 143 -83 238 6 92 36 157 103 219 67 61
124 84 211 84 116 -1 210 -57 260 -155 l24 -48 60 0 c44 0 60 4 60 14 0 7 -16
45 -35 84 -45 90 -130 171 -212 203 -81 31 -208 36 -285 10z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M23158 1206 l2 -446 174 0 c194 0 252 8 337 46 98 44 187 155 218
272 30 110 7 274 -52 375 -38 64 -127 142 -195 168 -52 21 -77 23 -272 27
l-215 4 3 -446z m362 313 c121 -19 202 -89 240 -210 42 -131 9 -264 -87 -349
-63 -55 -119 -70 -270 -70 l-123 0 0 313 c0 173 3 317 7 320 10 11 160 8 233
-4z"
                />
                <motion.path
                  variants={svg}
                  initial="start"
                  animate="end"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                  d="M25205 1637 c-175 -58 -252 -209 -180 -354 42 -85 119 -121 299 -143
138 -17 186 -46 186 -115 0 -131 -231 -194 -344 -94 -19 16 -38 43 -41 60 -7
30 -7 30 -68 27 l-62 -3 3 -33 c3 -47 35 -103 78 -142 173 -152 487 -86 550
114 15 49 16 65 6 113 -24 115 -107 171 -292 198 -133 20 -165 30 -190 62 -24
31 -27 99 -4 131 28 40 92 66 164 66 79 0 135 -24 162 -71 19 -31 23 -33 79
-33 68 0 71 7 40 75 -23 51 -72 99 -130 127 -56 27 -194 35 -256 15z"
                />
              </g>
            </Svg>
          </h1>
        </section>

        <section className="artistArea">
          <h2>ARTIST</h2>
          <div class="video-container">
            {/* <video autoplay muted loop playsinline>
              <source src="./bg.mp4" type="video/mp4" />
            </video> */}
            <div class="content">
              <div className="artistWrap">
                <div className="person">
                  <div className="picture" onClick={toggleShowing}>
                    <img src="./images/dane/dane_profile.jpg" alt="dan" />
                  </div>
                  <h3>Dane</h3>
                  <p>
                    <span onClick={toggleAlbum1}>album</span> | <span onClick={toggleShowing}>pictures</span>
                  </p>
                </div>

                <div className="person">
                  <div className="picture" onClick={toggleShowing2}>
                    <img src="./images/riaan/riaan_profile.jpg" alt="riaan" />
                  </div>
                  <h3>Riaan</h3>
                  <p>
                    <span onClick={toggleAlbum2}>album</span> | <span onClick={toggleShowing2}>pictures</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnimatePresence>
          {showing ? (
            <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
              <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="btn-close" onClick={toggleShowing}>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                ></path>
              </svg>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="./images/dane/dane_01.png" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/dane/dane_02.png" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/dane/dane_03.png" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/dane/dane_04.png" alt="01" />
                </SwiperSlide>
              </Swiper>
            </Box>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {album1 ? (
            <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
              <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="btn-close" onClick={toggleAlbum1}>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                ></path>
              </svg>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="myAlum1"
              >
                <SwiperSlide>
                  <img src="./images/dane/dane_album.png" alt="01" />
                  <p className="ablumName">Selfie</p>
                </SwiperSlide>
              </Swiper>
            </Box>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {showing2 ? (
            <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
              <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="btn-close" onClick={toggleShowing2}>
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                ></path>
              </svg>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="./images/riaan/riaan01.jpg" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/riaan/riaan02.jpg" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/riaan/riaan03.jpg" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="./images/riaan/riaan04.jpg" alt="01" />
                </SwiperSlide>
              </Swiper>
            </Box>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {album2 ? (
            <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
              <svg
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="btn-close"
                stroke="white"
                stroke-width="1.5"
                onClick={toggleAlbum2}
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                ></path>
              </svg>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="myAlum1"
              >
                <SwiperSlide>
                  <img src="./images/riaan/riaan_album.png" alt="01" />
                  <p className="ablumName">Treat Me Better</p>
                </SwiperSlide>
              </Swiper>
            </Box>
          ) : null}
        </AnimatePresence>

        <section className="company">
          <div>
            <img src="./images/common/logo.png" alt="nostelgia" />
          </div>
          <article>
            Nostalgiaa Records는, 15년간 K-POP 프로듀서로 활동하며 글로벌 스타 ‘JACKSON WANG’의 솔로 커리어,
            <br />
            그리고 그의 레이블 ‘TEAM WANG’의 런칭과 성장을 함께 한 프로듀서 ‘BOYTOY’ 의 프로듀싱 노하우와 인프라를
            <br />
            바탕으로 새로운 글로벌 아티스트를 양성하여 아시아 최고의 음악 레이블을 목표하고 있습니다.
          </article>
        </section>
        <footer>
          <p>© Nostalgiaa Records. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

const Svg = styled.svg`
  path {
    stroke: rgba(0, 0, 0, 1);
    stroke-width: 20;
  }
`;

const svg = {
  start: {
    pathLength: 0,
    stroke: "rgba(255, 255, 255, 0)", // 선을 흰색으로 유지
    fill: "rgba(255, 255, 255, 0)", // 채우기는 투명
  },
  end: {
    pathLength: 1,
    stroke: "rgba(0, 0, 0, 1)", // 선을 흰색으로 유지
    fill: "rgba(0, 0, 0, 1)", // 채우기는 투명
  },
};

const Box = styled(motion.div)`
  width: 80vw;
  height: 90vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 25px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 100;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  box-shadow: 4px 4px 0 #ff5722, /* 빨간 그림자 */ 8px 8px 0 #009688, /* 초록색 그림자 */ 12px 12px 0 #673ab7, /* 보라색 그림자 */ 16px 16px 0 #3f51b5; /* 파란색 그림자 */
  .swiper-slide {
    display: flex;
    justify-content: center; /* 수평 중앙 */
    height: 100vh; /* 필요에 따라 설정 */
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

const boxVariants = {
  initial: {
    opacity: 0,

    y: 100,
  },
  visible: {
    opacity: 1,

    y: 0,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};
export default App;
