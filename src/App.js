import './App.css';
import Alerter from './component/Alerter'
import Calspent from './component/Calspent';
import Moneyspent from './component/Moneyspent';
import Itemlister from './component/Itemlister';
import AddItem from './component/Additems';
import { useState, useEffect } from 'react';

function App() {

  const climit = 2100;
  const mbudget = 1000;

  const [meals, setMeals] = useState([]);
  const [filtered, setFiltered] = useState(meals);

  const [alertInfo, setAlert] = useState([]);
  const [calspent, setCalspent] = useState(0);
  const [moneyspent, setMoneyspent] = useState(0);



  const addMeals = (meal) => {

    const newrec = {
      set: true,
      msg: 'New Record added successfully!!',
      cclass: 'success'
    };

    const newfailed = {
      set: true,
      msg: 'Please check values!',
      cclass: 'warn'
    }


    if (meal) {
      setMeals(m => [...m, meal]);
      setMoneyspent(o => o + +meal.price);
      setCalspent(o => o + +meal.cal);
      setAlert(old => [...old, newrec]);
      setFiltered(meals);
    } else {
      setAlert(old => [...old, newfailed]);
    }

    limitcheck();

   

    let interval = setTimeout(() => {
      setAlert([]);
    }, 3000);
    return () => clearInterval(interval);


  };
  const limitcheck = () => {
    if (calspent > climit) {
      const cexceeded = {
        set: true,
        msg: 'Your Daily Calorie limit is exceeded!!',
        cclass: 'warn'
      }
      setAlert(old => [...old, cexceeded]);
    }
    if (moneyspent > mbudget) {
      const mexceeded = {
        set: true,
        msg: 'Your Monthly Budget is exceeded!!',
        cclass: 'warn'
      };
      setAlert(old => [...old, mexceeded]);
    }
  }

  useEffect(() => {
    setAlert([]);
    limitcheck();

  }, [])

  const filterBySearch = (event) => {

    const query = event.target.value;

    var updatedList = [...meals];

    updatedList = updatedList.filter((item) => {
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        return item;
    });

    setFiltered(updatedList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calorie Tracker</h1>
      </header>
      {
        alertInfo && <Alerter alert={alertInfo} />
      }

      <section className="global-info">
        <Calspent spent={calspent} cclass={(calspent > climit ? 'twarn' : 'tok')} />
        <Moneyspent spent={moneyspent} cclass={(moneyspent > mbudget ? 'twarn' : 'tok')} />
      </section>

      <div className='container'>
        <AddItem addMeals={addMeals} items={meals} />

        {(filtered.length &&
          <>
            <div className='search'> <label className="search-text">Search: </label>
              <input id="search-box" onChange={filterBySearch} />
            </div>
            <Itemlister items={filtered} setMeals={setMeals} />
          </>)}
      </div>
    </div>

  );
}

export default App;
