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
   const [watch, setWatch] = useState(false);
   const [time, setTime] = useState();
   const [done,setDone] = useState([])

   useEffect(() => {
      const saved = localStorage.getItem('doneTasks');
      setDone(saved ? JSON.parse(saved) : []);
   }, [])


   useEffect(() => {
      setInfo([
         {
            day: 1,
            images: ["/images/oxford/int/1a.jpg", "/images/oxford/int/1b.jpg"],
            book: "Word Skills Intermediate",
            pages: [12, 13],
            instructions: ["1. Read the words and definitions in the Glossary to understand their meaning.", "2. Check the phonetic of each word in the google online dictionary and practice the correct pronunciation.", "3. Read the 'ADVICE FOR READING' and check how the words in the Glossary are used in natural English.", "4. Make a good sentence with each word in the Glossary."]
         },
         {
            day: 2,
            images: ["/images/oxford/int/2a.jpg", "/images/oxford/int/2b.jpg"],
            book: "Word Skills Intermediate",
            pages: [14, 15],
            instructions: ["1. Read the words and definitions in the Glossary to understand their meaning.", "2. Check the phonetic of each word in the google online dictionary and practice the correct pronunciation.", "3. Read the 'ADVICE FOR READING' and check how the words in the Glossary are used in natural English.", "4. Make a good sentence with each word in the Glossary."]
         },
         {
            day: 3,
            images: ["/images/oxford/int/3.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 4,
            images: ["/images/oxford/int/4.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 5,
            images: ["/images/oxford/int/5a.jpg", "/images/oxford/int/5b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 6,
            images: ["/images/oxford/int/6a.jpg", "/images/oxford/int/6b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 7,
            images: ["/images/oxford/int/7.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 8,
            images: ["/images/oxford/int/8a.jpg", "/images/oxford/int/8b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 9,
            images: ["/images/oxford/int/9a.jpg", "/images/oxford/int/9b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 10,
            images: ["/images/oxford/int/10a.jpg", "/images/oxford/int/10b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 11,
            images: ["/images/oxford/int/11a.jpg", "/images/oxford/int/11b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 12,
            images: ["/images/oxford/int/12a.jpg", "/images/oxford/int/12b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 13,
            images: ["/images/oxford/int/13a.jpg", "/images/oxford/int/13b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 14,
            images: ["/images/oxford/int/14a.jpg", "/images/oxford/int/14b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 15,
            images: ["/images/oxford/int/15a.jpg", "/images/oxford/int/15b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 16,
            images: ["/images/oxford/int/16.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 17,
            images: ["/images/oxford/int/17a.jpg", "/images/oxford/int/17b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 18,
            images: ["/images/oxford/int/18a.jpg", "/images/oxford/int/18b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 19,
            images: ["/images/oxford/int/19a.jpg", "/images/oxford/int/19b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 20,
            images: ["/images/oxford/int/20a.jpg", "/images/oxford/int/20b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 21,
            images: ["/images/oxford/int/21a.jpg", "/images/oxford/int/21b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 22,
            images: ["/images/oxford/int/22a.jpg", "/images/oxford/int/22b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 23,
            images: ["/images/oxford/int/23.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 24,
            images: ["/images/oxford/int/24a.jpg", "/images/oxford/int/24b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 25,
            images: ["/images/oxford/int/25a.jpg", "/images/oxford/int/25b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 26,
            images: ["/images/oxford/int/26a.jpg", "/images/oxford/int/26b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 27,
            images: ["/images/oxford/int/27.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 28,
            images: ["/images/oxford/int/28a.jpg", "/images/oxford/int/28b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 29,
            images: ["/images/oxford/int/29a.jpg", "/images/oxford/int/29b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 30,
            images: ["/images/oxford/int/30.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 31,
            images: ["/images/oxford/int/31a.jpg", "/images/oxford/int/31b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 32,
            images: ["/images/oxford/int/32a.jpg", "/images/oxford/int/32b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 33,
            images: ["/images/oxford/int/33a.jpg", "/images/oxford/int/33b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 34,
            images: ["/images/oxford/int/34a.jpg", "/images/oxford/int/34b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 35,
            images: ["/images/oxford/int/35a.jpg", "/images/oxford/int/35b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 36,
            images: ["/images/oxford/int/36.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 37,
            images: ["/images/oxford/int/37.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 38,
            images: ["/images/oxford/int/38.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 39,
            images: ["/images/oxford/int/39.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 40,
            images: ["/images/oxford/int/40a.jpg", "/images/oxford/int/40b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 41,
            images: ["/images/oxford/int/41a.jpg", "/images/oxford/int/41b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 42,
            images: ["/images/oxford/int/42a.jpg", "/images/oxford/int/42b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 43,
            images: ["/images/oxford/int/43a.jpg", "/images/oxford/int/43b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 44,
            images: ["/images/oxford/int/2a.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 45,
            images: ["/images/oxford/int/2a.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 46,
            images: ["/images/oxford/int/2a.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 47,
            images: ["/images/oxford/int/2a.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 48,
            images: ["/images/oxford/int/48a.jpg", "/images/oxford/int/48b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 49,
            images: ["/images/oxford/int/49a.jpg", "/images/oxford/int/49b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 50,
            images: ["/images/oxford/int/50a.jpg", "/images/oxford/int/50b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 51,
            images: ["/images/oxford/int/51a.jpg", "/images/oxford/int/51b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 52,
            images: ["/images/oxford/int/52a.jpg", "/images/oxford/int/52b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 53,
            images: ["/images/oxford/int/53.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 54,
            images: ["/images/oxford/int/54a.jpg", "/images/oxford/int/54b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 55,
            images: ["/images/oxford/int/55a.jpg", "/images/oxford/int/55b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 56,
            images: ["/images/oxford/int/56.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 57,
            images: ["/images/oxford/int/57.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 58,
            images: ["/images/oxford/int/58.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 59,
            images: ["/images/oxford/int/59a.jpg", "/images/oxford/int/59b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 60,
            images: ["/images/oxford/int/60.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 61,
            images: ["/images/oxford/int/61.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 62,
            images: ["/images/oxford/int/62a.jpg", "/images/oxford/int/62b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 63,
            images: ["/images/oxford/int/63a.jpg", "/images/oxford/int/63b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 64,
            images: ["/images/oxford/int/64a.jpg", "/images/oxford/int/64b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 65,
            images: ["/images/oxford/int/65a.jpg", "/images/oxford/int/65b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 66,
            images: ["/images/oxford/int/66a.jpg", "/images/oxford/int/66b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 67,
            images: ["/images/oxford/int/67a.jpg", "/images/oxford/int/67b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 68,
            images: ["/images/oxford/int/68.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 69,
            images: ["/images/oxford/int/69a.jpg", "/images/oxford/int/69b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 70,
            images: ["/images/oxford/int/70a.jpg", "/images/oxford/int/70b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 71,
            images: ["/images/oxford/int/71a.jpg", "/images/oxford/int/71b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 72,
            images: ["/images/oxford/int/72a.jpg", "/images/oxford/int/72b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 73,
            images: ["/images/oxford/int/73a.jpg", "/images/oxford/int/73b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 74,
            images: ["/images/oxford/int/74a.jpg", "/images/oxford/int/74b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 75,
            images: ["/images/oxford/int/75.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 76,
            images: ["/images/oxford/int/76.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 77,
            images: ["/images/oxford/int/77a.jpg", "/images/oxford/int/77b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 78,
            images: ["/images/oxford/int/78a.jpg", "/images/oxford/int/78b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 79,
            images: ["/images/oxford/int/79.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 80,
            images: ["/images/oxford/int/80a.jpg", "/images/oxford/int/80b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 81,
            images: ["/images/oxford/int/81a.jpg", "/images/oxford/int/81b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 82,
            images: ["/images/oxford/int/82a.jpg", "/images/oxford/int/82b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 83,
            images: ["/images/oxford/int/83.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 84,
            images: ["/images/oxford/int/84a.jpg", "/images/oxford/int/84b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 85,
            images: ["/images/oxford/int/85a.jpg", "/images/oxford/int/85b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 86,
            images: ["/images/oxford/int/86a.jpg", "/images/oxford/int/86b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 87,
            images: ["/images/oxford/int/87a.jpg", "/images/oxford/int/87b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 88,
            images: ["/images/oxford/int/88.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 89,
            images: ["/images/oxford/int/89.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 90,
            images: ["/images/oxford/int/90a.jpg", "/images/oxford/int/90b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 91,
            images: ["/images/oxford/int/91.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 92,
            images: ["/images/oxford/int/92.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 93,
            images: ["/images/oxford/int/93a.jpg", "/images/oxford/int/93b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 94,
            images: ["/images/oxford/int/94a.jpg", "/images/oxford/int/94b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 95,
            images: ["/images/oxford/int/95.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 96,
            images: ["/images/oxford/int/96.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 97,
            images: ["/images/oxford/int/97a.jpg", "/images/oxford/int/97b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 98,
            images: ["/images/oxford/int/98.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 99,
            images: ["/images/oxford/int/99a.jpg", "/images/oxford/int/99b.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         },
         {
            day: 100,
            images: ["/images/oxford/int/100.jpg"],
            book: "Word Skills Intermediate",
            pages: [],
            instructions: []
         }
      ])
   }, [])

   function showPic() {
      setWatch(!watch)
   }

   function taskDone(day, index) {
      setDone((prev) => {
         const isTaskDone = prev.some((task) => task.day === day && task.index === index);
         let result;
         if (isTaskDone) {
            // Remove the task from the done list
            result = prev.filter((task) => !(task.day === day && task.index === index));
         } else {
            // Add the task to the done list
            result = [...prev, { day, index }];
         }
         // Save the updated state to localStorage
         localStorage.setItem("doneTasks", JSON.stringify(result));
         return result
      });
   
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

               {
                  info.length > 0 ?
                  <>
                     <div className={styles.picHolder} onClick={showPic}>
                        {
                           info[currentDay - 1]?.images?.map((img, index) => (
                              <div className={styles.picFrame} key={index}>
                                 <Image className={styles.pics}
                                    src={img}
                                    alt="book"
                                    fill
                                 />
                                 <div className={styles.infoLayer}>
                                    <p className={styles.book}>{info[currentDay - 1].book}</p>
                                    <div className={styles.pages}>pages
                                       {
                                          info[currentDay - 1].pages.map((page, index) => (
                                             <div key={index}>{page}</div>
                                          ))
                                       }
                                    </div>
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                     <div className={styles.tasks}>
                        {
                           info[currentDay - 1].instructions.map((task, index) => (
                              <div
                                 className={styles.task}
                                 key={index} 
                                 onClick={() => taskDone(currentDay, index)}
                              >
                                 {task}
                                 {
                                    done.some((task) => task.day === currentDay && task.index === index) ? (
                                       <div className={styles.done}>Done!</div> 
                                    )  : null
                                 }
                              </div>
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
