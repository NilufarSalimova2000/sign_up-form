import React from "react";
import style from "./home.module.scss";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";

export const Home = () => {
    // const input_length = {
    //     maxLength: {
    //       value: 10,
    //       message: "More than 10 characters have been entered",
    //     },
    //     minLength: {
    //       value: 2,
    //       message: "Less than 2 characters entered",
    //     },
    //   };
    
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors},
    } = useForm();

    const submit =(data) => {
        console.log(data);
        reset();
    }
    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.description}>
                        <h2 className={style.title}>Learn to code by watching others</h2>
                        <p className={style.text}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
                    </div>
                    <div className={style.form_block}>
                        <Button variant={"primary"}>Try it free 7 days then $20/mo. thereafter</Button>
                        <form onSubmit={handleSubmit(submit)} className={style.form}>
                            <div className={style.input_block}>
                                <input {...register("first_name", {required:true})} type="text" className={style.input} placeholder="First Name" />
                                <p className={style.error}>{errors.first_name && "First Name cannot be empty"}</p>
                            </div>
                            <div className={style.input_block}>
                                <input {...register("last_name", {required:true})} type="text" className={style.input} placeholder="Last Name" />
                                <p className={style.error}>{errors.last_name && "Last Name cannot be empty"}</p>
                            </div>
                            <div className={style.input_block}>
                                <input {...register("email", {required:true})} type="email" className={style.input} placeholder="Email Address" />
                                <p className={style.error}>{errors.email && "Looks like this is not an email"}</p>
                            </div>
                            <div className={style.input_block}>
                                <input {...register("password", {required:true})} type="password" className={style.input} placeholder="Password" />
                                <p className={style.error}>{errors.password && "Password cannot be empty"}</p>
                            </div>
                            <Button type="submit" variant={"secondary"}>CLAIM YOUR FREE TRIAL</Button>
                            <p className={style.info}>By clicking the button, you are agreeing to our <span className={style.active}>
                            Terms and Services</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}