import React, { useState } from "react";
import { useCountdown } from "../utils/useCountdown";

import Congratulation from "./Congratulation";
import UiCountdown from "./UiCountdown";
import Gallery from "./Gallery";

import ImgHeroAyah from "../assets/hero-ayah.jpg";
import ImgHeroIbuk from "../assets/hero-ibuk.jpg";
import ImgHeroAlfarizi from "../assets/hero-alfarizi.jpeg";

const Home = () => {
  const [isBtnFinishingDate, setIsBtnFinishDate] = useState(false);

  // Januari: 0; Februari: 1; Maret: 2, dst.
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(2023, 1, 22, 5, 30)
  );
  // const [days, hours, minutes, seconds] = useCountdown(
  //   new Date(2023, 1, 14, 14, 21)
  // );

  const isFinish = days + hours + minutes + seconds <= 0;

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-primary-600 to-tertiary-700 transition-all">
      {!isFinish && !isBtnFinishingDate ? (
        <div>
          <UiCountdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          {/* This button only use for testing */}
          {/* <button
            onClick={() => {
              setIsBtnFinishDate(true);
            }}
            className="rounded bg-white p-1 hover:bg-slate-200">
            Finish Date
          </button> */}
        </div>
      ) : (
        <div>
          <Congratulation />
          <div className="bg-primary-500 py-5 px-8 text-center font-shadow-into-ligth text-4xl text-slate-300 sm:px-16 md:px-24 lg:px-36">
            Ucapan
          </div>
          {/* All the Greeting */}
          <div className="flex flex-col justify-around gap-10 bg-primary-600 py-8 px-8 sm:px-16 md:px-24 lg:px-36">
            {/* Ayah */}
            <div className="rounded-lg border-[2px] border-quaternary-500 p-3">
              <div className={`flex flex-col items-center justify-between`}>
                <img
                  src={ImgHeroAyah}
                  alt="hero-ayah"
                  width={110}
                  className="m-3 rounded-full"
                />
                <div className="flex flex-col gap-2 p-3 text-slate-300">
                  <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl">
                    Hari ini adalah hari yang luar biasa untukmu. Jangan lupa
                    untuk tersenyum seperti mentari yang bersinar.
                  </p>
                  <p>
                    Selamat ulang tahun anakku. Sekarang kamu sudah menjadi
                    remaja di hari yang penting ini. Harapan utama ayah, yakni
                    agar adik tidak berhenti percaya pada diri sendiri. Adik
                    memiliki begitu banyak potensi yang perlu dikembangkan dan
                    ditekuni. Tetap percaya pada diri sendiri, oke?
                  </p>
                  <p>
                    Di usiamu yang sekarang ini akan menjadi sebuah awal dari
                    banyak kesempatan dan pengalaman hidup di masa datang.
                  </p>
                  <p>
                    Akhirnya, ayah mengucapkan selamat ulang tahun yang ke-16
                    anakku. Semoga tetap tersenyum dan bahagia, dan selalu ayah
                    doakan:
                    <ol className="mx-4 list-decimal">
                      <li>Menjadi anak yang sholehah</li>
                      <li>Tetap rendah hati</li>
                      <li>Tetap dan semakin percaya diri</li>
                      <li>Selalu sayang sama ayah, ibuk, dan mas</li>
                      <li>Selalu dilindungi Allah di siang dan malam</li>
                    </ol>
                  </p>
                  <figcaption class="pt-4 font-medium">
                    <div class="text-sky-400">Ayah</div>
                  </figcaption>
                </div>
              </div>
            </div>

            {/* Ibuk */}
            <div className="rounded-lg border-[2px] border-quaternary-500 p-3">
              <div className={`flex flex-col items-center justify-between`}>
                <img
                  src={ImgHeroIbuk}
                  alt="hero-ibuk"
                  width={110}
                  className="m-3 rounded-full"
                />
                <div className="flex flex-col gap-2 p-3 text-slate-300">
                  <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl">
                    Barakallah fii umrik yang ke-16 untuk anakku Nadia Chelsia
                    Zarin. Ayah, ibuk, mas, kakung, dan uti sayang banget dengan
                    adik.
                  </p>
                  <p>
                    Semoga Allah SWT selalu menjaga dan melindungi siang dan
                    malam. Semoga adek selalu diberi kesehatan, kelancaran dalam
                    menuntut ilmu yang berkah dan barokah, sayang ke ayah ibuk
                    mas uti dan kakung, tercapai harapan dan cita-cita nya, dan
                    semoga menjadi anak yang sukses dan sholehah.
                  </p>
                  <p>
                    Semoga Allah selalu memuliakan adek, semoga adek dijauhkan
                    dari perbuatan yang buruk, dan dijauhkan dari godaan syetan.
                    Semoga adek mendapatkan sekolah yang terbaik buat adek.
                    Tetap istiqomah dalam menghafal Al-Quran.
                  </p>
                  <p>
                    Adek.... Ibuk yakin kalau adek pemberani dan bisa tidur
                    sendiri tanpa harus ditemani. Coba dan cobalah dek sampai
                    adek bisa.
                  </p>
                  <figcaption class="pt-4 font-medium">
                    <div class="text-sky-400">Ibuk</div>
                  </figcaption>
                </div>
              </div>
            </div>

            {/* Mas */}
            <div className="rounded-lg border-[2px] border-quaternary-500 p-3">
              <div className={`flex flex-col items-center justify-between`}>
                <img
                  src={ImgHeroAlfarizi}
                  alt="hero-alfarizi"
                  width={110}
                  className="m-3 rounded-full"
                />
                <div className="flex flex-col gap-2 p-3 text-slate-300">
                  <p className="first-letter:float-left first-letter:mr-2 first-letter:text-5xl">
                    Halo dek. Selamat ulang tahun yang ke-16 yaa dek. Semoga
                    diberi umur yang panjang, kesehatan selalu, kelancaran dalam
                    menjalankan segala urusan dan kegiatan. Selalu sayang ke
                    ayah, ibuk, kakung, dan uti.
                  </p>
                  <p>
                    Semoga adek selalu dilindungi Allah dan diberi kesuksesan di
                    dunia dan di akhirat. Aamiin.
                  </p>
                  <p>
                    Mas yakin kalau adik nantinya berani tidur sendiri. Tetap
                    semangat yaa dek...
                  </p>
                  <figcaption class="pt-4 font-medium">
                    <div class="text-sky-400">Mas</div>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-primary-500 py-5 px-8 text-center font-shadow-into-ligth text-4xl text-slate-300 sm:px-16 md:px-24 lg:px-36">
            Gallery
          </div>
          <div className="flex flex-col justify-around gap-10 bg-primary-600 py-8 px-8 sm:px-16 md:px-24 lg:px-36">
            <Gallery />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
