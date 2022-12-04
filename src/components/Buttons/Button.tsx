import React, {FC, PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
    onClick: () => void;
    type: "alert" | "primary" | "success" | "fail";
    title: string,
    disabled: boolean;
  }>;

export const Button : FC<Props> = ({
    onClick, 
    type, 
    title, 
    disabled }) => {

        const bgColorClasses = {
            alert: "bg-alert",
            primary: "bg-primary",
            success: "bg-success",
            fail: "bg-fail"
        }
    
        const hoverColorClasses = {
            alert: "hover:bg-alert-dark",
            primary: "hover:bg-primary-dark",
            success: "hover:bg-success-dark",
            fail: "hover:bg-fail-dark"
        }

        const TextColorClasses = {
            alert: "active:text-alert",
            primary: "active:text-primary",
            success: "active:text-success",
            fail: "active:text-fail"
        }

        const borderColorClasses = {
            alert: "active:border-alert",
            primary: "active:border-primary",
            success: "active:border-success",
            fail: "active:border-fail"
        }



    return (
        
        <button 
        className={`${bgColorClasses[type]} ${hoverColorClasses[type]} active:bg-white px-6 py-1 rounded-lg border-2 border-black ${borderColorClasses[type]} duration-150 ease-in-out text-white ${TextColorClasses[type]}`} 
        onClick={() => onClick()} 
        disabled={disabled}>
            <div className={` arial font-semibold `}>
                {title}
            </div>
        </button>
    )
}