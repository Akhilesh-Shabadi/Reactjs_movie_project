import React, { useEffect, useState } from 'react';
import STYLE from "../css/updatemovie.module.css";
import axiosinst from './axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Updatemovie = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    let [movieData, setMovieData] = useState({});

    let data = (e) => { setMovieData({ ...movieData, [e.target.name]: e.target.value }) };

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosinst.get(`/post/${id}`);
            setMovieData(data);
        };
        fetchData();
    }, [id]);

    let handleSubmit = (e) => {
        e.preventDefault();
        let payload = movieData;
        axiosinst.put(`/post/${id}`, payload);
        navigate("/viewmovie");
        toast.success("Update movie successfully");
    };

    return (
        <div className={STYLE.formholder}>
            <form action="" onSubmit={handleSubmit}>
                <h1>UPDATE MOVIES</h1>
                <hr />
                <div className={STYLE.formitems}>
                    <label htmlFor="">Movie Name </label>
                    <input type="text" name='mname' onChange={data} value={movieData.mname} />
                </div>
                <div className={STYLE.formitems}>
                    <label htmlFor="">Movie Poster </label>
                    <input type="text" name='mposter' onChange={data} value={movieData.mposter} />
                </div>
                <div className={STYLE.formitems}>
                    <label htmlFor="">Movie Language </label>
                    <input type="text" name='mlang' onChange={data} value={movieData.mlang} />
                </div>
                <div className={STYLE.formitems}>
                    <label htmlFor="">Movie Genre </label>
                    <input type="text" name='mgenre' onChange={data} value={movieData.mgenre} />
                </div>
                <div className={STYLE.formitems}>
                    <label htmlFor="">Movie Description </label>
                    <textarea name="mdesc" id="" onChange={data} value={movieData.mdesc}></textarea>
                </div>
                <div className={STYLE.formitems} id={STYLE.rating}>
                    <label htmlFor="">Movie Rating  :</label>
                    <select name="mrating" id="" onChange={data} value={movieData.mrating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className={STYLE.formitems} id={STYLE.btn}>
                    <button type="submit">UPDATE MOVIE</button>
                    <button type="button" onClick={() => {toast.warning("Movie Updation canceled"); navigate("/viewmovie")}}>CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default Updatemovie;