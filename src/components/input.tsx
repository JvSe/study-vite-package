import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge';

const Input = ({ ...rest }: ComponentProps<'input'>) => {
  return (
    <input {...rest} className={twMerge("w-full h-[4rem] border border-indigo-500 rounded-md", rest.className)} />
  )
}

export default Input;