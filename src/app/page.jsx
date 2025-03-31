"use client";
import { useEffect, useState } from "react";
import { useStudyPlan } from "@/context/StudyPlanContext";
import moment from "moment-jalaali";
import DatePicker from "@/components/DatePicker/DatePicker";




const StudyPlan = () => {
   const { startDate, currentDay, setCurrentDay } = useStudyPlan();
   const [persianDate, setPersianDate] = useState("");
   const [info, setInfo] = useState([]);

   useEffect(() => {
      const infoReq = async () => {
         const response = await fetch('http://localhost:8080/info');
         const data = await response.json();
         setInfo(data);
      }

      infoReq()
   }, [])

   useEffect(() => {
      setPersianDate(moment().format("jYYYY/jMM/jDD"));
   }, []);

   if (!startDate) {
      return (
      <div className="p-4">
         <p>Please set a start date first.</p>
         <DatePicker /> {/* Render the DatePicker component */}
      </div>
      );
   }

   const baseDate = moment(startDate, "jYYYY/jMM/jDD").add(currentDay - 1, "days");
   const displayedDate = baseDate.format("jYYYY/jMM/jDD");

   return (
      <div className="p-4">
         <h1 className="text-xl font-bold">Study Plan</h1>
         <p>Today Persian Date: {persianDate}</p>
         <p>Study Plan for Day {currentDay} ({displayedDate})</p>

         <div className="mt-4 border p-4">
            <p>Instructions for today...</p>
            <p>روز {currentDay}</p>
            {
               info.length > 0 ?
               <>
                  <div>{info[currentDay - 1].day}</div>
                  <div>{info[currentDay - 1].images}</div>
                  <div>{info[currentDay - 1].instructions}</div>
               </>
               : null
            }
         </div>

         <div className="mt-4">
            <button
               disabled={currentDay === 1}
               onClick={() => setCurrentDay(currentDay - 1)}
               className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
               Previous Day
            </button>
            <button
               disabled={currentDay === 700}
               onClick={() => setCurrentDay(currentDay + 1)}
               className="bg-blue-500 text-white px-4 py-2 rounded"
            >
               Next Day
            </button>
         </div>
      </div>
   );
};

export default StudyPlan;
