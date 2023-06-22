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

  const thisdata = [
    {
      id: "Class Average",
      data: [
        {
          x: "1.1",
          y: 0
        },
        {
          x: "1.2",
          y: 0
        },
        {
          x: "1.3",
          y: 0
        },
        {
          x: "1.4",
          y: 0
        },
        {
          x: "1.5",
          y: 0
        },
        {
          x: "1.6",
          y: 0
        },
        {
          x: "1.7",
          y: 0
        },
        {
          x: "2.1",
          y: 0
        },
        {
          x: "2.2",
          y: 0
        },
        {
          x: "2.3",
          y: 0
        },
        {
          x: "2.4",
          y: 0
        },
        {
          x: "2.5",
          y: 0
        },
        {
          x: "2.6",
          y: 0
        },
        {
          x: "2.7",
          y: 0
        },
        {
          x: "2.8",
          y: 0
        },
        {
          x: "3.1",
          y: 0
        },
        {
          x: "3.2",
          y: 0
        },
        {
          x: "3.3",
          y: 0
        },
        {
          x: "3.4",
          y: 0
        },
        {
          x: "3.5",
          y: 0
        },
        {
          x: "3.6",
          y: 0
        },
        {
          x: "3.7",
          y: 0
        },
        {
          x: "4.1",
          y: 0
        },
        {
          x: "4.2",
          y: 0
        },
        {
          x: "4.3",
          y: 0
        },
        {
          x: "4.4",
          y: 69
        },
        {
          x: "4.5",
          y: 45
        },
        {
          x: "4.6",
          y: 81
        },
        {
          x: "4.7",
          y: 0
        },
        {
          x: "4.8",
          y: 0
        },
        {
          x: "5.1",
          y: 0
        },
        {
          x: "5.2",
          y: 84
        },
        {
          x: "5.3",
          y: 0
        },
        {
          x: "5.4",
          y: 88
        },
        {
          x: "5.5",
          y: 89
        },
        {
          x: "5.6",
          y: 73
        },
        {
          x: "5.7",
          y: 40
        },
        {
          x: "5.8",
          y: 86
        },
        {
          x: "5.9",
          y: 84
        },
        {
          x: "6.1",
          y: 0
        },
        {
          x: "6.2",
          y: 0
        },
        {
          x: "6.3",
          y: 0
        },
        {
          x: "6.4",
          y: 0
        },
        {
          x: "6.5",
          y: 0
        },
        {
          x: "6.6",
          y: 0
        },
        {
          x: "6.7",
          y: 0
        },
        {
          x: "6.8",
          y: 0
        },
        {
          x: "6.9",
          y: 0
        },
        {
          x: "6.10",
          y: 0
        },
        {
          x: "7.1",
          y: 0
        },
        {
          x: "7.2",
          y: 0
        },
        {
          x: "7.3",
          y: 0
        },
        {
          x: "7.4",
          y: 0
        },
        {
          x: "7.5",
          y: 0
        },
        {
          x: "7.6",
          y: 0
        },
        {
          x: "7.7",
          y: 0
        },
        {
          x: "7.8",
          y: 0
        },
        {
          x: "7.9",
          y: 0
        },
        {
          x: "8.1",
          y: 0
        },
        {
          x: "8.2",
          y: 0
        },
        {
          x: "8.3",
          y: 0
        },
        {
          x: "8.4",
          y: 0
        },
        {
          x: "8.5",
          y: 0
        },
        {
          x: "8.6",
          y: 0
        },
        {
          x: "8.7",
          y: 0
        },
        {
          x: "8.8",
          y: 0
        },
        {
          x: "8.9",
          y: 0
        },
        {
          x: "8.10",
          y: 0
        },
        {
          x: "9.1",
          y: 0
        },
        {
          x: "9.2",
          y: 0
        }
      ]
    },
    {
      id: "Avg: smuTest",
      data: [
        {
          x: "1.1",
          y: 0
        },
        {
          x: "1.2",
          y: 0
        },
        {
          x: "1.3",
          y: 0
        },
        {
          x: "1.4",
          y: 0
        },
        {
          x: "1.5",
          y: 0
        },
        {
          x: "1.6",
          y: 0
        },
        {
          x: "1.7",
          y: 0
        },
        {
          x: "2.1",
          y: 0
        },
        {
          x: "2.2",
          y: 0
        },
        {
          x: "2.3",
          y: 0
        },
        {
          x: "2.4",
          y: 0
        },
        {
          x: "2.5",
          y: 0
        },
        {
          x: "2.6",
          y: 0
        },
        {
          x: "2.7",
          y: 0
        },
        {
          x: "2.8",
          y: 0
        },
        {
          x: "3.1",
          y: 0
        },
        {
          x: "3.2",
          y: 0
        },
        {
          x: "3.3",
          y: 0
        },
        {
          x: "3.4",
          y: 0
        },
        {
          x: "3.5",
          y: 0
        },
        {
          x: "3.6",
          y: 0
        },
        {
          x: "3.7",
          y: 0
        },
        {
          x: "4.1",
          y: 0
        },
        {
          x: "4.2",
          y: 0
        },
        {
          x: "4.3",
          y: 0
        },
        {
          x: "4.4",
          y: 100
        },
        {
          x: "4.5",
          y: 67
        },
        {
          x: "4.6",
          y: 83
        },
        {
          x: "4.7",
          y: 0
        },
        {
          x: "4.8",
          y: 0
        },
        {
          x: "5.1",
          y: 0
        },
        {
          x: "5.2",
          y: 100
        },
        {
          x: "5.3",
          y: 0
        },
        {
          x: "5.4",
          y: 100
        },
        {
          x: "5.5",
          y: 100
        },
        {
          x: "5.6",
          y: 51
        },
        {
          x: "5.7",
          y: 51
        },
        {
          x: "5.8",
          y: 51
        },
        {
          x: "5.9",
          y: 100
        },
        {
          x: "6.1",
          y: 0
        },
        {
          x: "6.2",
          y: 0
        },
        {
          x: "6.3",
          y: 0
        },
        {
          x: "6.4",
          y: 0
        },
        {
          x: "6.5",
          y: 0
        },
        {
          x: "6.6",
          y: 0
        },
        {
          x: "6.7",
          y: 0
        },
        {
          x: "6.8",
          y: 0
        },
        {
          x: "6.9",
          y: 0
        },
        {
          x: "6.10",
          y: 0
        },
        {
          x: "7.1",
          y: 0
        },
        {
          x: "7.2",
          y: 0
        },
        {
          x: "7.3",
          y: 0
        },
        {
          x: "7.4",
          y: 0
        },
        {
          x: "7.5",
          y: 0
        },
        {
          x: "7.6",
          y: 0
        },
        {
          x: "7.7",
          y: 0
        },
        {
          x: "7.8",
          y: 0
        },
        {
          x: "7.9",
          y: 0
        },
        {
          x: "8.1",
          y: 0
        },
        {
          x: "8.2",
          y: 0
        },
        {
          x: "8.3",
          y: 0
        },
        {
          x: "8.4",
          y: 0
        },
        {
          x: "8.5",
          y: 0
        },
        {
          x: "8.6",
          y: 0
        },
        {
          x: "8.7",
          y: 0
        },
        {
          x: "8.8",
          y: 0
        },
        {
          x: "8.9",
          y: 0
        },
        {
          x: "8.10",
          y: 0
        },
        {
          x: "9.1",
          y: 0
        },
        {
          x: "9.2",
          y: 0
        }
      ]
    }
  ];

  useEffect(() => {
    setExpectedAmount(0)
    setExpectedAmount(0)
    for (let i = 0; i < students.length; i++) {
      setExpectedAmount((prev) => prev + students[i].payableFee)
      setPaidAmount((prev) => prev + students[i].paidFee)
    }
  }, [students])
    
  const gddata = [
    ["Gender", "Population"],
    ["Girls", 300],
    ["Boys", 200],
  ]

  const gsdata = [
    ["Class", "Population"],
    ["Form 1", 300],
    ["Form 2", 200],
    ["Form 3", 300],
    ["Form 4", 200],
    ["Form 5", 300],
    ["Lower Sixth", 200],
  ]

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
    ["Form 1", 30, 40],
    ["Form 2", 50, 60],
    ["Form 3", 70, 80],
    ["Form 4", 40, 50],
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
          value={(students.length/classes.length).toFixed(3)}
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