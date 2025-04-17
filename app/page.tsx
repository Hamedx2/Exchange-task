import styles from "./page.module.css";

import Form from "@/components/Form";

function Page() {
  return (
    <div className={styles.container}>
      <h1>___Exchange Currencies___</h1>
      <Form />
    </div>
  );
}

export default Page;
