// import styles from './Button.module.css'

function Button() {

    // EXTERNAL CSS
    /* return(<button className="button">Click me</button>) */

    // MODULE CSS
   /* return(<button className={styles.button}>Click me</button>)
   */

   // INLINE CSS
   const styles = {
    backgroundColor: "#266DD3",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
   }

   return(
    <button style={styles}>Click me</button>
   );
}
export default Button // Preciso para funcionar

// No MODULE CSS você irá criar um nova paste dentro de (src) e após isso você irá criar  o arquivo para o CSS e outro para o JSX