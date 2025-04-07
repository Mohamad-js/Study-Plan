"use client";
import { useEffect, useState } from "react";
import { useStudyPlan } from "@/context/StudyPlanContext";
import moment from "moment-jalaali";
import DatePicker from "@/components/DatePicker/DatePicker";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import styles from './page.module.css'



const StudyPlan = () => {
   const { startDate, currentDay, setCurrentDay } = useStudyPlan();
   const [persianDate, setPersianDate] = useState("");
   const [info, setInfo] = useState([]);
   const [watch, setWatch] = useState(false)
   const [time, setTime] = useState()

   useEffect(() => {
      setInfo([
         {
            day: 1,
            images: ["/images/oxford/int/1a.jpg", "/images/oxford/int/1b.jpg"],
            book: "Word Skills Intermediate",
            pages: [12, 13],
            instructions: ["Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions.", "Read and learn the words in the Glossary using their definitions."]
         },
         {
            day: 2,
            images: ["/images/oxford/int/2a.jpg", "/images/oxford/int/2b.jpg"],
            book: "Word Skills Intermediate",
            pages: [14, 15],
            instructions: ["instruction 2"]
         }
      ])
   }, [])

   function showPic() {
      setWatch(!watch)
   }



   useEffect(() => {
      const updateDateTime = () => {
         setPersianDate(moment().format("jYYYY/jMM/jDD"));
         const currentTime = moment().format("HH:mm");
         setTime(currentTime);
      }

      updateDateTime();
      const intervalId = setInterval(updateDateTime, 1000)

      return () => clearInterval(intervalId);
   }, []);



   if (!startDate) {
      return (
      <div className={styles.container}>
         <Image className={styles.image}
            src='/images/back/background.jpg'
            fill
            alt='background'
         />
         <div className={styles.layer}>
            <div className={styles.intro}>
               <h1 className={styles.title}>Welcome Fatemeh :)</h1>
               <p className={styles.welcome}>Start Your English Journey Here</p>
            </div>
            <DatePicker /> {/* Render the DatePicker component */}
         </div>
      </div>
      );
   }

   const baseDate = moment(startDate, "jYYYY/jMM/jDD").add(currentDay - 1, "days");
   const displayedDate = baseDate.format("jYYYY/jMM/jDD");

   return (
      <div className={styles.bigMom}>
         <div className={styles.holder}>

            <p className={styles.title}>Today is: {persianDate}</p>

            
               <p className={styles.date}>Instructions for day {currentDay}: {displayedDate}</p>
               <button className={styles.check} onClick={showPic}>Check the Pages</button>
               {
                  info.length > 0 ?
                  <>
                     <div className={styles.picHolder}>
                        {
                           info[currentDay - 1].images.map((img, index) => (
                              <div className={styles.picFrame} key={index}>
                                 <Image className={styles.pics}
                                    src={img}
                                    alt="book"
                                    fill
                                 />
                                 <div className={styles.infoLayer}>
                                    <p className={styles.book}>{info[currentDay - 1].book}</p>
                                    <p className={styles.pages}>pages
                                       {
                                          info[currentDay - 1].pages.map((page, index) => (
                                             <div key={index}>{page}</div>
                                          ))
                                       }
                                    </p>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                     <div className={styles.tasks}>
                        {
                           info[currentDay - 1].instructions.map((task, index) => (
                              <div key={index} className={styles.task}>{task}</div>
                           ))
                        }
                     </div>
                     {
                        watch ?
                        <div className={styles.hiddenPic}>
                           <div className={styles.closeHolder} onClick={showPic}>
                              <IoMdClose className={styles.icon}/> Close
                           </div>
                           {
                              info[currentDay - 1].images.map((img, index) => (
                                 <div className={styles.picFrame2} key={index}>
                                    <Image className={styles.pics2}
                                       src={img}
                                       alt="book"
                                       fill
                                    />
                                 </div>
                              ))
                           }
                        </div>
                        : null
                     }
                  </>
                  : null
               }
            

            <div className={styles.buttonHolder}>
               <button className={styles.btn}
                  disabled={currentDay === 1}
                  onClick={() => setCurrentDay(currentDay - 1)}
               >
                  Previous Day
               </button>
               <button className={styles.btn}
                  disabled={currentDay === 700}
                  onClick={() => setCurrentDay(currentDay + 1)}
               >
                  Next Day
               </button>
            </div>         
         </div>
      </div>
   );
};

export default StudyPlan;
