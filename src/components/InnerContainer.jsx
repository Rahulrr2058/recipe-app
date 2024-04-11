
import styles from "./innercontainer.module.css";
function InnerContainer({children}){
    return(
        <div className={styles.innercontainer}>
            {children}
        </div>
    )
}
export default InnerContainer