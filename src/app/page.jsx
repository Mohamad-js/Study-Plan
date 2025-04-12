"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import { useStudyPlan } from "@/context/StudyPlanContext";
import moment from "moment-jalaali";
import DatePicker from "@/components/DatePicker/DatePicker";
import Image from "next/image";
import { IoIosArrowRoundBack , IoIosArrowDown  } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import styles from './page.module.css'



const StudyPlan = () => {
   const { startDate, currentDay, setCurrentDay } = useStudyPlan();
   const [persianDate, setPersianDate] = useState("");
   const [info, setInfo] = useState([]);
   const [watch, setWatch] = useState(false);
   const [time, setTime] = useState();
   const [done,setDone] = useState([])
   const [expand, setExpand] = useState([])
   const [note, setNote] = useState('')
   const [allNotes, setAllNotes] = useState([])
   const [menu,setMenu] = useState(false)
   const [warning,setWarning] = useState(false)
   const [delNotes, setDelNotes] = useState(false)
   const optionRef = useRef(null)

   useEffect(() => {

   }, [])


   useEffect(() => {
      document.addEventListener('click', closeOption)

      const savedTasks = localStorage.getItem('doneTasks');
      setDone(savedTasks ? JSON.parse(savedTasks) : []);

      const savedNotes = localStorage.getItem('notes');
      setAllNotes(savedNotes ? JSON.parse(savedNotes) : []);

      setInfo([
         {
            day: 1,
            images: ["../images/oxford/int/1a.jpg", "../images/oxford/int/1b.jpg"],
            book: "Word Skills Intermediate",
            pages: [12, 13],
            instructions: [
               {
                  title: 'Learning The Glossary (p 12)',

                  todo:'Read the wordsو definitions and the synonyms & antonyms (if any) in the Glossary and try to understand their meaning without using English-Persian dictioanry. But you can use Google Online Dictionary any time you like.',

                  extra: ''
               },
               {
                  title: 'Learning Pronunciation (p 12)',

                  todo:'Check the British phonetic & pronunciation of each word in the Google Online Dictionary. Then try to repeat the correct British pronunciation 3 times. If you need more help with the British accent, check the "ACCENT" page of the app.',
                  extra: ''
               },
               {
                  title: 'Word Comprehension (p 12)',
                  todo:'Read the "ADVICE FOR READING" and check how the words in the Glossary are used in natural English. If you forget the meaning of the words while you read, check the meaning back in the glossary. Use Google Online Dictionary for the unknown words in the text.',
                  extra: ''
               },
               {
                  title: 'Using The Vocabularies (p 12)',
                  todo:'Make a good sentence with each word in the Glossary (page 12). If you have difficulty understading what to write, check the examples of the word in English-Englsih dictionary. But try not to copy the exmaple. Instead, try to find an idea by reading the examples.',
                  extra: ''
               },
               {
                  title: 'Learning The Vocabularies (p 13)',
                  todo:'Read the wordsو definitions and the synonyms & antonyms (if any) in the Glossary and try to understand their meaning without using English-Persian dictioanry. But you can use English-English dictionary any time yu like.',
                  extra: ''
               },
               {
                  title: 'Learning Pronunciation (p 13)',
                  todo:'Check the British phonetic & pronunciation of each word in the google online dictionary. Then try to repeat the correct British pronunciation aloud 3 times. If you need more help with the British accent, check the "ACCENT" page of the app.',
                  extra: ''
               },
               {
                  title: 'Word Comprehension (p 13)',
                  todo:'Read the text (page 13) and check how the words in the Glossary are used in natural English. If you forget the meaning of the words while you read, check the meaning back in the glossary. Use English-English dictionary for the unknown words in the text.',
                  extra: ''
               },
               {
                  title: 'Using The Vocabularies (p 13)',
                  todo:'Make a good sentence with each word in the Glossary. If you have difficulty understading what to write, check the examples of the word in English-Englsih dictionary. But try not to copy the exmaple. Instead, try to find an idea by reading the examples.',
                  extra: ''
               },
               {
                  title: 'SPOTLIGHT (p 13)',
                  todo:'Read the spotlight and check the difference between conversation, discussion and argument. Then check the definition and examples for each word in English-English dictionary to better understand their differences.',
                  extra: ''
               },
               {
                  title: 'Practicing British Accent',
                  todo: 'Practice reading the text in pages 12 & 13 in British accent. When you feel you are ready, read each text again aloud and record your voice. Then send your recordings to the teacher before the end of the day to check your mistakes and weaknesses.',
                  extra: ''
               }
            ],
         },
         {
            day: 2,
            images: ["../images/oxford/int/2a.jpg", "../images/oxford/int/2b.jpg"],
            book: "Word Skills Intermediate",
            pages: [14, 15],
            instructions: [
               {
                  title: 'Learning The Vocabularies',
                  todo:'Read the words and definitions in the Glossary to understand their meaning.',
               },
               {
                  title: 'Learning Pronunciation',
                  todo:'Check the phonetic of each word in the google online dictionary and practice the correct pronunciation.',
               },
               {
                  title: 'Word Comprehension',
                  todo:'Read the "ADVICE FOR READING" and check how the words in the Glossary are used in natural English.',
               },
               {
                  title: 'Using The Vocabularies',
                  todo:'Make a good sentence with each word in the Glossary.',
               },
            ],
         },
         // {
         //    day: 3,
         //    images: ["../images/oxford/int/3.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 4,
         //    images: ["../images/oxford/int/4.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 5,
         //    images: ["../images/oxford/int/5a.jpg", "../images/oxford/int/5b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 6,
         //    images: ["../images/oxford/int/6a.jpg", "../images/oxford/int/6b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 7,
         //    images: ["../images/oxford/int/7.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 8,
         //    images: ["../images/oxford/int/8a.jpg", "../images/oxford/int/8b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 9,
         //    images: ["../images/oxford/int/9a.jpg", "../images/oxford/int/9b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 10,
         //    images: ["../images/oxford/int/10a.jpg", "../images/oxford/int/10b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 11,
         //    images: ["../images/oxford/int/11a.jpg", "../images/oxford/int/11b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 12,
         //    images: ["../images/oxford/int/12a.jpg", "../images/oxford/int/12b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 13,
         //    images: ["../images/oxford/int/13a.jpg", "../images/oxford/int/13b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 14,
         //    images: ["../images/oxford/int/14a.jpg", "../images/oxford/int/14b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 15,
         //    images: ["../images/oxford/int/15a.jpg", "../images/oxford/int/15b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 16,
         //    images: ["../images/oxford/int/16.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 17,
         //    images: ["../images/oxford/int/17a.jpg", "../images/oxford/int/17b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 18,
         //    images: ["../images/oxford/int/18a.jpg", "../images/oxford/int/18b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 19,
         //    images: ["../images/oxford/int/19a.jpg", "../images/oxford/int/19b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 20,
         //    images: ["../images/oxford/int/20a.jpg", "../images/oxford/int/20b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 21,
         //    images: ["../images/oxford/int/21a.jpg", "../images/oxford/int/21b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 22,
         //    images: ["../images/oxford/int/22a.jpg", "../images/oxford/int/22b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 23,
         //    images: ["../images/oxford/int/23.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 24,
         //    images: ["../images/oxford/int/24a.jpg", "../images/oxford/int/24b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 25,
         //    images: ["../images/oxford/int/25a.jpg", "../images/oxford/int/25b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 26,
         //    images: ["../images/oxford/int/26a.jpg", "../images/oxford/int/26b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 27,
         //    images: ["../images/oxford/int/27.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 28,
         //    images: ["../images/oxford/int/28a.jpg", "../images/oxford/int/28b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 29,
         //    images: ["../images/oxford/int/29a.jpg", "../images/oxford/int/29b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 30,
         //    images: ["../images/oxford/int/30.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 31,
         //    images: ["../images/oxford/int/31a.jpg", "../images/oxford/int/31b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 32,
         //    images: ["../images/oxford/int/32a.jpg", "../images/oxford/int/32b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 33,
         //    images: ["../images/oxford/int/33a.jpg", "../images/oxford/int/33b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 34,
         //    images: ["../images/oxford/int/34a.jpg", "../images/oxford/int/34b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 35,
         //    images: ["../images/oxford/int/35a.jpg", "../images/oxford/int/35b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 36,
         //    images: ["../images/oxford/int/36.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 37,
         //    images: ["../images/oxford/int/37.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 38,
         //    images: ["../images/oxford/int/38.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 39,
         //    images: ["../images/oxford/int/39.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 40,
         //    images: ["../images/oxford/int/40a.jpg", "../images/oxford/int/40b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 41,
         //    images: ["../images/oxford/int/41a.jpg", "../images/oxford/int/41b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 42,
         //    images: ["../images/oxford/int/42a.jpg", "../images/oxford/int/42b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 43,
         //    images: ["../images/oxford/int/43a.jpg", "../images/oxford/int/43b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 44,
         //    images: ["../images/oxford/int/2a.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 45,
         //    images: ["../images/oxford/int/2a.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 46,
         //    images: ["../images/oxford/int/2a.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 47,
         //    images: ["../images/oxford/int/2a.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 48,
         //    images: ["../images/oxford/int/48a.jpg", "../images/oxford/int/48b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 49,
         //    images: ["../images/oxford/int/49a.jpg", "../images/oxford/int/49b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 50,
         //    images: ["../images/oxford/int/50a.jpg", "../images/oxford/int/50b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 51,
         //    images: ["../images/oxford/int/51a.jpg", "../images/oxford/int/51b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 52,
         //    images: ["../images/oxford/int/52a.jpg", "../images/oxford/int/52b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 53,
         //    images: ["../images/oxford/int/53.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 54,
         //    images: ["../images/oxford/int/54a.jpg", "../images/oxford/int/54b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 55,
         //    images: ["../images/oxford/int/55a.jpg", "../images/oxford/int/55b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 56,
         //    images: ["../images/oxford/int/56.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 57,
         //    images: ["../images/oxford/int/57.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 58,
         //    images: ["../images/oxford/int/58.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 59,
         //    images: ["../images/oxford/int/59a.jpg", "../images/oxford/int/59b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 60,
         //    images: ["../images/oxford/int/60.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 61,
         //    images: ["../images/oxford/int/61.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 62,
         //    images: ["../images/oxford/int/62a.jpg", "../images/oxford/int/62b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 63,
         //    images: ["../images/oxford/int/63a.jpg", "../images/oxford/int/63b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 64,
         //    images: ["../images/oxford/int/64a.jpg", "../images/oxford/int/64b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 65,
         //    images: ["../images/oxford/int/65a.jpg", "../images/oxford/int/65b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 66,
         //    images: ["../images/oxford/int/66a.jpg", "../images/oxford/int/66b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 67,
         //    images: ["../images/oxford/int/67a.jpg", "../images/oxford/int/67b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 68,
         //    images: ["../images/oxford/int/68.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 69,
         //    images: ["../images/oxford/int/69a.jpg", "../images/oxford/int/69b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 70,
         //    images: ["../images/oxford/int/70a.jpg", "../images/oxford/int/70b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 71,
         //    images: ["../images/oxford/int/71a.jpg", "../images/oxford/int/71b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 72,
         //    images: ["../images/oxford/int/72a.jpg", "../images/oxford/int/72b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 73,
         //    images: ["../images/oxford/int/73a.jpg", "../images/oxford/int/73b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 74,
         //    images: ["../images/oxford/int/74a.jpg", "../images/oxford/int/74b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 75,
         //    images: ["../images/oxford/int/75.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 76,
         //    images: ["../images/oxford/int/76.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 77,
         //    images: ["../images/oxford/int/77a.jpg", "../images/oxford/int/77b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 78,
         //    images: ["../images/oxford/int/78a.jpg", "../images/oxford/int/78b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 79,
         //    images: ["../images/oxford/int/79.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 80,
         //    images: ["../images/oxford/int/80a.jpg", "../images/oxford/int/80b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 81,
         //    images: ["../images/oxford/int/81a.jpg", "../images/oxford/int/81b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 82,
         //    images: ["../images/oxford/int/82a.jpg", "../images/oxford/int/82b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 83,
         //    images: ["../images/oxford/int/83.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 84,
         //    images: ["../images/oxford/int/84a.jpg", "../images/oxford/int/84b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 85,
         //    images: ["../images/oxford/int/85a.jpg", "../images/oxford/int/85b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 86,
         //    images: ["../images/oxford/int/86a.jpg", "../images/oxford/int/86b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 87,
         //    images: ["../images/oxford/int/87a.jpg", "../images/oxford/int/87b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 88,
         //    images: ["../images/oxford/int/88.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 89,
         //    images: ["../images/oxford/int/89.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 90,
         //    images: ["../images/oxford/int/90a.jpg", "../images/oxford/int/90b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 91,
         //    images: ["../images/oxford/int/91.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 92,
         //    images: ["../images/oxford/int/92.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 93,
         //    images: ["../images/oxford/int/93a.jpg", "../images/oxford/int/93b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 94,
         //    images: ["../images/oxford/int/94a.jpg", "../images/oxford/int/94b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 95,
         //    images: ["../images/oxford/int/95.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 96,
         //    images: ["../images/oxford/int/96.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 97,
         //    images: ["../images/oxford/int/97a.jpg", "../images/oxford/int/97b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 98,
         //    images: ["../images/oxford/int/98.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 99,
         //    images: ["../images/oxford/int/99a.jpg", "../images/oxford/int/99b.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // },
         // {
         //    day: 100,
         //    images: ["../images/oxford/int/100.jpg"],
         //    book: "Word Skills Intermediate",
         //    pages: [],
         //    instructions: []
         // }
      ]);


   }, [])

   function showPic() {
      setWatch(!watch)
   }

   function taskClick(day, index) {
      // setDone((prev) => {
      //    const isTaskDone = prev.some((task) => task.day === day && task.index === index);
      //    let result;
      //    if (isTaskDone) {
      //       // Remove the task from the done list
      //       result = prev.filter((task) => !(task.day === day && task.index === index));
      //    } else {
      //       // Add the task to the done list
      //       result = [...prev, { day, index }];
      //    }
      //    // Save the updated state to localStorage
      //    localStorage.setItem("doneTasks", JSON.stringify(result));
      //    return result
      // });

      setExpand((prev) => {
         const isOpen = prev.some((state) => state.day === day && state.index === index);
         let result;
         if (isOpen) {
            // Remove the state from the done list
            result = prev.filter((state) => !(state.day === day && state.index === index));
         } else {
            // Add the state to the done list
            result = [...prev, { day, index }];
         }
         // Save the updated state to localStorage
         return result
      });
   }

   function saveNotes(day, index) {
      allNotes.push({note, day, index});
      setNote('');
      localStorage.setItem("notes", JSON.stringify(allNotes));
   }

   function toggleMenu(){
      setMenu(!menu)
   }

   function closeOption(event){
      if (optionRef.current && !optionRef.current.contains(event.target)) {
         setMenu(false)
         console.log('Clicked outside the div!');
      }
   }

   function showWarning(){
      setWarning(true)
   }

   function deleteNotes(event){
      setDelNotes(event.target.checked)
   }

   function restartApp(){
      if(delNotes) {
         localStorage.removeItem('startDate')
         localStorage.removeItem('notes')
         window.location.reload()
      } else {
         localStorage.removeItem('startDate')
         window.location.reload()
      }
   }

   function cancelRestart(){
      setWarning(false)
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
            src='../images/back/background.jpg'
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

         <video className={styles.back} muted autoPlay loop playsInline>
            <source src="../videos/back.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
         </video>

         <div className={styles.holder}>
            <div className={styles.dates}>
               <div className={styles.date}>Instructions for day {currentDay}: {displayedDate}</div>
               <div className={styles.menuHolder}>
                  <div className={styles.dotHolder} onClick={toggleMenu} ref={optionRef}>
                     <SlOptionsVertical className={styles.hamIcon} />
                  </div>
                  {
                     menu ?
                     <div className={styles.menu}>
                        <div className={styles.item} onClick={showWarning}>Restart</div>
                        <div className={styles.item}>About</div>
                     </div>
                     : null

                  }
               </div>
            </div>
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
                                    priority
                                 />
                                 <div className={styles.infoLayer}>
                                    <div className={styles.book}>{info[currentDay - 1].book}</div>
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
                              <div className={`${styles.task} ${expand.length > 0 &&
                                 expand.some((state) => state.day == currentDay && state.index == index) ? styles.open : null}`}
                                 key={index} 
                              >
                                 <div className={styles.top}
                                    onClick={() => taskClick(currentDay, index)}
                                 >
                                    {task.title}
                                    
                                    <IoIosArrowDown className={`${styles.icon} ${expand.length > 0 &&
                                 expand.some((state) => state.day == currentDay && state.index == index) ? styles.turn : null}`}
                                 />
                                 </div>
                                 {task.todo}
                                 <div className={styles.extra}>
                                    <div className={styles.input}>
                                       <input className={styles.textarea}
                                          placeholder="Need a note?"
                                          type="text"
                                          value={note}
                                          onInput={(e) => setNote(e.target.value)}
                                       />
                                       <button className={styles.save}
                                          onClick={() => saveNotes(currentDay, index)}
                                       >save</button>
                                    </div>
                                    <div className={styles.notes}>
                                       {

                                          allNotes.map((item) => (
                                             item.day == currentDay && item.index == index ?
                                             <div className={styles.note}
                                                key={item.note}
                                             >
                                                {
                                                   item.note
                                                }
                                             </div>
                                             : null
                                          ))
                                       }
                                    </div>
                                 </div>

                                 
                                 {/* {
                                    done.length > 0 &&
                                    done.some((task) => task.day == currentDay && task.index == index) ? (
                                       <div className={styles.done}>Done!</div> 
                                    )  : null
                                 } */}
                              </div>
                           ))
                        }
                     </div>
                     {
                        watch ?
                        <div className={styles.hiddenPic}>
                           <div className={styles.closeHolder} onClick={showPic}>
                              <IoIosArrowRoundBack  className={styles.icon}/>
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
         {
            warning ?
            <div className={styles.warning}>
               <div>Are you sure you want to restart?</div>
               <div className={styles.btns}>
                  <button className={styles.yes} onClick={restartApp}>Yes</button>
                  <button className={styles.no} onClick={cancelRestart}>No</button>
               </div>
               <div className={styles.delNotes}>
                  <label className={styles.label}>
                     <input className={styles.checkbox}
                        type="checkbox"
                        checked={delNotes}
                        onChange={deleteNotes}
                     />
                     Delete my notes, too.
                  </label>
               </div>
            </div>
            : null
         }
      </div>
   );
};

export default StudyPlan;
