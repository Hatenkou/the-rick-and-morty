import React from "react"
import { useSelector } from "react-redux"
import styles from "./MyWatchListPage.module.css"

const MyWatchListPage = () => {
   const storeData = useSelector(state => state.watchListReduser);
   console.log(storeData);
   return (
      <div>
         MyWatchListPage
      </div>
   );

};

export default MyWatchListPage;