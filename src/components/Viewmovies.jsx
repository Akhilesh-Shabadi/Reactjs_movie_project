import React, { useEffect, useState } from 'react';
import axiosinst from './axios';
import styles from '../css/viewmovie.module.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Viewmovies() {
  let [moviedata, setmoviedata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axiosinst.get("/post");
        setmoviedata(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchdata();
  }, []);

  let handleDelete = (id) => {
    axiosinst.delete(`/post/${id}`)
    window.location.assign("/viewmovie")
    toast.error("Item removed successfully")
  }

  return (
    <div className={styles["movie-container"]}>
      {moviedata.map((x, index) => (
        <div key={index}>
          <img src={x.mposter} alt="" className={styles.img} />
          <h2>Movie Name: {x.mname}</h2>
          <h2>Movie Language: {x.mlang}</h2>
          <h2>Movie Rating: {x.mrating}</h2>
          <h2>Movie Genre: {x.mgenre}</h2>
          <h2>Movie Description: {x.mdesc}</h2>
          <button className={styles["update-button"]}>
            <Link to={`/updatemovie/${x.id}`}>UPDATE</Link>
          </button>
          <button className={styles["delete-button"]} onClick={() => handleDelete(x.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
}

export default Viewmovies;
