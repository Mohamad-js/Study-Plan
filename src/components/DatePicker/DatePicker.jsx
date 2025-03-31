"use client";
import { useStudyPlan } from "@/context/StudyPlanContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-jalaali";

const CustomDatePicker = () => {
   const { setStartDate } = useStudyPlan();

   const handleDateChange = (date) => {
      const selectedDate = moment(date).format("jYYYY/jMM/jDD");
      setStartDate(selectedDate);
      localStorage.setItem("startDate", selectedDate);
   };

   return (
      <div>
         <p>Select your start date:</p>
         <DatePicker
            selected={new Date()}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            className="border p-2 rounded"
         />
      </div>
   );
};

export default CustomDatePicker;
