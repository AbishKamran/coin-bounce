import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { getCrypto } from "../../api/external";
import styles from "./Crypto.module.css";

function Crypto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // IIFE: immediately invoked function expression
    (async function cryptoApiCall() {
      const response = await getCrypto();
      setData(response.data.slice(1));
    })();

    // Cleanup
    setData([]);
  }, []);

  if (data.length === 0) {
    return <Loader text="Startups" />;
  }

  const negativeStyle = {
    color: "#ea3943",
  };

  const positiveStyle = {
    color: "#16c784",
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.head}>
          <th>Bootsrap Startups</th>
          <th>Industry Vertical</th>
          <th>Sub Vertical</th>
          <th>City</th>
          <th>Amount(USD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr id={coin.StartupName} className={styles.tableRow}>
            <td>{coin.StartupName}</td>
          
            <td> {coin.IndustryVertical}</td>
            <td> {coin.SubVertical}</td>
            <td>{coin.CityLocation}</td>
            <td>{coin.AmountInUSD}</td>
           
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Crypto;
