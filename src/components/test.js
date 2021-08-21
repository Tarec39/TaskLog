import React from 'react'

const {
    useState,
    Fragment
} = React;

const initial = [
    ["8/20", ""],
    ["8/21", ""],
    ["8/22", ""],
    ["8/23", ""],
    ["8/24", ""],
    ["8/25", ""]
]

const Test = () => {
    const [Dates, setDates] = useState(initial);
    return Dates.map((date, i) => {
        console.log(date)
        return (
            <Fragment key = {i}>
                <input
                placeholder={date[0]}
                value={date[1]}
                // onChange={}
                onKeyPress = {
                    (e) => {
                        if(e.key === 'Enter'){
                            e.preventDefault()
                            const dateCopy = [...date];
                            dateCopy[1] = "value";
                            console.log("aaaaaa"+dateCopy[1])
                            const gridCopy = [...Dates];
                            gridCopy[i] = dateCopy;
                            setDates(gridCopy);
                        }
                    }}
                />
                <br/>
                </Fragment>
            )
    })
}
                
export default Test;
// const Test = () => {
//     const [Dates, setDates] = useState(initial);
//     return Dates.map((date, i) => {
//         console.log(date)
//         return (
//             <div key = {i}>
//                 {date.map((el, j) => {
//                     return ( 
//                         <input
//                         key = {j}
//                         // onChange={}
//                         onKeyPress = {
//                             (e) => {
//                                 if(e.key === 'Enter'){
//                                     e.preventDefault()
//                                     const dateCopy = [...date];
//                                     // dateCopy[1] = el + 1;
//                                     console.log("aaaaaa"+dateCopy[1])
//                                     // const gridCopy = [...Dates];
//                                     // gridCopy[i] = dateCopy;
//                                     // setDates(gridCopy);
//                                 }
//                             }}
//                         />
//                     )
//                 })} 
//                 <br/>
//                 </div>
//             )
//     })
// }

