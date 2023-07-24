import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Hooks/Context'
import './Dashboard.css'
import StatCard from './statcard/StatCard';
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FaMoneyBillAlt } from "@react-icons/all-files/fa/FaMoneyBillAlt";
import { FaMoneyBill } from "@react-icons/all-files/fa/FaMoneyBill";
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
import { parse } from '../../functions';
import { Chart } from "react-google-charts";
import { FaSchool } from "@react-icons/all-files/fa/FaSchool";
import { FaClock } from "@react-icons/all-files/fa/FaClock";

export function m(n, d) {
  let x = ('' + n).length, p = Math.pow;
  d = p(10, d);
  x -= x % 3
  return Math.round(n * d / p(10, x)) / d + "kMBTPE"[x / 3]
}

function Dashboard() {
  const { students, currency, classes, payments } = useContext(MainContext);
  const [expectedAmount, setExpectedAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const gddata = [
    ["Gender", "Population"], 
    ["Girls",  (students.filter((obj) => obj.sex === "F")).length],
    ["Boys", (students.filter((obj) => obj.sex === "M")).length]
    ]
  
  const gsdata = [
      ["Class", "Population"],
      ...classes.map((c)=> {
        return [`${c.name}`, students.filter((obj) => obj.class === `${c.name}`).length ]
      })
    ]

  useEffect(() => {
    console.log(gsdata)
    setExpectedAmount(0)
    for (let i = 0; i < students.length; i++) {
      setExpectedAmount((prev) => prev + students[i].payableFee)
      setPaidAmount((prev) => prev + students[i].paidFee)
    }
  }, [students]) 


    const gdoptions = {
    title: "Gender Distributions",
    legend: "none",
    pieSliceText: "label",
    slices: {
    },
  };

  const gsoptions = {
    title: "Class Population Distributions",
    pieSliceText: "label",
    slices: {
    },
  };

  const classesbarchartdata = [
    ["Year", "Girls", "Boys"],
    ...classes.map((c)=> {
      return [`${c.name}`, 
       students.filter((obj) => obj.sex === `F` && obj.class === `${c.name}`).length,
       students.filter((obj) => obj.sex === `M` && obj.class === `${c.name}`).length ]
    })
  ];

  const classesbarchartoptions = {
    chart: {
      title: "Class Population Distribution",
      subtitle: "Girls and Boys in school",
    },
  };

  return (
    <div>
      <div><h1>Dashboard</h1></div>
      <section className='stats'>
        <StatCard
          value={students.length}
          attribute={"STUDENTS"}
          icon={<FaUsers />}
          bg="#fff"
          link={"students"}
        />
        <StatCard
          value={ parse.format(expectedAmount) + " " + currency}
          attribute={"TOTAL EXPECTED"}
          icon={<FaMoneyBillAlt />}
          bg="#fff"
          link={"payments"}
        />
        <StatCard
          value={parse.format(paidAmount) + " " + currency}
          attribute={"TOTAL PAID"}
          icon={<FaMoneyBill />}
          bg="#fff"
          link={"payments"}
        />
        <StatCard
        value={parse.format((expectedAmount - paidAmount)) + " " + currency}
        attribute={"BALANCE"}
        icon={<FaMoneyCheckAlt />}
        bg="#fff"
        link={"payments"}
        />
      </section>
      <h1> School Distribution</h1>
      <section className='schooldistribution'>
        <div className='piechart'>
        <Chart
         chartType="PieChart"
         data={gddata}
         options={gdoptions}
         width={"100%"}
         height={"400px"}
    />
        </div>
        <div className='barchart'>
        <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={classesbarchartdata}
      options={classesbarchartoptions}
    />
    </div>
    <div className="piegraph">
    <Chart
         chartType="PieChart"
         data={gsdata}
         options={gsoptions}
         width={"100%"}
         height={"500px"}
    />
    </div>
      </section>
      <section className='stats'>
        <StatCard
          value={classes.length}
          attribute={"CLASSES"}
          icon={<FaSchool />}
          bg="#fff"
          link={"classes"}
        />
        <StatCard
          value={payments.length}
          attribute={"PAYMENTS MADE"}
          icon={<FaMoneyBillAlt />}
          bg="#fff"
          link={"payments"}
        />
        <StatCard
          value={students.length !== 0 ? (Math.floor(students.length/classes.length)): 0}
          attribute={"AVERAGE CLASS SIZE"}
          icon={<FaSchool />}
          bg="#fff"
          link={"classes"}
        />
        <StatCard
        value={9}
        attribute={"MONTHS LEFT"}
        icon={<FaClock />}
        bg="#fff"
        link={"payments"}
        />
      </section>
    </div>
  )
}

export default Dashboard