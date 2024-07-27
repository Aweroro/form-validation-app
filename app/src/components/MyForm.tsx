'use client'

import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';


interface FormProps{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

 const MyForm: React.FC = () => {
    const formik = useFormik<FormProps>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          },
          validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords do not match')
              .required('Confirm Password is required'),
          }),
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          }, 
    })

    console.log(formik);

    return(
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4 ">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-400 text-sm">{formik.errors.name}</div>
                ): null}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-400 text-sm">{formik.errors.email}</div>
                ): null}
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}/>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-400 text-sm">{formik.errors.password}</div>
                ): null}
            </div>

            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}/>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="text-red-400 text-sm">{formik.errors.confirmPassword}</div>
                ): null}
            </div>

            <div>
                <button
                type="submit"
                className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Submit</button>
            </div>
        </form>
    )
}

export default MyForm;