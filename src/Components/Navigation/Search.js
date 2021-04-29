import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../../Assets/search.svg";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "50%",
  },
}));

function NavigationSearch() {
  /*  const [loaded, setLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const DataFetcher = async () => {
    try {
      
      setLoaded(false);
      const response = await fetch(
        `url`
      );
      const data = await response.json();
      if (data.cod === 200) {
        props.setData(data);
        setTimeout(() => {
          setLoaded(true);
        }, 1000);
      } else {
        setError(data);
        showErrors(true);
      }
      setSearchInput("");
    } catch (err) {
      console.log(err);
    }
  };
  
  dopo in base alla risposta del server/api posso mappare l'array usare l'OOP, usare Normalizr etc.. etc..*/
  const classes = useStyles();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={Search} alt="thumbnail" className={classes.img} />
      </div>
    </>
  );
}
export default NavigationSearch;
