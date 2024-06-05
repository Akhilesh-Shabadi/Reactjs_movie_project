import React, { useState } from 'react'
import Style from '../css/addmovie.module.css'
import axiosinst from './axios'

function Addmovies() {

  let [moviedata, setmoviedata] = useState({})

  const data = (e) => {
    setmoviedata({ ...moviedata, [e.target.name]: e.target.value })
  }

  const handle = (e) => {
    e.preventDefault();
    let payload = moviedata;
    axiosinst.post("/post", payload)
  }

  return (
    <div className={Style.formholder}>
      <h2>ADD MOVIES</h2>
      <form action="" onSubmit={handle}>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Name :</label>
          <input type="text" name='mname' onChange={data} />
        </div>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Poster :</label>
          <input type="text" name='mposter' onChange={data} />
        </div>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Language :</label>
          <input type="text" name='mlang' onChange={data} />
        </div>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Genre :</label>
          <select name='mgenre' onChange={data}>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime and mystery">Crime and mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="science fiction">Science fiction</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Rating :</label>
          <select name="mrating" id="" onChange={data}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={Style.movieitems}>
          <label htmlFor="">Movie Description :</label>
          <textarea name="mdesc" id="" onChange={data}></textarea>
        </div>
        <div className={Style.movieitems}>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Addmovies