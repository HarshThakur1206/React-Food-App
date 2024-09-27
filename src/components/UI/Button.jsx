const Button = ({children, textOnly, className, ...props}) => {

    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses += ' ' + className;
    return (
    <button className={cssClasses} {...props}>
        {children}
    </button>
  )
}

export default Button

// export default function Button({children, textOnly, className, ...props}){
//     let cssClasses = textOnly ? 'text-button' : 'button';
//     cssClasses += ' ' + className;
    
//     return(
//         <button className={cssClasses} {...props}>
//             {children}
//         </button>
//     );
// }